<ul id="devices-m-icons" class="clear">
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>我的设备</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>设备添加</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>设备密码</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>设备锁定</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>设备续费</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>设备维护</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>报警记录</label>
        </a>
    </li>
    <li>
        <a href="monitoring/detail">
            <span class="glyphicon glyphicon-hdd"></span>
            <label>2222</label>
        </a>
    </li>
</ul>
<script>
    $(function () {
        $('#devices-m-icons li').hover(function (event) {
            $(event.currentTarget)
                .animate({
                    margin: 0,
                    padding: '20px'
                }, 100);
        }, function (event) {
            $(event.currentTarget)
                .animate({
                    margin: '10px',
                    padding: '10px'
                }, 100);
        });
    });
</script>
<!--
<h4>设备列表</h4>
<div class="form-inline-wrap">
    <form class="form-inline" role="form">
        <a href="device/add" class="btn btn-sm btn-default">添加设备</a>
        <button type="submit" class="btn btn-default btn-sm">批量升级</button>
        <button type="submit" class="btn btn-default btn-sm">控制</button>
    </form>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <tr>
            <th style="width:32px"></th>
            <th>IMEI</th>
            <th>MAC</th>
            <th>SIM</th>
            <th>激活时间</th>
            <th>到期时间</th>
            <th>上线时间</th>
            <th style="width: 128px;">操作</th>
        </tr>
        <?php
for ($i = 0; $i < 10; ++$i) {
    ?>
            <tr>
                <td><input type="checkbox"/></td>
                <td>15:29:09</td>
                <td>A6</td>
                <td>-63</td>
                <td>220</td>
                <td>37</td>
                <td>关</td>
                <td>
                    <a href="device/detail">详细</a>
                    <a href="#">冻结</a>
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
<script>
    $(function () {
        $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
    });
</script>
-->