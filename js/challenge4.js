
$('form').submit(function() {

    var name = $.trim($("#fullname").val());
    var address = $.trim($("#streetaddr").val());

    if (name === '') {
        $("#nameerrormsg").css("display", "block");
        event.preventDefault();
    } else {
        $("#nameerrormsg").css("display", "none");
    }

    if (address === '') {
        $("#addrerrormsg").css("display", "block");
        event.preventDefault();
    } else {
        $("#addrerrormsg").css("display", "none");
    }

})

