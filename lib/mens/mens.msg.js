/**
 * Created by Justin on 14-2-26.
 */

(function ($) {

    $.mMsgOpts = {
        duration: 100,
        vanish: 250,
        maxQueueSize: 5,
        bufferSize: 5000,
        life: 5000,
        padding: 10,
        separate: 10,
        default: {
            open: function (dom, msg) {},
            close: function (dom, msg) {},
            text: '',
            id: '',
            cls: '',
            xy: [0, 2],
            life: 5000,
            prior: false
        }
    };

    var Msg = function (opts) {
        this.id = opts.id;
        this.cls = opts.cls;
        this.text = opts.text;
        this.xy = opts.xy;
        this.life = opts.life;
        this.open = opts.open;
        this.close = opts.close;
        this.text = opts.text;
        this.prior = opts.prior;

        this.init();
    };
    Msg.buffer = [[], [], [], [], [], []];
    Msg.choke = [0, 0, 0, 0, 0, 0];
    Msg.inject = function (msg) {
        var _buffer = Msg.buffer[msg.dir];
        if (_buffer.length < $.mMsgOpts.bufferSize) {
            msg.prior ? _buffer.splice(0, 0, msg) : _buffer.push(msg);
        }
        return Msg;
    };
    Msg.flush = function (msg) {
        var _buffer = Msg.buffer[msg.dir];
        if (_buffer.length) {
            var _msg = _buffer[0];
            if (msg.queue().length < $.mMsgOpts.maxQueueSize && !Msg.choke[msg.dir]) {
                _msg.render();
                _buffer.splice(0, 1);
            }
        }
        return Msg;
    };
    Msg.prototype = {
        constructor: Msg,

        init: function () {
            this.dir = this.xy[0] * 3 + this.xy[1];
            this._duration = $.mMsgOpts.duration;

            Msg.inject(this).flush(this);
        },
        render: function () {
            this.wrap = $('<div class="m-msg"><div class="m-msg-text">' + this.text + '</div></div>').attr('id', this.id).addClass(this.cls);
            this.panel = $('<div class="m-msg-right"></div>');
            this.cross = $('<a class="m-msg-close">Close</a>');
            this.wrap.prepend(this.panel.append(this.cross));

            this._appendTo('body');
        },
        _appendTo: function (dom) {
            var self = this,
                queue = this.queue();

            $(dom).append(this.wrap);
            this.outerHeight = this.wrap.outerHeight() + $.mMsgOpts.separate;
            this._slideGoProp = this.xy[0] ? {bottom: '+=' + this.outerHeight} : {top: '+=' + this.outerHeight};
            this._slideBackProp = this.xy[0] ? {bottom: '-=' + this.outerHeight} : {top: '-=' + this.outerHeight};
            this.open(this.wrap, this);
            this.wrap.attr('dir', this.dir);

            Msg.choke[this.dir] = 1;
            this.slideIn(queue, function () {

                self.wrap.fadeIn(self._duration, function () {

                    self._onLife()._onClick();
                    Msg.choke[self.dir] = 0;
                    Msg.flush(self);
                });
            });
            return this;
        },
        slideIn: function (queue, callback) {
            var self = this;

            if (queue.length) {

                var once = true;
                queue.animate(this._slideGoProp, this._duration, function () {
                    if (once) {
                        once &= false;
                        self._setXY(self.xy);
                        callback();
                    }
                });

            } else {
                this._setXY(this.xy);
                callback(this.wrap);
            }
            return this;
        },
        _setXY: function (xy) {

            this.wrap.hide(0);
            xy[0] ?
                this.wrap.css('top', 'auto').css('bottom', $.mMsgOpts.padding) :
                this.wrap.css('top', $.mMsgOpts.padding);

            xy[1] === 1 ?
                this.wrap.css('left', ($(window).width() - this.wrap.outerWidth()) / 2) :
                this.wrap.css(xy[1] ? 'right' : 'left', $.mMsgOpts.padding);

            return this;
        },
        _onLife: function () {
            var self = this;

            if (this.life > 0) {

                this.vanish = setTimeout(function () {
                    self.fadeOutSlideBack($.mMsgOpts.vanish);
                }, this.life);
            }
            return this;
        },
        _onClick: function () {
            var self = this;

            this.cross.one('click', function () {
                self.fadeOutSlideBack(true);
            });
            return this;
        },
        fadeOutSlideBack: function (dura) {
            var self = this;
            clearTimeout(self.vanish);

            this.wrap.animate({
                opacity: 'hide'
            }, {
                queue: false,
                duration: dura,
                complete: function () {

                    var queue = self.queue(),
                        sliceQueue = queue.slice(0, queue.index(self.wrap));

                    self.close(self.wrap, self);
                    self.wrap.remove();

                    if (sliceQueue.length) {
                        var once = true;
                        sliceQueue.animate(self._slideBackProp, self._duration, function () {
                            if (once) {
                                Msg.flush(self);
                                once &= false;
                            }
                        });
                    } else {
                        Msg.flush(self);
                    }
                }
            });
        },
        queue: function () {
            return $('.m-msg[dir="' + this.dir + '"]');
        }
    };

    $.mMsg = function (opts) {
        var _opts = $.extend({}, $.mMsgOpts.default, opts);
        return new Msg(_opts);
    };

})(jQuery);
