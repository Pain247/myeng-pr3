$(document).ready(() => {


    //getFormData($("#submitForm"))
    $('#submit').on('click', function() {

        let url = window.location.origin+"/api/user/signup";

        $.ajax({
            type: "POST",
            method: "POST",
            url: url,
            data: $("#submitForm").serializeArray(),
            success: function(data) {
                console.log(data)
                if (data.errCode === 400) {
                    alert(data.msg)
                } else if (data.errCode === 500) {
                    alert("ERROR, please try again later!")
                } else if (data.errCode === 404) {
                    alert(data.msg);
                } else {
                    // document.cookie = "userId=" + data.data.user._id + ";"
                    window.location = window.location.origin+"/MyEng/SignIn";
                }
            }
        });

    })
})