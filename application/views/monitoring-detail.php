<h4>设备监控</h4>
<div class="form-inline-wrap">
    <form class="form-inline" role="form">
        <div class="form-group">

            <div class="input-group">
                <div class="input-group-addon">开始时间</div>
                <input size="16" type="text" value="2012-06-15 14:45" readonly
                       class="form-control input-sm form_datetime">
            </div>

            <div class="input-group">
                <div class="input-group-addon">结束时间</div>
                <input size="16" type="text" value="2012-06-15 14:45" readonly
                       class="form-control input-sm form_datetime">
            </div>
            <button type="submit" class="btn btn-default btn-sm">查找</button>
        </div>
    </form>
    <form class="form-inline form-right" role="form">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-default">控制</button>
            <a href="device/add" class="btn btn-sm btn-default">维修记录</a>
            <a href="device/edit" class="btn btn-sm btn-default">编辑</a>
        </div>

    </form>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <tr>
            <th>时间</th>
            <th>温度1</th>
            <th>温度2</th>
            <th>温度3</th>
            <th>温度4</th>
            <th>开关1</th>
            <th>开关2</th>
            <th>开关3</th>
            <th>输出1</th>
            <th>输出2</th>
            <th>电压/电流</th>
            <th>信号</th>
        </tr>
        <?php
        for ($i = 0; $i < 10; ++$i) {
            ?>
            <tr>
                <td>15:29:09</td>
                <td>25</td>
                <td>-63</td>
                <td>220</td>
                <td>37</td>
                <td>关</td>
                <td>开</td>
                <td>开</td>
                <td>是</td>
                <td>是</td>
                <td>5V/80mA</td>
                <td>78%</td>
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
    });
</script>