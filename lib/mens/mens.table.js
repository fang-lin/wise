/**
 * Created by Justin on 13-12-9.
 */

(function($){

    $.mTableOpts = {
        types: {
            col : function(i, j){
                return j%2;
            },
            chess : function(i, j){
                return (i%2)^(j%2);
            }
        },
        resize: {
            strokeWidth: 3,
            tdMinWidth: 20
        }
    };

    $.fn.mTdEach = function(fn){
        return this.each(function(){
            $('tr', this).each(function(i, tr){
                $('th,td', tr).each(function(j, td){
                    fn(i, j, tr, td);
                });
            });
        });
    };

    $.fn.mTable = function(type, reverse) {

        var _type = $.mTableOpts.types[type] ? type : 'row';

        return this.each(function() {

            var $this = $(this),
                _cls = ['m-tc-odd', 'm-tc-even'];

            reverse && (_cls = _cls.reverse());

            _type === 'row' ?
            $this.find('tr:odd').addClass(_cls[0]).end().find('tr:even').addClass(_cls[1]) :
            $this.mTdEach(function(i, j, tr, td){
                $.mTableOpts.types[_type](i, j, tr, td) ? $(td).addClass(_cls[0]) : $(td).addClass(_cls[1]);
            });
        });
    };

    $.fn.mTableResizeDrag = function(tdL, tdR){
        var tab = $(this);

        tab.off('._initTdResize').on('mousedown._initTdResize', function _initTdResize(event){

            var offset = {
                    left: tdL.outerWidth() - event.screenX,
                    right: event.screenX + tdR.outerWidth()
                },
                over = tab.innerWidth(),
                lr = tdL.outerWidth() + tdR.outerWidth(),
                min = $.mTableOpts.resize.tdMinWidth;

            $(document).on('mousemove._thResize', function _thResize(event){

                var _offset = {
                    left: event.screenX + offset.left,
                    right: offset.right - event.screenX
                };

                if(_offset.left < min){
                    _offset.left = min;
                    _offset.right = lr - min;
                }
                if(_offset.right < min){
                    _offset.left = lr - min;
                    _offset.right = min
                }
                tdL.css('width', _offset.left / over * 100 + '%');
                tdR.css('width', _offset.right / over * 100 + '%');

            }).one('mouseup._endThResize', function _endThResize(){

                $('body').removeClass('m-ew-resize-drag');
                $(document).off('._thResize');

            });
            $('body').addClass('m-ew-resize-drag');
        });
    };

    $.fn.mTableResize = function() {

        return this.each(function() {

            var tab = $(this);

            tab.css('table-layout', 'fixed').mouseout(function(){

                $('body').removeClass('m-ew-resize');

            }).find('tr').each(function(){

                var tr = $(this),
                    size = tr.children().size();

                tr.find('th,td').on('mousemove', function(event){

                    var offsetX = event.pageX - $(event.currentTarget).offset().left,
                        td = $(this),
                        tds = $('tr:first', tab).children(),
                        index = td.index();

                    if( index > 0 && offsetX < $.mTableOpts.resize.strokeWidth){

                        $('body').addClass('m-ew-resize');
                        tab.mTableResizeDrag(tds.eq(index - 1), tds.eq(index));

                    }else if(index < size - 1 && offsetX > td.outerWidth() - $.mTableOpts.resize.strokeWidth){

                        $('body').addClass('m-ew-resize');
                        tab.mTableResizeDrag(tds.eq(index), tds.eq(index + 1));

                    }else{

                        $('body').removeClass('m-ew-resize');
                        tab.off('._initTdResize');
                    }
                });
            });
        });
    };

})(jQuery);