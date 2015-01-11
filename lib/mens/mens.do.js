/**
 * Created by Justin on 13-12-31.
 */
(function($){
    $.mDo = function(){

        $('a,.m-button').mDull('focus').focus(function(event){
            $(event.currentTarget).blur();
        });
        $(document).mDull('click').click(function(){
            $(document).mSelectOthersListOut();

            var mCals = $('.m-calendar').filter(":visible");
            if(mCals.length){
                mCals.data('_mCalendar').hide();
            }
            $('.m-addon[focus]').removeAttr('focus');
        });
        if($.fn.mTable){
            // mTable
            $('.m-table[type="row"]').mDull('mTable').mTable(null);
            $('.m-table[type="row:1"]').mDull('mTable').mTable('row', true);
            $('.m-table[type="col"]').mDull('mTable').mTable('col');
            $('.m-table[type="col:1"]').mDull('mTable').mTable('col', true);
            $('.m-table[type="chess"]').mDull('mTable').mTable('chess');
            $('.m-table[type="chess:1"]').mDull('mTable').mTable('chess', true);
        }
        if($.fn.mTableResize()){
            // mTableResize
            $('.m-table[td-resize]').mDull('mTdResize').mTableResize();
        }
        if($.fn.mTabs){
            // mTabs
            $('.m-tabs, .m-utabs').mDull('mTabs').mTabs();
        }
        if($.fn.mStep){
            // mStep
            $('.m-step').mDull('mStep').mStep();
        }
        if($.fn.mSelect){
            // mSelect
            $('.m-select[name]').mDull('mSelect').mSelect();
        }
        if($.fn.mCheckbox){
            // mCheckbox
            $('.m-checkbox').mDull('mCheckbox').mCheckbox();
            // mCheckboxFor
            $('.m-checkbox[for]').mDull('mCheckboxFor').click(function(event){

                var tag = $(event.currentTarget),
                    fore = tag.attr('for'),
                    types = $.mCheckboxOpts.types;

                switch(tag.attr('rule')){
                    case 'reverse':
                        $('.m-checkbox[name="' + fore + '"]').each(function(){
                            $(this).mCheckboxClick(types[$(this).attr('type')]);
                        });
                        break;
                    case 'all':
                        $('.m-checkbox[name="' + fore + '"][state="' + tag.attr('state') + '"]').each(function(){
                            $(this).mCheckboxClick(types[$(this).attr('type')]);
                        });
                        break;
                }
            });
        }
        if($.fn.mRadio){
            // mRadio
            $('.m-radio').mDull('mRadio').mRadio();
        }
        if($.fn.mAddon){
            // mAddon
            $('.m-addon').mDull('mAddon').mAddon();
        }
        if($.fn.mDialog){
            // mDialog
            $('.m-dialog').mDull('mDialog').mDialog();
        }
    };
    $(function(){
        $.mDo();
    });
})(jQuery);