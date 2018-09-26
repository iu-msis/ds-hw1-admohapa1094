<?php

require '../../app/common.php';

// Get the taskId ?? is the coalesce operator set to a default value of 0
$taskId = $_GET['taskId'] ?? 0;


// Fetch work from SQLiteDatabase
$work = Work::findByTaskId($taskId);


// Convert to JSON and print
echo json_encode($work);
