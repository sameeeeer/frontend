$(document).ready(function () {


    $('form.login').on("submit", function (e) {
        e.preventDefault();

        username = $("#username").val();
        password = $("#password").val();
        //alert(password)
        data = {
            "username": username,
            "password": password
        }


        $.ajax({
            url: 'http://localhost:4500/users/Login/',
            type: 'post',
            dataType: 'json',
            data: data,

            success: function (res, textStatus, xhr) {
                if (res.token != null) {

                    location.href = "updateprofile.html";


                    //    alert(res.token);
                    localStorage.setItem('token', res.token);
                }
                else {
                    alert("Invalid Username or Password");
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');

            }
        });
    });
    $('#signupbtn').click(function (e) {
        e.preventDefault();
        fullname = $("#fname").val();
        uname = $("#uname").val();
        profilepic = $("#ppic").val();
        sex = $("#sex").val();
        nationality = $("#nationality").val();
        password = $("#pass").val();
        //alert(password)
        data = {
            "fullname": fullname,
            "uname": uname,
            "password": password,
            "profilepic": profilepic,
            "sex": sex,
            "nationality": nationality
        }
        if (fullname == "" ||
            uname == "" || password == "" || profilepic == "" || sex == "" || nationality == "") {
            alert("please fill out all of the fields!");
        }

        else {
            $.ajax({
                url: 'http://localhost:4500/users/registeruser/',
                type: 'post',
                dataType: 'json',
                data: data,

                success: function (res, textStatus, xhr) {
                    console.log(res);
                    alert("Registered Succesfully!!!");
                   location.href = "login.html";

                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log('Error in Operation');

                }
            });
        }
    });




    //var tok = localStorage.getItem('token');
    //alert(tok)

});  