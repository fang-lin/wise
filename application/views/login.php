<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>WISE PROTECTOR</title>

    <!-- Bootstrap core CSS -->
    <link href="lib/bootstrap/dist/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="lib/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="lib/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="lib/underscore/underscore.js"></script>
    <script src="lib/jquery/dist/jquery.js"></script>
    <script src="lib/bootstrap/dist/js/bootstrap.js"></script>
</head>

<body>
<header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <img src="css/images/logo.png" alt=""/>
            </a>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <div class="pane">
                <div class="caps"></div>
                <div class="main-content">
                    <form class="form-signin" action="device" role="form">
                        <h4 class="form-signin-heading">登陆系统</h4>
                        <input type="email" class="form-control input-sm" placeholder="邮箱" required="" autofocus="">
                        <br/>
                        <input type="password" class="form-control input-sm" placeholder="密码" required="">

                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me"> 自动登录
                            </label>
                        </div>
                        <button class="btn btn-sm btn-default btn-block" type="submit">登录</button>
                        <button class="btn btn-sm btn-danger btn-block" type="">首次登录请按此</button>
                    </form>
                </div>
                <div class="caps"></div>
            </div>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>
</body>
</html>