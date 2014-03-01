<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.ico">

    <title>CodeScience</title>

    <!-- Bootstrap core CSS -->
    <link href="css/project.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
    <body <?php $body_url = $_SERVER['REQUEST_URI']; if ($body_url !== "/") { ?> id = "page" <?php } else { ?> data-spy="scroll" data-target=".navbar-collapse" <?php } ?> >
    
    <?php $body_url = $_SERVER['REQUEST_URI']; if ($body_url == "/") { ?>
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" data-scroll-nav="0" href="/"><img src="img/logo.png"></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a class="active" data-scroll-nav="0"><h4>Home</h4></a></li>
            <li><a data-scroll-nav="1" name="what"><h4>What</h4></a></li>
            <li><a data-scroll-nav="2"><h4>Successes</h4></a></li>
            <li><a data-toggle="modal" data-target="#partnersModal"><h4>Partners</h4></a></li>
            <li><a data-scroll-nav="3"><h4>Who</h4></a></li>
            <li><a data-scroll-nav="4"><h4>Jobs</h4></a></li>
            <li><a data-scroll-nav="11"><h4>Contact</h4></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    
    <?php } else { ?> 
	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img src="img/logo.png"></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="/"><h4>Home</h4></a></li>
            <li><a href="/#what"><h4>What</h4></a></li>
            <li><a href="/successes"><h4>Successes</h4></a></li>
            <li><a data-toggle="modal" data-target="#partnersModal"><h4>Partners</h4></a></li>
            <li><a href="/team"><h4>Who</h4></a></li>
            <li><a href="/jobs"><h4>Jobs</h4></a></li>
            <li><a data-scroll-nav="11"><h4>Contact</h4></a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <?php } ?>
    