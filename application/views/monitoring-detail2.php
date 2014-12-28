<div class="row">
    <div class="col-md-12">
        <div class="form-inline-wrap">
            <form class="form-inline form-left" role="form">
                <div class="device-info">
                    <span>名称： <span>XXXX</span></span>
                    <span>状态： <span>在线</span></span>
                    <span>在线时长： <span>265小时14分</span></span>
                    <span>低阀： <span>-23&#8451;</span></span>
                </div>
                <div class="device-info">
                    <span>ID： <span>XXXXX</span></span>
                    <span>255.255.255.255（美国加州）</span>
                    <span>高阀： <span>125&#8451;</span></span>
                    <span>报警： <span>2</span></span>
                </div>
            </form>
            <form class="form-inline form-right" role="form">
                <div class="device-info">
                    <div class="checkbox">
                        <label>
                            实时检测
                            <input type="checkbox">
                        </label>
                    </div>

                    <div class="form-group">
                        速度：10s
                    </div>
                </div>
                <div class="device-info">
                    <div class="checkbox">
                        <label>
                            历史回放
                            <input type="checkbox">
                        </label>
                    </div>

                    <div class="form-group">
                        <input size="16" type="text" value="2012-06-15 14:45" readonly
                               class="form-control input-sm form_datetime">
                    </div>
                    <div class="form-group">
                        <input size="16" type="text" value="2012-06-15 14:45" readonly
                               class="form-control input-sm form_datetime">
                    </div>
                </div>


            </form>
        </div>
    </div>
</div>
<br/>
<div class="row">
    <div class="col-md-12">
        <div id="temperature-chart" style="height: 320px;"></div>
    </div>
</div>
<br/>
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
<form class="form-inline form-right" role="form">
    <button class="btn btn-default btn-sm">Button1</button>
    <button class="btn btn-default btn-sm">Button2</button>
    <button class="btn btn-default btn-sm">Button3</button>
    <button class="btn btn-default btn-sm">Button4</button>
    &nbsp;
    &nbsp;
    <label for="" class="control-label">命令</label>
    <input size="16" type="text" placeholder="输入ID/名称" class="form-control input-sm">
    <button type="submit" class="btn btn-default btn-sm">发送</button>
    &nbsp;
    &nbsp;
    <button type="submit" class="btn btn-default btn-sm">设备管理</button>
</form>

<script>
    $(function () {
        $('#temperature-chart').highcharts({
            title: {
                text: ''//设备温度曲线
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: '温度 (°C)'
                },
                plotLines: [
                    {
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }
                ]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            chart: {
                events: {
                    load: function () {
                        var series = this.series;
                        setInterval(function () {
                            $.get('api/chartData', {}, function (data) {
                                _.each(data, function (point, i) {
                                    series[i].addPoint(point);
                                });
                            });
                        }, 5000);
                    }
                }
            },
            series: [
                {
                    name: '自定义名称1',
                    data: []
                },
                {
                    name: '自定义名称2',
                    data: []
                },
                {
                    name: '自定义名称3',
                    data: []
                },
                {
                    name: '自定义名称4',
                    data: []
                }
            ]
        });

        $(".form_datetime").datetimepicker({
            showMeridian: true,
            autoclose: true,
            todayBtn: true
        });
    });
</script>