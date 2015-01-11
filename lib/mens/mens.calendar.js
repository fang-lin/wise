/**
 * Created by fanglin on 13-12-21.
 */

(function ($) {

    $.mCalendarOpts = {
        days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        duration: 100,
        inProps: { opacity: 'show' },
        outProps: { opacity: 'hide' },
        format: {
            date: function (date) {
                return date.getFullYear() + '-' + $.mPad(date.getMonth() + 1, 2) + '-' + $.mPad(date.getDate(), 2);
            },
            time: function (date) {
                return $.mPad(date.getHours(), 2) + ':' + $.mPad(date.getMinutes(), 2) + ':' + $.mPad(date.getSeconds(), 2);
            },
            datetime: function (date) {
                return $.mCalendarOpts.format.date(date) + ' ' + $.mCalendarOpts.format.time(date);
            }
        },
        defaultFn: function (handle) {
            return {
                handle: handle,
                date: new Date(),
                validate: function () {
                    return true
                },
                callback: function (date) {
                    handle.val(date);
                },
                clear: function () {
                    handle.val('');
                },
                mode: 'datetime'
            }
        }
    };

    var Calendar = function (opts) {
        this._date = new Date(opts.date);
        this.validate = opts.validate;
        this.callback = opts.callback;
        this.clear = opts.clear;
        this._hasCale = true;
        this._hasClock = true;

        if (opts.mode === 'date') {
            this._hasClock = false;
        } else if (opts.mode === 'time') {
            this._hasCale = false;
        }
        this.init();
    };
    Calendar.compareDate = function (dateA, dateB) {
        var a = dateA.getFullYear() * 10000 + dateA.getMonth() * 100 + dateA.getDate(),
            b = dateB.getFullYear() * 10000 + dateB.getMonth() * 100 + dateB.getDate();
        return a > b ? 1 : (a === b) ? 0 : -1;
    };
    Calendar.prototype = {
        constructor: Calendar,

        init: function () {
            this._initDate().wrap = $('<div class="m-calendar"></div>').data('_mCalendar', this).click(function (event) {
                event.stopPropagation();
            });
            this.top = $('<div class="m-calendar-top"></div>');
            this.table = $('<table class="m-calendar-tab"></table>');
            this.btm = $('<div class="m-calendar-btm"></div>');
            if (this._hasCale) {
                this.renderTop().wrap.append(this.top);
                this.renderTable().wrap.append(this.table);
            }
            if (this._hasClock) {
                this.renderBtm().wrap.append(this.btm);
            }
            return this;
        },
        _initDate: function () {
            this.date = new Date(this._date);
            this._tabDate = new Date(this._date);
            this._tabDate.setDate(1);
            return this;
        },
        renderTop: function () {
            var inner = '<input type="text" readonly/><span><a icon="up"></a><a icon="down"></a></span>',
                dom = '<span class="m-calendar-reset"></span>';
            dom += '<div class="m-volume m-calendar-year">' + inner + '</div>';
            dom += '<div class="m-volume m-calendar-month">' + inner + '</div>';
            dom += '<span class="m-calendar-clear"></span>';
            this.top.html(dom);
            this._topListener()._topUpdate();
            return this;
        },
        _topListener: function () {
            var self = this,
                press = {delay: 500, pulse: 50};
            this.top.find('.m-calendar-year a[icon="up"]').click(this._clickTable('FullYear', 1)).longmousepress(press, this._clickTable('FullYear', 1));
            this.top.find('.m-calendar-year a[icon="down"]').click(this._clickTable('FullYear', -1)).longmousepress(press, this._clickTable('FullYear', -1));
            this.top.find('.m-calendar-month a[icon="up"]').click(this._clickTable('Month', 1)).longmousepress(press, this._clickTable('Month', 1));
            this.top.find('.m-calendar-month a[icon="down"]').click(this._clickTable('Month', -1)).longmousepress(press, this._clickTable('Month', -1));
            this.top.find('.m-calendar-reset').click(function () {
                self._tabDate = new Date(self.date);
                self._topUpdate().renderTable()._btmUpdate();
            });
            this.top.find('.m-calendar-clear').click(function () {
                self._initDate()._topUpdate().renderTable()._btmUpdate().clear(self.date, self.wrap, self);
            });
            return this;
        },
        _topUpdate: function () {
            this.top.find('.m-calendar-year input').val(this._tabDate.getFullYear());
            this.top.find('.m-calendar-month input').val($.mPad(this._tabDate.getMonth() + 1, 2));
            this.top.find('.m-calendar-day input').val($.mPad(this._tabDate.getDate(), 2));
            return this;
        },
        renderBtm: function () {
            var inner = '<input type="text" readonly/><span><a icon="up"></a><a icon="down"></a></span>',
                dom = '<div class="m-volume m-calendar-hour">' + inner + '</div>';
            dom += '<div class="m-volume m-calendar-min">' + inner + '</div>';
            dom += '<div class="m-volume m-calendar-second">' + inner + '</div>';
            dom += '<span class="m-calendar-add"></span>';
            this.btm.html(dom);
            this._btmListener()._btmUpdate();
            return this;
        },
        _btmListener: function () {
            var self = this,
                press = {delay: 500, pulse: 50};

            this.btm.find('.m-calendar-hour a[icon="up"]').click(this._clickBtm('Hours', 1, 24)).longmousepress(press, this._clickBtm('Hours', 1, 24));
            this.btm.find('.m-calendar-hour a[icon="down"]').click(this._clickBtm('Hours', 23, 24)).longmousepress(press, this._clickBtm('Hours', 23, 24));
            this.btm.find('.m-calendar-min a[icon="up"]').click(this._clickBtm('Minutes', 1, 60)).longmousepress(press, this._clickBtm('Minutes', 1, 60));
            this.btm.find('.m-calendar-min a[icon="down"]').click(this._clickBtm('Minutes', 59, 60)).longmousepress(press, this._clickBtm('Minutes', 59, 60));
            this.btm.find('.m-calendar-second a[icon="up"]').click(this._clickBtm('Seconds', 1, 60)).longmousepress(press, this._clickBtm('Seconds', 1, 60));
            this.btm.find('.m-calendar-second a[icon="down"]').click(this._clickBtm('Seconds', 59, 60)).longmousepress(press, this._clickBtm('Seconds', 59, 60));
            this.btm.find('.m-calendar-add').click(function () {

                console.log(self.date, self.validate(self.date));

                if (self.validate(self.date)) {
                    self.hide().callback(self.date, self.wrap, self);
                }
            });
            return this;
        },
        _btmUpdate: function () {
            this.btm.find('.m-calendar-hour input').val($.mPad(this.date.getHours(), 2));
            this.btm.find('.m-calendar-min input').val($.mPad(this.date.getMinutes(), 2));
            this.btm.find('.m-calendar-second input').val($.mPad(this.date.getSeconds(), 2));
            return this;
        },
        _clickBtm: function (method, delta, divisor) {
            var self = this;
            return function () {
                eval('self.date.set' + method + '((self.date.get' + method + '() + ' + delta + ')' + (divisor ? ' % ' + divisor : '') + ')');
                self._topUpdate()._btmUpdate().renderTable();
            }
        },
        renderTable: function () {
            this.table.html(this._tableHead());
            this.table.append(this._tableBody());
            this._tableListener();
            return this;
        },
        _tableHead: function () {
            var days = $.mCalendarOpts.days,
                head = '<thead><tr>';
            for (var i = 0, len = days.length; i < len; i++) {
                head += '<th class="' + i + '">' + days[i] + '</th>';
            }
            head += '</tr></thead>';
            return head;
        },
        _tableBody: function () {
            var day = new Date(
                    this._tabDate.getFullYear(),
                    this._tabDate.getMonth(),
                    1 - ( new Date(this._tabDate.getFullYear(), this._tabDate.getMonth(), 1) ).getDay(),
                    this.date.getHours(),
                    this.date.getMinutes(),
                    this.date.getSeconds(),
                    this.date.getMilliseconds()
                ),
                body = '<tbody>';
            for (var w = 0; w < 6; w++) {
                body += '<tr>';
                for (var d = 0; d < 7; d++) {
                    var cls = '',
                        disabled = '',
                        focus = '';
                    if (day.getDay() === 0) {
                        cls = 'class="m-calendar-sun"';
                    } else if (day.getDay() === 6) {
                        cls = 'class="m-calendar-sat"';
                    }
                    if (!this.validate(day) || day.getMonth() < this._tabDate.getMonth() || day.getMonth() > this._tabDate.getMonth()) {
                        disabled = 'disabled';
                    }
                    if (Calendar.compareDate(day, this.date) === 0) {
                        focus = 'focus="on"';
                    }
                    body += '<td ' + cls + ' ' + disabled + ' ' + focus + '>' + day.getDate() + '</td>';
                    day.setDate(day.getDate() + 1);
                }
                body += '</tr>';
            }
            body += '</tbody>';
            return body;
        },
        _tableListener: function () {
            var self = this;

            this.table.find('td').not('[disabled]').click(function (event) {

                self.table.find('td[focus="on"]').removeAttr('focus');
                $(event.currentTarget).attr('focus', 'on');
                self.date.setFullYear(self._tabDate.getFullYear());
                self.date.setMonth(self._tabDate.getMonth());
                self.date.setDate($(event.currentTarget).html());
                if (!self._hasClock) {
                    self.hide().callback(self.date, self.wrap, self);
                }
            });
            return this;
        },
        _clickTable: function (method, delta) {
            var self = this;
            return function () {
                eval('self._tabDate.set' + method + '(self._tabDate.get' + method + '() + ' + delta + ')');
                self._topUpdate()._btmUpdate().renderTable();
            }
        },
        show: function () {
            this.renderTable().wrap.animate($.mCalendarOpts.inProps, $.mCalendarOpts.duration);
            return this;
        },
        hide: function () {
            this.wrap.animate($.mCalendarOpts.outProps, $.mCalendarOpts.duration);
            return this;
        }
    };

    $.fn.mCalendar = function (opts) {

        var $this = $(this),
            _opts = $.extend({}, $.mCalendarOpts.defaultFn($this), opts),
            calendar = new Calendar(_opts);

        $this.after(calendar.wrap);
        $this.click(function (event) {
            event.stopPropagation();
            $('.m-calendar').not(calendar.show().wrap).hide();
        });
        return calendar;
    };

    $.mCompareDate = Calendar.compareDate;

})(jQuery);