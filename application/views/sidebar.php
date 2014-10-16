<div class="col-sm-3 col-md-2 sidebar">
    <div class="pane">
        <div class="caps"></div>
        <ul class="nav nav-sidebar">
            <li class="<?php
            if ($__class__ == 'personal') {
                echo 'active';
            }
            ?>">
                <a href="personal">
                    <span class="glyphicon glyphicon-user"></span>
                    个人信息
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
        </ul>
        <div class="caps"></div>
    </div>
</div>