<div class="col-sm-3 col-md-2 sidebar">
    <div class="pane">
        <div class="caps"></div>
        <div class="portrait-wrap">
            <img src="" alt="头像"/>
            <p>用户名</p>
        </div>
        <ul class="nav nav-sidebar">
            <li class="<?php
            if ($__class__ == 'monitoring') {
                echo 'active';
            }
            ?>">
                <a href="monitoring">
                    <span class="glyphicon glyphicon-dashboard"></span>
                    设备监控
                </a>
            </li>
            <li class="<?php
            if ($__class__ == 'device') {
                echo 'active';
            }
            ?>">
                <a href="device">
                    <span class="glyphicon glyphicon-compressed"></span>
                    设备管理
                </a>
            </li>
            <li class="<?php
            if ($__class__ == 'account') {
                echo 'active';
            }
            ?>">
                <a href="account">
                    <span class="glyphicon glyphicon-briefcase"></span>
                    账户管理
                </a>
            </li>
            <li class="<?php
            if ($__class__ == 'message') {
                echo 'active';
            }
            ?>">
                <a href="message">
                    <span class="glyphicon glyphicon-envelope"></span>
                    消息中心
                </a>
            </li>
        </ul>
        <div class="caps"></div>
    </div>
</div>