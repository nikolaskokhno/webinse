<?php
    require_once("connect.php");

    $sql = "DELETE FROM webinse_user WHERE id = '".$_POST["id"]."'";

    if(mysqli_query($link, $sql)){
        echo 'Data deleted';
    }
?>