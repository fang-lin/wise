/**
 * Created by Justin on 13-12-30.
 */
(function ($) {

    $.fn.mDull = function (name) {
        var els = $();
        this.each(function () {
            var $this = $(this);
            if ($this.data(name)) {
                $this.data(name, $this.data(name) + 1);
            } else {
                els = els.add(this);
                $this.data(name, 1);
            }
        });
        return els;
    };

    $.mRandHex = function (length) {
        var len = length || 16,
            code = '';

        for (var i = Math.ceil(len / 8); i > 0; i--) {
            code += (268435456 + Math.floor(Math.random() * (4294967295 - 268435456 + 1))).toString(16);
        }
        if (len % 8) {
            code = code.slice(0, len);
        }
        return code;
    };

    $.fn.mRock = function (list, interval) {
        var _interval = 200,
            _list = [
                '...     ', '.. .    ', '..  .   ', '. .  .  ', '.  .  . ', ' .  .  .',
                '  .  . .', '    . ..', '     ...', '     ...', '    . ..', '  .  . .',
                ' .  .  .', '.  .  . ', '. .  .  ', '..  .   ', '.. .    ', '...     '
            ];

        list && $.isNumeric(list) && (_interval = list) || $.isArray(list) && (_list = list);
        interval && $.isNumeric(interval) && (_interval = interval) || $.isArray(interval) && (_list = interval);

        return this.each(function () {
            var i = 0,
                $this = $(this),
                len = _list.length - 1;
            if (!$this.is('input')) {
                for (var j = 0, l = list.length; j < l; j++) {
                    _list[j] = _list[j].toString().replace(/[\s\uFEFF\xA0]/g, '&nbsp;');
                }
            }
            setInterval(function () {
                $this.is('input') ? $this.val(_list[i]) : $this.html(_list[i]);
                i = i === len ? 0 : ++i;
            }, _interval);
        });
    };

    $.mPad = function (num, n) {
        var len = num.toString().length;
        while (len++ < n)
            num = '0' + num;
        return num;
    };

    /**
     * Frame Animate v1.4
     * Justin Fang, 2014
     */

    function FrameAnimate(initX, initY) {
        this.initX = initX;
        this.initY = initY;
        this.x = this.initX;
        this.y = this.initY;
        this.count = 0;
    }

    FrameAnimate.prototype.constructor = FrameAnimate;

    FrameAnimate.prototype.next = function (intervalX, intervalY, total) {
        this.x = this.initX - intervalX * (this.count % total);
        this.y = this.initY - intervalY * (this.count % total);
        this.count++;
    };

    $.fn.mFrameAnimate = function (init, fn) {
        var _init = $.extend({}, {
            initX: 0,
            initY: 0,
            intervalX: 0,
            intervalY: 0,
            interval: 100,
            total: 1
        }, init);
        return this.each(function () {

            var $this = $(this),
                f = new FrameAnimate(_init.initX, _init.initY);

            clearInterval($(this).data('play'));

            $this.data('play', setInterval(function () {
                f.next(_init.intervalX, _init.intervalY, _init.total);
                $this.css('background-position', f.x + 'px ' + f.y + 'px');
                (typeof fn === 'function') && fn(f.count, _init.total);
            }, _init.interval));
        });
    };

    $.fn.mFrameAnimateStop = function () {
        return this.each(function () {
            clearInterval($(this).data('play'));
        });
    };

    $.event.special.longmousepress = {
        setup: function (data) {
            $(this).on('mousedown', data, $.event.special.longmousepress.handler);
        },
        teardown: function () {
            $(this).off('mousedown', $.event.special.longmousepress.handler);
        },
        handler: function (event) {
            var self = this,
                _delayHandle,
                _pulseHandle,
                _delay = event.data && event.data.delay || 3000,
                _pulse = event.data && event.data.pulse || false;

            event.type = "longmousepress";
            _delayHandle = setTimeout(function () {
                _pulse ? _pulseHandle = setInterval(function () {
                    $.event.handle.call(self, event);
                }, _pulse) : $.event.handle.call(self, event);
            }, _delay);
            $(document).on('mouseup', function () {
                clearTimeout(_delayHandle);
                clearInterval(_pulseHandle);
            });
        }
    };

    $.fn.longmousepress = function (data, fn) {
        $(this).on('longmousepress', data, fn);
    };

})(jQuery);