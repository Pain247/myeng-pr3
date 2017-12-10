$(document).ready(() => {


    $('#submit').on('click', function() {

        let url = window.location.origin+"/api/admin/login"

        $.ajax({
            type: "POST",
            method: "POST",
            url: url,
            data: $("#submitForm").serializeArray(),
            success: function(data) {
                if (data.errCode === 400) {
                    alert(data.msg)
                } else if (data.errCode === 500) {
                    alert("ERROR, please try again later!")
                } else if (data.errCode === 404) {
                    alert(data.msg);
                } else {
                    window.location = window.location.origin+"/Admin/Main";
                }
            }
        });

    })
})