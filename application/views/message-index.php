<h4>消息列表</h4>
<div class="form-inline-wrap">
    <form class="form-inline" role="form">
        <button type="button" class="btn btn-sm btn-default" data-toggle="modal" data-target="#sendMessageModal">发送消息
        </button>
    </form>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <tr>
            <th>发件人</th>
            <th>消息内容</th>
            <th>发送时间</th>
            <th style="width: 128px;">操作</th>
        </tr>
        <?php
        for ($i = 0; $i < 10; ++$i) {
            ?>
            <tr>
                <td>老头</td>
                <td>消息内容 消息内容 消息内容</td>
                <td>2014-12-23</td>
                <td>
                    <a href="device/detail">删除</a>
                </td>
            </tr>
        <?php
        }
        ?>
    </table>
</div>
<ul class="pagination pagination-sm">
    <li><a href="#"><span class="glyphicon glyphicon-arrow-left"></span></a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#"><span class="glyphicon glyphicon-arrow-right"></span></a></li>
</ul>
<!-- sendMessageModal -->
<div class="modal fade" id="sendMessageModal" tabindex="-1" role="dialog"
     aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="caps"></div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">×</span><span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="mySmallModalLabel">绑定设备</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="" class="col-sm-1 control-label">收件人</label>

                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-1 control-label">消息内容</label>

                        <div class="col-sm-9">
                            <textarea type="text" class="form-control" id="" placeholder="昵称"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-1 control-label"></label>

                        <div class="col-sm-9">
                            <button type="button" class="btn btn-default">发送</button>
                            <button type="button" class="btn btn-default">取消</button>
                        </div>
                    </div>
                </form>
                <br/>
            </div>
            <div class="caps"></div>
        </div>
    </div>
</div>

<script>
    $(function () {
        $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
    });
</script>