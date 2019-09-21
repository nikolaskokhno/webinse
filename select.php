<?php
    require_once("connect.php");

    $outputUser = '';
    $sql = "SELECT * FROM webinse_user";
    $result = mysqli_query($link, $sql);

    $outputUser .= '
        <table class="table table-bordered user-table mt-3">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Second Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col-sm-1">Delete</th>
                </tr>
            </thead>
    ';

    if(mysqli_num_rows($result) > 0){

        while($row = mysqli_fetch_array($result)){
            $outputUser .= 
                '<tr>
                    <td class="first_name" data-id1="'.$row["id"].'">'.$row["first_name"].'</td>
                    <td class="second_name" data-id2="'.$row["id"].'">'.$row["second_name"].'</td>
                    <td class="email" data-id1="'.$row["id"].'">'.$row["email"].'</td>
                    <td><button class="btn btn-danger" id="btn-delete" dataid3="'.$row["id"].'">x</button></td>
                </tr>';
        }

    }else{
        $outputUser .= '
            <tr>
                <td scope="col-sm-12">Data not Found</td>
            </tr>
        ';
    }

    $outputUser .= '
        </table>
    ';

    echo($outputUser);

?>

