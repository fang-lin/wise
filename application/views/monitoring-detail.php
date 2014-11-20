<!--<h4>设备监控</h4>-->
<div class="form-inline-wrap">
    <form class="form-inline form-left" role="form">
        <div class="device-info">
            <span>我的设备</span>
            <span>设备总数： <span>5000</span></span>
            <span>激活： <span>3000</span></span>
            <span>未激活： <span>2000</span></span>
            <span>到期： <span>500</span></span>
            <span>10天后到期： <span>200</span></span>
        </div>
        <div class="device-info">
            <span>显示全部 <input type="checkbox"/></span>
            <span>类型1： <span>200</span></span>
            <span>类型2： <span>3000</span></span>
            <span>类型3： <span>100</span></span>
            <span>类型4： <span>700</span></span>
            <span>类型5： <span>100</span></span>
        </div>
    </form>
    <form class="form-inline form-right" role="form">

        <input size="16" type="text" placeholder="输入ID/名称" class="form-control input-sm">
        <button type="submit" class="btn btn-default btn-sm">搜索</button>
    </form>
</div>
<div class="table-responsive">
    <table class="table table-striped table-bordered" id="device-table">
        <thead>
        <tr>
            <th>设备名称</th>
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
            <th></th>
        </tr>
        </thead>
        <tbody>
        <?php
        for ($i = 0; $i < 10; ++$i) {
            ?>
            <tr>
                <td><a href="monitoring/detail3">上海冰柜</a></td>
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
                    <select name="" id=""></select>
                </td>
            </tr>
        <?php
        }
        ?>
        </tbody>
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

        var refreshInterval = 10;

        setInterval(function () {

            $.get('api/monitorSensorData', function (data) {
                var $table = $('#device-table tbody');
                var template = _.template($('#device-table-template').html());
                var slice = $table.find('tr').size() - data.length;
                $table.find('tr').slice(slice, 10).remove();
                $table.prepend(template({list: data}));
            });

        }, refreshInterval * 1000);


    });
</script>
<script type="text/template" id="device-table-template">
    <% _.each(list, function(item, i) {%>

    <tr>
        <td><a href="monitoring/detail3"><%= item.type %></a></td>
        <td><%= item.datetime %></td>
        <td><%= item.temperatureA %></td>
        <td><%= item.temperatureB %></td>
        <td><%= item.temperatureC %></td>
        <td><%= item.temperatureD %></td>
        <td><%= item.switchOne ? '是': '否' %></td>
        <td><%= item.switchTwo ? '是': '否' %></td>
        <td><%= item.switchThree ? '是': '否' %></td>
        <td><%= item.output %></td>
        <td><%= item.output2 %></td>
        <td><%= item.voltage %>/<%= item.electricity %></td>
        <td><%= item.signalStrength %></td>
        <td>
            <a href="monitoring/detail2">
                More
            </a>
        </td>
    </tr>
    <% }); %>
</script>