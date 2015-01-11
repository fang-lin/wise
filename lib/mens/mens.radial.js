/**
 * Created by fanglin on 14-1-3.
 */

(function($){

    $.mRadialOpts = {
        radius: 80,
        defer: 30,
        duration: 300,
        easeIn: 'easeInBack',
        easeOut: 'easeOutBack',
        start: 1,
        end: 2,
        time: 25

    };

    $.fn.mRadial = function(opts){
        var _opts = $.extend({}, $.mRadialOpts, opts);
        return this.each(function(){
            var $this = $(this),
                angle = (_opts.end - _opts.start) * Math.PI / ($('.m-radial-list>li', this).size() - 1);

            $('.m-radial-root', this).click(function(event){
                event.preventDefault();
                var $root = $(event.currentTarget),
                    $li = $('.m-radial-list>li', $this);

                if($root.data('open')){
                    $root.mRadialRootInOut(-66, 33, _opts).data('open', false);

                    $li.each(function(i, el){
                        var $a = $('a', el);

                        setTimeout(function(){
                            $(el).stop().animate({
                                left: 0, bottom: 0
                            }, _opts.duration, _opts.easeIn, function(){
                                $(el).hide(0);
                            });
                            $a.mRadialAnchorInOut(0, 33, _opts);
                        }, i * _opts.defer);
                    });

                }else{
                    $root.mRadialRootInOut(0, -33, _opts).data('open', true);
                    $li.each(function(i, el){
                        var $a = $('a', el),
                            x = _opts.radius * Math.cos(i * angle + _opts.start * Math.PI),
                            y = _opts.radius * Math.sin(i * angle + _opts.start * Math.PI);

                        setTimeout(function(){
                            $(el).show(0).stop().animate({
                                left: x, bottom: y
                            }, _opts.duration, _opts.easeOut);
                            $a.mRadialAnchorInOut(-198, -33, _opts);
                        }, i * _opts.defer);
                    });
                }
            });
        });
    };

    $.fn.mRadialRootInOut = function(initY, intervalY, opt){
        return this.each(function(){
            var $this = $(this);
            $this.mFrameAnimate({
                initY: initY,
                intervalY: intervalY,
                interval: opt.time,
                total: 4
            }, function(count){
                if(count >= 11)
                    $this.mFrameAnimateStop();
            });
        });
    };

    $.fn.mRadialAnchorInOut = function(initY, intervalY, opt){
        return this.each(function(){
            var $this = $(this);
            $this.mFrameAnimate({
                initY: initY,
                intervalY: intervalY,
                interval: opt.time,
                total: 7
            }, function(count){
                if(count >= 7)
                    $this.mFrameAnimateStop();
            });
        });
    };

})(jQuery);