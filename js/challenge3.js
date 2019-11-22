

$("form").submit(function() {
    if($('[name = "fruit"]').is(':checked')) {
        return true;
    } else {
        alert("You must pick a fruit!");
        return false;
        event.preventDefault();
    }
})

    
$("form").submit(function() {    
    if($('[name = "standing"]').is(':checked')) {
        return true;
    } else {
        alert("You must pick a standing!");
        return false;
        event.preventDefault();
    }

})







