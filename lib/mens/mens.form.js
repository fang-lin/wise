/**
 * Created by Justin on 13-12-11.
 */
(function($){

    $.fn.mSerializeArray = function(){
        var $form = $(this),
            data = [];
        $form.find('input[name], textarea[name]').each(function(){
            data.push({ name: $(this).attr('name'), value: $(this).val() });
        });
        $form.find('.m-checkbox[state="on"][name][value], .m-trigger[state="on"][name][value], .m-radio[state="on"][name][value]').each(function(){
            data.push({ name: $(this).attr('name'), value: $(this).attr('value')});
        });
        $form.find('.m-select[name]').each(function(){
            $(this).children('input').attr('data') && data.push({ name: $(this).attr('name'), value: $(this).children('input').attr('data') });
        });
        return data;
    };

    $.fn.mSerialize = function(s1, s2){
        var $form = $(this),
            data = $form.mSerializeArray(),
            _s1 = s1 || '=',
            _s2 = s2 || '&';
        for(var i = 0, len = data.length; i < len; i++){
            data[i] = data[i].name + _s1 + data[i].value;
        }
        return data.join(_s2);
    };

})(jQuery);