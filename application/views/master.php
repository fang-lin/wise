<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <base href="/wise/"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>WISE PROTECTOR</title>

    <link href="lib/ztree/css/zTreeStyle/zTreeStyle.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="lib/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/main.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="lib/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="lib/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="lib/underscore/underscore.js"></script>
    <script src="lib/jquery/dist/jquery.js"></script>
    <script src="lib/ztree/js/jquery.ztree.all-3.5.js"></script>
    <script src="lib/bootstrap/dist/js/bootstrap.js"></script>
    <script src="lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js"></script>
    <script src="lib/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script>
    <script src="lib/highcharts/highcharts.js"></script>
</head>

<body>
<header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="./">
                <img src="css/images/logo.png" alt=""/>
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Setting</a></li>
                <li><a href="#">Logout</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    </div>
</header>
<div class="container-fluid">
    <div class="row">
        <?php $this->load->view('sidebar.php'); ?>
        <div class="col-sm-9 col-md-10 main">
            <div class="pane">
                <div class="caps"></div>
                <div class="main-content">
                    <?php $this->load->view($__class__ . '-' . $__function__ . '.php'); ?>
                </div>
                <div class="caps"></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
