<?php

// Change the working directory to this file
chdir(__DIR__);
set_include-path (__DIR__);

// Require class files
if ($_SERVER['REQUEST_METHOD'] == 'POST'
&& stripos ($_SERVER['CONTENT_TYPE'], 'application/json') !== false ) {
  $_POST = json_decode (file_getcontents('php://input'), true);
}
require 'environment.php'

/** MODELS **/
require 'models/Comment.php';
