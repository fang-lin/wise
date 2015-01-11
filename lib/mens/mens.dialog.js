/**
 * Created by fanglin on 14-1-4.
 */

(function ($) {

    $.mDialogOpts = {
        resizeDuration: 200,
        resizeStrokeWidth: 6,
        inOutDuration: 200,
        maxText: ['Max', 'Min'],
        closeText: ['Close'],
        zIndex: 100,
        default: {
            open: function () {
            },
            close: function () {
                return true
            },
            title: 'm-dialog',
            content: '',
            id: null,
            cls: null,
            resize: [true, true],
            max: true,
            mask: true,
            drag: true,
            width: null,
            height: null
        }
    };

    var Dialog = function (opts) {

        this.open = opts.open;
        this.close = opts.close;
        this.id = opts.id;
        this.cls = opts.cls;
        this.width = opts.width;
        this.height = opts.height;
        this._resize = opts.resize;
        this._max = opts.max;
        this._mask = opts.mask;
        this._canDrag = opts.drag;

        this.init(opts.title, opts.content);
    };

    Dialog._zIndex = $.mDialogOpts.zIndex;

    Dialog.zIndex = function () {
        return Dialog._zIndex += 2;
    };

    Dialog.prototype = {
        constructor: Dialog,

        init: function (title, content) {
            var self = this;
            this.wrap = $('<div class="m-dialog"></div>').attr('id', this.id).addClass(this.cls).css('z-index', Dialog.zIndex()).css('width', this.width);
            this.mask = $('<div class="m-mask"></div>').css('z-index', Dialog._zIndex - 1);

            if (this._mask) {
                $('.m-mask:last').hide(0);
                this.mask.appendTo('body');
            }

            $(window).off('_dialogFitSize').on('resize._dialogFitSize', function _dialogFitSize() {
                $('.m-dialog[max] .m-dialog-body').css('height', $(window).height() - self.header.height() - self.footer.height());
            });

            if (typeof content === 'function') {
                content(this.wrap, this);
            } else {
                this.render(title, content);
            }
        },
        render: function (title, content) {

            this._renderHeader(title)._renderBody(content)._renderFooter()._onClick()._onResize(this._resize)._onDrag(this._canDrag).onTop().isMax = false;
            this.wrap.append(this.header).append(this.body).append(this.footer);

            this._appendTo('body');
        },
        _appendTo: function (dom) {

            $(dom).append(this.wrap);

            this.open(this.wrap, this);

            var _top = ($(window).height() - this.wrap.height()) / 2;
            if (_top < 0) _top = 0;

            $('body').addClass('m-no-scroll');

            this.setSize().wrap.css('top', -this.wrap.height()).css('left', ($(window).width() - this.size.width) / 2).css('opacity', 0).animate({
                top: _top,
                opacity: 1
            }, $.mDialogOpts.inOutDuration);

            return this;
        },
        setSize: function () {
            this.size = {
                width: this.wrap.width(),
                height: this.body.height(),
                top: this.wrap.position().top,
                left: this.wrap.position().left
            };
            return this;
        },
        _close: function () {
            this.close(this.wrap, this);
            this.remove();
        },
        remove: function () {
            var self = this;
            this._mask && this.mask.remove() && $('.m-mask:last').show(0);

            this.wrap.animate({
                top: -this.wrap.height(),
                opacity: 0
            }, $.mDialogOpts.inOutDuration, function () {
                self.wrap.remove();
                if ($('.m-dialog').length === 0) $('body').removeClass('m-no-scroll');
            });
            return this;
        },
        _renderHeader: function (title) {
            this.header = $('<div class="m-dialog-header' + (this._canDrag ? ' m-move' : '') + '"><h1 class="m-dialog-h1">' + title + '</h1><ul class="m-dialog-h2"></ul><ul class="m-dialog-h3"></ul></div>');
            this.panel = {
                max: $('<li><a class="m-dialog-max">' + $.mDialogOpts.maxText[0] + '</a></li>'),
                close: $('<li><a class="m-dialog-close">' + $.mDialogOpts.closeText + '</a></li>')
            };
            var h3 = $('.m-dialog-h3', this.header).append(this.panel.close);
            if (this._max) h3.prepend(this.panel.max);

            return this;
        },
        _onClick: function () {
            var self = this;
            if (this._max) {
                this.header.dblclick(function () {
                    self.triggerMax();
                });
                this.panel.max.click(function () {
                    self.triggerMax();
                });
            }
            this.panel.close.click(function () {
                self._close();
            });
            return this;
        },
        _renderBody: function (content) {
            this.body = $('<div class="m-dialog-body">' + content + '</div>').css('height', this.height);
            return this;
        },
        _renderFooter: function () {
            this.footer = $('<div class="m-dialog-footer"><div class="m-box-in-footer">&nbsp;</div></div>');
            return this;
        },
        _onResizeCursors: [
            'm-ew-resize',
            'm-ns-resize',
            'm-nesw-resize',
            'm-nwse-resize'
        ],
        _onResize: function (resize) {
            var self = this,
                stroke = $.mDialogOpts.resizeStrokeWidth,
                cursors = self._onResizeCursors.join(' ');

            if (resize[0] || resize[1]) {
                this.wrap.on('mousemove._dialogResizeCursor',function _dialogResizeCursor(event) {

                    var offsetX = event.pageX - $(event.currentTarget).offset().left,
                        offsetY = event.pageY - $(event.currentTarget).offset().top;

                    var r = self.wrap.width() - offsetX,
                        b = self.wrap.height() - offsetY;

                    if (resize[0] && r < stroke && b > stroke) {

                        $('body').removeClass(cursors).addClass('m-ew-resize');
                        self._onResizeDrag('m-ew-resize', 1, 0);

                    } else if (resize[0] && resize[1] && r < stroke && b < stroke) {

                        $('body').removeClass(cursors).addClass('m-nwse-resize');
                        self._onResizeDrag('m-nwse-resize', 1, 1);

                    } else if (resize[1] && b < stroke) {

                        $('body').removeClass(cursors).addClass('m-ns-resize');
                        self._onResizeDrag('m-ns-resize', 0, 1);

                    } else {

                        $('body').removeClass(cursors);
                        self.wrap.off('._initDialogResize');
                    }

                }).on('mouseout', function () {

                    $('body').removeClass(cursors);
                });
            }
            return this;
        },
        _onResizeDrag: function (cursor, x, y) {
            var self = this;

            this.wrap.off('._initDialogResize').on('mousedown._initDialogResize', function _initDialogResize(event) {

                var offset = {
                    left: self.wrap.width() - event.screenX,
                    top: self.body.height() - event.screenY
                };

                $('body').addClass(cursor + '-drag');

                $(document).on('mousemove._dialogResize',function _dialogResize(event) {

                    x && self.wrap.css('width', event.screenX + offset.left);
                    y && self.body.css('height', event.screenY + offset.top);

                }).one('mouseup._endDialogResize', function _endDialogResize() {

                    $(document).off('._dialogResize');
                    $('body').removeClass(cursor + '-drag');
                });
            });
            return this;
        },
        _offResize: function () {
            this.wrap.off('._dialogResizeCursor, ._initDialogResize');
            $(document).off('._dialogResize, ._endDialogResize');
            return this;
        },
        _onDrag: function (canDrag) {
            if (canDrag) {

                var self = this;
                this.header.on('mousedown._initDialogDrag', function _initDialogDrag(event) {

                    var offset = {
                        left: event.screenX - self.wrap.position().left,
                        top: event.screenY - self.wrap.position().top
                    };

                    self.wrap.width(self.wrap.width());
                    $('body').addClass('m-move');

                    $(document).on('mousemove._dialogDrag',function _dialogDrag(event) {

                        self.wrap.css('left', event.screenX - offset.left).css('top', event.screenY - offset.top);

                    }).one('mouseup._endDialogDrag', function _endDialogDrag() {

                        $(document).off('._dialogDrag');
                        $('body').removeClass('m-move');
                    });
                });
            }
            return this;
        },
        _offDrag: function () {
            this.setSize().header.off('._initDialogDrag');
            $(document).off('._dialogDrag, ._endDialogDrag');
            return this;
        },
        triggerMax: function () {
            var self = this;

            if (this.isMax) {
                this.isMax = false;
                this.panel.max.find('a').removeClass('m-dialog-min').addClass('m-dialog-max');
                this.wrap.removeAttr('max').animate({
                    top: this.size.top,
                    left: this.size.left,
                    width: this.size.width
                }, $.mDialogOpts.resizeDuration);

                this.body.animate({
                    height: this.size.height
                }, $.mDialogOpts.resizeDuration, function () {
                    self._onResize(self._resize)._onDrag(self._canDrag);
                    $('a', self.panel.max).html($.mDialogOpts.maxText[0]);
                });
            } else {
                this.isMax = true;
                this.panel.max.find('a').removeClass('m-dialog-max').addClass('m-dialog-min');
                this._offDrag()._offResize().wrap.attr('max', true).animate({
                    left: 0,
                    top: 0,
                    width: '100%'
                }, $.mDialogOpts.resizeDuration);


                this.body.animate({
                    height: $(window).height() - this.header.height() - this.footer.height()
                }, $.mDialogOpts.resizeDuration, function () {
                    $('a', self.panel.max).html($.mDialogOpts.maxText[1]);
                });
            }
            return this;
        },
        onTop: function () {
            var self = this;
            this.wrap.mousedown(function () {
                $('.m-dialog').each(function () {
                    if ($(this).css('z-index') > self.wrap.css('z-index')) {
                        $(this).css('z-index', $(this).css('z-index') - 2);
                    }
                });
                self.wrap.css('z-index', Dialog._zIndex);
            });
            return this;
        },
        dialogs: function () {
            return Dialog.dialogs;
        }
    };

    $.mDialog = function (opts) {
        var _opts = $.extend({}, $.mDialogOpts.default, opts);
        return new Dialog(_opts);
    };

})(jQuery);
