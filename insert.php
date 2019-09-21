<?php
    require_once("connect.php");

    $first_name = $_POST['first_name'];
    $second_name = $_POST['second_name'];
    $email = $_POST['email'];

    $sql = "INSERT INTO webinse_user(first_name, second_name, email) VALUES('$first_name', '$second_name', '$email')";
    
    if(mysqli_query($link, $sql)){
        echo("Data user inserted");
    }

?>