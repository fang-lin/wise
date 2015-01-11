/**
* Created by Justin on 13-12-12.
*/

(function($){

    $.mSelectOpts = {
        duration : 100,
        inProps : { opacity: 'show' },
        outProps : { opacity: 'hide' }
    };

    $.fn.mSelect = function(){
        return this.each(function(){
            var $this = $(this),
                $list = $('#' + $this.attr('name')),
                $selected = $list.find('li>a[selected]');
            $this.children('input').val($selected.html()).attr('data', $selected.attr('data')).attr('readonly', 'readonly');
            if($this.not('[disabled]').length){
                $this.click(function(event){
                    event.stopPropagation();
                    $list.mSelectListIn($this);
                }).children('input').focus(function(event){
                    $(event.currentTarget).blur();
                });
                $list.find('li>a').click(function(event){
                    event.preventDefault();
                    var $a = $(event.currentTarget);
                    $list.mSelectListOut($this);
                    $this.children('input').val($a.html()).attr('data', $a.attr('data') || $a.attr('value'));
                });
            }else{
                $this.children('input').attr('disabled', 'disabled');
            }
        });
    };

    $.fn.mSelectListIn = function($select){
        return this.each(function(){
            var $list = $(this);
            $select && $select.attr('focus', 'true').mSelectOthersListOut();
            $list.mSelectSetListCSS($select).stop().animate($.mSelectOpts.inProps, $.mSelectOpts.duration);

            function _selectList(){
                $list.mSelectSetListCSS($select);
            }

            $(window).on('resize._selectList', _selectList);
            $(document).on('mousemove._selectList', _selectList);
        });
    };

    $.fn.mSelectListOut = function($select){

        $(window).off('._selectList');
        $(document).off('._selectList');

        return this.each(function(){
            var $list = $(this);
            $select && $select.removeAttr('focus');
            $list.stop().animate($.mSelectOpts.outProps, $.mSelectOpts.duration, function(){
                $list.mSelectCleanListCSS();
            });
        });
    };

    $.fn.mSelectSetListCSS = function($select){
        return this.each(function(){
            $(this).css('width', $select.children('input').outerWidth() + $select.children('span').outerWidth() - 1);
        });
    };

    $.fn.mSelectCleanListCSS = function(){
        return this.each(function(){
            $(this).css('width', '').css('left', '').css('top', '');
        });
    };

    $.fn.mSelectOthersListOut = function(){
        return this.each(function(){
            $('.m-select[focus]').not(this).removeAttr('focus');
            $('.m-options:visible').mSelectListOut();
        });
    };

    $.mCheckboxOpts = {
        interval : 30,
        types: {
            // [initX, initY, intervalX, intervalY]
            check : {
                state : ['on', 'off'],
                xy : [[0, 0, 0, 16], [0, -48, 0, -16]],
                frame : 4
            },
            dot : {
                state : ['on', 'off'],
                xy : [[-16, 0, 0, 16], [-16, -48, 0, -16]],
                frame : 4
            },
            cross : {
                state : ['on', 'off'],
                xy : [[-32, 0, 0, 16], [-32, -48, 0, -16]],
                frame : 4
            },
            add : {
                state : ['on', 'off'],
                xy : [[-48, 0, 0, 16], [-48, -48, 0, -16]],
                frame : 4
            },
            minus : {
                state : ['on', 'off'],
                xy : [[-64, 0, 0, 16], [-64, -48, 0, -16]],
                frame : 4
            }
        }
    };

    $.fn.mCheckboxClick = function(type, callback){
        var $this = $(this),
            index = type.state.indexOf($this.attr('state')),
            nextIndex = index + 1 === type.state.length ? 0 : index + 1;

        $this.mFrameAnimate({
            initX: type.xy[index][0],
            initY: type.xy[index][1],
            intervalX: type.xy[index][2],
            intervalY: type.xy[index][3],
            interval: $.mCheckboxOpts.interval,
            total: type.frame
        }, function(count, total) {
            (count === total) &&
                $this.mFrameAnimateStop().attr('state', type.state[nextIndex]) &&
                $.isFunction(callback) && callback($this[0]);
        });
    };

    $.fn.mCheckbox = function(callback){
        return this.each(function(){
            var $checkbox = $(this),
                type = $.mCheckboxOpts.types[$(this).attr('type')] || $.mCheckboxOpts.types.check;

            $checkbox.not('[disabled]').click(function(event){
                $(event.currentTarget).mCheckboxClick(type, callback);
            });
        });
    };

    $.fn.mRadio = function(callback){
        return this.each(function(){
            var type = $.mCheckboxOpts.types[$(this).attr('type')] || $.mCheckboxOpts.types.dot;

            $(this).click(function(event){
                var $tag = $(event.currentTarget);
                if($tag.not('[disabled]').length && $tag.attr('state') != 'on'){
                    $('.m-radio[name="' + $tag.attr('name') + '"][state="on"]').not('[disabled]').each(function(){
                        $(this).mCheckboxClick(type);
                    });
                    $tag.mCheckboxClick(type, callback);
                }
            });
        });
    };

    $.fn.mAddon = function(){
        return this.each(function(){
            var $addon = $(this);
            $addon.not('[disabled]').length ?
                $addon.click(function(event){
                    event.stopPropagation();
                    $('.m-addon[focus]').removeAttr('focus');
                    $addon.attr('focus', 'true');
                }) :
                $addon.children('input').attr('disabled', 'disabled');
        });
    };

})(jQuery);