<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "webinse";

    $link = mysqli_connect($servername, $username, $password, $database);

    if(!$link){
        die("Connection failed: " . mysqli_connect_error());
    }
    
?>