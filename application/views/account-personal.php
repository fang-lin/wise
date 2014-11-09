<h4>个人信息</h4>
<div class="form-wrap">
    <form class="form-horizontal" role="form">
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">登录账号</label>

            <div class="col-sm-9">
                <input type="text" disabled class="form-control" id="" value="ABCD">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">昵称</label>

            <div class="col-sm-9">
                <input type="text" class="form-control" id="" placeholder="昵称">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">姓名</label>

            <div class="col-sm-9">
                <input type="text" class="form-control" id="" placeholder="姓名">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">公司编号</label>

            <div class="col-sm-9">
                <input type="text" class="form-control" id="" placeholder="公司编号">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">用户地址</label>

            <div class="col-sm-9">
                <input type="text" class="form-control" id="" placeholder="用户地址">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">手机号码</label>

            <div class="col-sm-9">
                <input type="number" class="form-control" id="" placeholder="手机号码">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">座机</label>

            <div class="col-sm-9">
                <input type="number" class="form-control" id="" placeholder="座机">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">QQ</label>

            <div class="col-sm-9">
                <input type="number" class="form-control" id="" placeholder="QQ">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">邮箱</label>

            <div class="col-sm-9">
                <input type="email" class="form-control" id="" placeholder="邮箱">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">注册时间</label>

            <div class="col-sm-9">
                <input type="date" disabled class="form-control" id="" value="2014-10-01">
            </div>
        </div>
        <div class="form-group">
            <label for="" class="col-sm-1 control-label">到期时间</label>

            <div class="col-sm-9">
                <input type="date" disabled class="form-control" id="" value="2015-10-01">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-1 col-sm-9">
                <button type="submit" class="btn btn-default">确定</button>
            </div>
        </div>
    </form>
</div>

<script>
    $(function () {
        $(".form_datetime").datetimepicker({
            showMeridian: true,
            autoclose: true,
            todayBtn: true
        });
    });
</script>