<h4>设备列表</h4>
<div class="form-inline-wrap container">
    <form class="form-inline" role="form">
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-addon">查找</div>
                <input class="form-control input-sm" type="text" placeholder="Enter email">
            </div>
            <select class="form-control input-sm">
                <option>全部类型</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <input size="16" type="text" value="2012-06-15 14:45" readonly class="form-control input-sm form_datetime">
            <button type="submit" class="btn btn-default btn-sm">搜索</button>
        </div>
    </form>
    <form class="form-inline form-right" role="form">
        <div class="btn-group">
            <a href="device/add" class="btn btn-sm btn-default">添加设备</a>
            <button type="button" class="btn btn-sm btn-default">批量升级</button>
            <button type="button" class="btn btn-sm btn-default">控制</button>
        </div>

    </form>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <tr>
            <th>IMEI</th>
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
            <th>操作</th>
        </tr>
        <?php
        for ($i = 0; $i < 10; ++$i) {
            ?>
            <tr>
                <td>XXX</td>
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
                <td>
                    <a href="#">更多</a>
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