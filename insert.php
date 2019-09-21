<?php
    require_once("connect.php");

    $sql = "INSERT INTO webinse_user(first_name, second_name, email) VALUES ('".$_POST["first_name"]."', '".$_POST["second_name"]."', '".$_POST["email"]."')";

    if(mysqli_query($link, $sql)){
        echo("Data inserted!");
    }
?>