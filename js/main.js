$(document).ready(function() {

    //on submission//
    $('#signupForm').submit(function(event) {
    
        event.preventDefault();
    
            if (this.checkValidity() === false){
                event.stopPropagation();
            } else{
               
            }
            $(this).addClass('was-validated');
    
        });
    });