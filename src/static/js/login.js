login_form = document.getElementById("login-form");
email_field = document.getElementById("email-address");
login_button = document.getElementById("login-button");
password_field = document.getElementById("password");

errors_list = document.getElementById("errors")

email_ok = false
password_ok = false

invalid_email = document.createElement("li");
invalid_email.appendChild(document.createTextNode("E-Mail not valid!"));
invalid_password = document.createElement("li");
invalid_password.appendChild(document.createTextNode("Password must be at least 8 character long!"));

email_field.addEventListener("keyup", function(even){
    isValidEmail = email_field.checkValidity()

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

password_field.addEventListener('keyup', function(event){
    if (password_field.value.length >= 8){
        password_ok = true;
        errors_list.removeChild(invalid_password);
    }
    else{
        password_ok = false;
        errors_list.appendChild(invalid_password);
    }
});

if (email_ok && password_ok){
    login_button.disabled = false;
}

login_button.addEventListener("click", function(event){
    signUpForm.submit();
});