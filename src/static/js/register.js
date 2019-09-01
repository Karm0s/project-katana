register_form = document.getElementById("register-form");

email_field = document.getElementById("email-address");
email_field_confirmation = document.getElementById("email-address-confirmation");

password_field = document.getElementById("password");
password_field_confirmation = document.getElementById("password-confirmation");

register_button = document.getElementById("register-button");

errors_list = document.getElementById("errors");

email_ok = false;
email_confirmation_ok = false;

password_ok = false;
password_confirmation_ok = false;

invalid_email = document.createElement("li");
invalid_email.appendChild(document.createTextNode("E-Mail not valid!"));

invalid_email_confirmation = document.createElement("li");
invalid_email_confirmation.appendChild(document.createTextNode("E-Mails do not match!"));

invalid_password = document.createElement("li");
invalid_password.appendChild(document.createTextNode("Password must be at least 8 character long!"));

invalid_password_confirmation = document.createElement("li");
invalid_password_confirmation.appendChild(document.createTextNode("Passwords do not match!"));

function validate_email(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


email_field.addEventListener("keyup", function(event){
    isValidEmail = validate_email(email_field.value);

    if(isValidEmail){
        email_ok = true;
        if (errors_list.contains(invalid_email)){
            errors_list.removeChild(invalid_email);
        }
    }
    else{
        email_ok = false;
        if (!errors_list.contains(invalid_email)){
            errors_list.appendChild(invalid_email);
        }
    }
});

email_field_confirmation.addEventListener("focusout", function(event){
    if(email_field_confirmation.value === email_field.value){
        email_confirmation_ok = true;
        if (errors_list.contains(invalid_email_confirmation)){
            errors_list.removeChild(invalid_email_confirmation);
        }
    }
    else{
        email_confirmation_ok = false;
        if (!errors_list.contains(invalid_email_confirmation)){
            errors_list.appendChild(invalid_email_confirmation);
        }
    }

});

password_field.addEventListener("keyup", function(event){
    if (password_field.value.length >= 8){
        password_ok = true;
        if (errors_list.contains(invalid_password)){
            errors_list.removeChild(invalid_password);
        }
    }
    else{
        password_ok = false;
        if (!errors_list.contains(invalid_password)){
            errors_list.appendChild(invalid_password);
        }
    }
});

password_field_confirmation.addEventListener("focusout", function(event){
    if (password_field_confirmation.value === password_field.value){
        password_confirmation_ok = true;
        if (errors_list.contains(invalid_password_confirmation)){
            errors_list.removeChild(invalid_password_confirmation);
        }

    }
    else{
        password_confirmation_ok = false;
        if (!errors_list.contains(invalid_password_confirmation)){
            errors_list.appendChild(invalid_password_confirmation);
        }
    }
});

register_form.addEventListener("keyup", function(event){
    if (email_ok && password_ok && email_confirmation_ok && password_confirmation_ok){
        console.log("here");
        register_button.disabled = false;
    }
    else{
        register_button.disabled = true;
    }
});

register_button.addEventListener("click", function(event){
    signUpForm.submit();
});