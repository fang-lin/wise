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
            series: [
                {
                    name: '自定义名称1',
                    data: [
                        [Date.UTC(1970, 9, 27), 21],
                        [Date.UTC(1970, 10, 10), 0.6 ],
                        [Date.UTC(1970, 10, 18), 0.7 ],
                        [Date.UTC(1970, 11, 2), 0.8 ],
                        [Date.UTC(1970, 11, 9), 0.6 ],
                        [Date.UTC(1970, 11, 16), 0.6 ],
                        [Date.UTC(1970, 11, 28), 0.67],
                        [Date.UTC(1971, 0, 1), 0.81],
                        [Date.UTC(1971, 0, 8), 0.78],
                        [Date.UTC(1971, 0, 12), 0.98],
                        [Date.UTC(1971, 0, 27), 1.84],
                        [Date.UTC(1971, 1, 10), 1.80],
                        [Date.UTC(1971, 1, 18), 1.80],
                        [Date.UTC(1971, 1, 24), 1.92],
                        [Date.UTC(1971, 2, 4), 2.49],
                        [Date.UTC(1971, 2, 11), 2.79],
                        [Date.UTC(1971, 2, 15), 2.73],
                        [Date.UTC(1971, 2, 25), 2.61],
                        [Date.UTC(1971, 3, 2), 2.76],
                        [Date.UTC(1971, 3, 6), 2.82],
                        [Date.UTC(1971, 3, 13), 2.8 ],
                        [Date.UTC(1971, 4, 3), 2.1 ],
                        [Date.UTC(1971, 4, 26), 1.1 ],
                        [Date.UTC(1971, 5, 9), 0.25],
                        [Date.UTC(1971, 5, 12), 0]
                    ]
                },
                {
                    name: '自定义名称2',
                    data: [
                        [Date.UTC(1970, 9, 27), 10],
                        [Date.UTC(1970, 10, 10), 0.6 ],
                        [Date.UTC(1970, 10, 18), 0.7 ],
                        [Date.UTC(1970, 11, 2), 10.8 ],
                        [Date.UTC(1970, 11, 9), 20.6 ],
                        [Date.UTC(1970, 11, 16), 10.6 ],
                        [Date.UTC(1970, 11, 28), 20.67],
                        [Date.UTC(1971, 0, 1), 10.81],
                        [Date.UTC(1971, 0, 8), 10.78],
                        [Date.UTC(1971, 0, 12), 10.98],
                        [Date.UTC(1971, 0, 27), 21.84],
                        [Date.UTC(1971, 1, 10), 11.80],
                        [Date.UTC(1971, 1, 18), 11.80],
                        [Date.UTC(1971, 1, 24), 21.92],
                        [Date.UTC(1971, 2, 4), 2.49],
                        [Date.UTC(1971, 2, 11), 2.79],
                        [Date.UTC(1971, 2, 15), 2.73],
                        [Date.UTC(1971, 2, 25), 2.61],
                        [Date.UTC(1971, 3, 2), 2.76],
                        [Date.UTC(1971, 3, 6), 32.82],
                        [Date.UTC(1971, 3, 13), 22.8 ],
                        [Date.UTC(1971, 4, 3), 12.1 ],
                        [Date.UTC(1971, 4, 26), 1.1 ],
                        [Date.UTC(1971, 5, 9), 0.25],
                        [Date.UTC(1971, 5, 12), 0]
                    ]
                },
                {
                    name: '自定义名称3',
                    data: [
                        [Date.UTC(1970, 9, 27), 0],
                        [Date.UTC(1970, 10, 10), 0.6 ],
                        [Date.UTC(1970, 10, 18), 0.7 ],
                        [Date.UTC(1970, 11, 2), 0.8 ],
                        [Date.UTC(1970, 11, 9), 0.6 ],
                        [Date.UTC(1970, 11, 16), 0.6 ],
                        [Date.UTC(1970, 11, 28), 10.67],
                        [Date.UTC(1971, 0, 1), 30.81],
                        [Date.UTC(1971, 0, 8), 10.78],
                        [Date.UTC(1971, 0, 12), 20.98],
                        [Date.UTC(1971, 0, 27), 1.84],
                        [Date.UTC(1971, 1, 10), 11.80],
                        [Date.UTC(1971, 1, 18), 10.80],
                        [Date.UTC(1971, 1, 24), 1.92],
                        [Date.UTC(1971, 2, 4), 2.49],
                        [Date.UTC(1971, 2, 11), 2.79],
                        [Date.UTC(1971, 2, 15), 2.73],
                        [Date.UTC(1971, 2, 25), 2.61],
                        [Date.UTC(1971, 3, 2), 2.76],
                        [Date.UTC(1971, 3, 6), 2.82],
                        [Date.UTC(1971, 3, 13), 2.8 ],
                        [Date.UTC(1971, 4, 3), 2.1 ],
                        [Date.UTC(1971, 4, 26), 1.1 ],
                        [Date.UTC(1971, 5, 9), 0.25],
                        [Date.UTC(1971, 5, 12), 0]
                    ]
                },
                {
                    name: '自定义名称4',
                    data: [
                        [Date.UTC(1970, 9, 27), 0],
                        [Date.UTC(1970, 10, 10), 0.6 ],
                        [Date.UTC(1970, 10, 18), 0.7 ],
                        [Date.UTC(1970, 11, 2), 0.8 ],
                        [Date.UTC(1970, 11, 9), 0.6 ],
                        [Date.UTC(1970, 11, 16), 0.6 ],
                        [Date.UTC(1970, 11, 28), 0.67],
                        [Date.UTC(1971, 0, 1), 0.81],
                        [Date.UTC(1971, 0, 8), 0.78],
                        [Date.UTC(1971, 0, 12), 12.98],
                        [Date.UTC(1971, 0, 27), 18.84],
                        [Date.UTC(1971, 1, 10), 1.80],
                        [Date.UTC(1971, 1, 18), 1.80],
                        [Date.UTC(1971, 1, 24), 1.92],
                        [Date.UTC(1971, 2, 4), 2.49],
                        [Date.UTC(1971, 2, 11), 2.79],
                        [Date.UTC(1971, 2, 15), 2.73],
                        [Date.UTC(1971, 2, 25), 2.61],
                        [Date.UTC(1971, 3, 2), 2.76],
                        [Date.UTC(1971, 3, 6), 2.82],
                        [Date.UTC(1971, 3, 13), 5.8 ],
                        [Date.UTC(1971, 4, 3), 3.1 ],
                        [Date.UTC(1971, 4, 26), 1.1 ],
                        [Date.UTC(1971, 5, 9), 1.25],
                        [Date.UTC(1971, 5, 12), 0]
                    ]
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