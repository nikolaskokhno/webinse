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

