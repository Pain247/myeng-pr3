$("document").ready(function() {


    $("#submit").on('click', function() {
        $("#myModal").modal('show')
        var name = $("#name").val()
        var email = $("#email").val()
        var content = $("#content").val() + "  --- Please reply to : " + email;

        $.ajax({
            type: "POST",
            method: "POST",
            url: window.location.origin+"/api/user/feedback",
            data: { "name": name, "content": content },
            sucess: function(data) {
                if (data.errCode === 200) {
                    window.location = window.location.origin+"/MyEng/Main";
                } else {
                    alert(data.msg)
                }
            }
        })
    })
})