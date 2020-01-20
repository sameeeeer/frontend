$(document).ready(function () {

    var tok = localStorage.getItem('token');
    var uploadimage = "";

    //   alert(tok)
    $.ajax({
        type: "GET",
        url: "http://localhost:4500/users/this",
        beforeSend: function (xhr) {
            if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
        },
        success: function (data) {
            console.log(data);

            $("#fname").val(data.Fname);
            $("#uname").val(data.Username);
            $("#sex").val(data.Sex);
            $("#nationality").val(data.Nationality);
            $("#pass").val(data.Password);
            $("#profilepic").val(data.ProfilePic);

        }
    })
    let imageFile = "";
    $("#profileimg").on('change', function () {
        //    alert('clicked');
        let formData = new FormData();
        let files = $("#profileimg").get(0).files;
        if (files.length > 0) {
            formData.append("upload", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4500/users/uploadimg',

            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (res) {
                Profileimg = res.Filename;
                console.log(res);
                uploadimage = res;

                // $("#add-hero").prop("disabled", false);
                //     alert('something happened')
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });

    $("#updatebtn").click(function (e) {
        e.preventDefault();
        //var formData = new FormData(this);


        var fullname = $("#fname").val();
        var uname = $("#uname").val();
        var sex = $("#sex").val();
        var nationality = $("#nationality").val();
        var password = $("#pass").val();
        // var profileimg = $("#profileimg").val();
        // var userProfileImg = uploadimage;

        if (uploadimage == "") {
            data1 = {
                'Fname': fullname,
                'Username': uname,
                'Password': password,
                'Sex': sex,
                'Nationality': nationality,
            }
        }
        else {
            data1 = {
                'ProfilePic': uploadimage,
                'Fname': fullname,
                'Username': uname,
                'Password': password,
                'Sex': sex,
                'Nationality': nationality,

            }
        }

        $.ajax({
            url: 'http://localhost:4500/users/updateprofile',
            type: 'POST',
            data: data1,
            // enctype: 'multipart/form-data',
            //contentType: false,
            //processData: false,
            //cache: false,
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            },
            success: function (res, textStatus, xhr) {
                console.log(res);
                alert("Profile updated Succesfully!!!");
                location.href = "dashboard.html";
                console.log(uploadimage);


            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');

            }
        });

    });



}); 