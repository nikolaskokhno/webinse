$(document).ready(function(){
    function fetch_data(){
        $.ajax({
            url: 'select.php',
            method: "POST",
            success: function(data){
                $('#dataUser').html(data);
            }
        });
    }
    fetch_data();

    $(document).on('click', '#btn_add', function(){

        var first_name = $('.first_name').val();
        var second_name = $('.second_name').val();
        var email = $('.email').val();

        if(first_name.length < 1 || second_name < 1){
            alert("Data can't be so short!");
            return false;
        }else if(email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1){
            alert('Email incorect!');
            return false;
        }

        $.ajax({
            url: 'insert.php',
            method: "POST",
            data: $("#formAddUser").serialize(),
            dataType: 'text',
            success: function(data){
                alert(data);
                fetch_data();
            }
        });

    });

    function updateData(id, text, column_name){
        $.ajax({
            url: 'update.php',
            method: 'POST',
            data: {id:id, text:text, column_name:column_name},
            dataType: 'text',
            success: function(data){
                alert(data);
            }
        });
    }
    
    $(document).on('blur', '#first_name', function(){
        var id = $(this).data("id1");
        var first_name = $(this).text();
        updateData(id, first_name, "first_name");
    });

    $(document).on('blur', '#second_name', function(){
        var id = $(this).data("id2");
        var second_name = $(this).text();
        updateData(id, second_name, "second_name");
    });

    $(document).on('blur', '#email', function(){
        var id = $(this).data("id3");
        var email = $(this).text();
        updateData(id, email, "email");
    });

    $(document).on('click', '.btn_delete', function(){
        var id = $(this).data("id4");

        if(confirm("Are you sure do you want delete user data?")){
            $.ajax({
                url: 'delete.php',
                method: "POST",
                data: {id:id},
                dataType: "text",
                success: function(data){
                    alert(data);
                    fetch_data();
                }
            });
        }   
    });

});

