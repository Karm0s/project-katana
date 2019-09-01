login_form = document.getElementById("login-form");
email_field = document.getElementById("email-address");
login_button = document.getElementById("login-button");
password_field = document.getElementById("password");

errors_list = document.getElementById("errors");

email_ok = false;
password_ok = false;

invalid_email = document.createElement("li");
invalid_email.appendChild(document.createTextNode("E-Mail not valid!"));

function validate_email(email) {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

email_field.addEventListener("keyup", function(even){
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

password_field.addEventListener("keyup", function(event){
    if (password_field.value){
        password_ok = true;
    }
    else{
        password_ok = false;
    }
});

login_form.addEventListener("keyup", function(event){
    if (email_ok && password_ok){
        login_button.disabled = false;
    }
    else{
        login_button.disabled = true;
    }
})

login_button.addEventListener("click", function(event){
    login_form.submit();
});