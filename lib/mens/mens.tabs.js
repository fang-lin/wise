/**
 * Created by Justin on 13-12-21.
 */

(function($){

    $.fn.mTabs = function(){
        return this.each(function(){
            var self = this;
            $('.m-tabs-header li', this).click(function(event){
                $(event.currentTarget).siblings('li').removeAttr('focus');
                var index = $(event.currentTarget).attr('focus', 'true').index();
                $('.m-tabs-body .m-tabs-section', $(self)).eq(index).show().siblings('.m-tabs-section').hide();
            });
            $('.m-tabs-header li[focus]', this).length ?
            $('.m-tabs-header li[focus]', this).click() :
            $('.m-tabs-header li', this).eq(0).click();
        });
    };

    $.fn.mStep = function(){
        return this.each(function(){
            var self = this;
            $(self).find('.m-step-next').click(function(event){
                var index = $(event.currentTarget).closest('.m-tabs-section').index();
                $(self).mStepSetStep(index + 1);
            }).end().find('.m-step-prev').click(function(event){
                var index = $(event.currentTarget).closest('.m-tabs-section').index();
                $(self).mStepSetStep(index - 1);
            }).end().mStepSetStep(0);
        });
    };

    $.fn.mStepSetStep = function(index){
        return this.each(function(){
            if(! (index < 0 || index > $('.m-step-body .m-tabs-section', this).size())){
                $('.m-step-header li', this).eq(index).attr('focus', 'true').removeAttr('passed').prevAll().attr('passed', 'true').removeAttr('focus').end().nextAll().removeAttr('focus').removeAttr('passed');
                $('.m-step-body .m-tabs-section', this).eq(index).show().siblings('.m-tabs-section').hide();
            }
        });
    };

})(jQuery);