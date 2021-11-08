const reg_form = document.getElementById('form_reg');
const reg_email = document.querySelector("[name='reg_email']");
const reg_password = document.querySelector("[name='reg_password']");
const reg_name = document.querySelector("[name='reg_name']");
const reg_confirm_password = document.querySelector("[name='reg_confirm_password']");

reg_form.addEventListener('submit', (e) =>{
    let reg_email_valid = false;
    let reg_name_valid = false;
    let reg_password_valid = false;
    let reg_confirm_password_valid = false;

    if(reg_email.value.length > 0){
        reg_email_valid = true;
    }else if(reg_email.value.length <= 0){
        // setErrorFor(login_email, 'Email cannot be blank');
        alert('Email cannot be blank');
        reg_email_valid = false;
        e.preventDefault();
    }
    if (!isEmail(reg_email.value)) {
        // setErrorFor(login_email, 'Not a valid email');
        reg_email_valid = false;
        alert('Not a valid email');
        e.preventDefault();
    }

    if(reg_password.value.length > 0){
        reg_password_valid = true;
    }else if(reg_password.value.length <= 0){
        // setErrorFor(login_password, 'Password cannot be blank');
        alert('Password cannot be blank');
    }

    if(reg_confirm_password.value.length > 0){
        reg_confirm_password_valid = true;
    }else if(reg_confirm_password.value.length <= 0){
        // setErrorFor(login_password, 'Password cannot be blank');
        alert('Confirm password cannot be blank');
        reg_confirm_password_valid = false;
        e.preventDefault();
    }

    if(reg_name.value.length > 0){
        reg_name_valid = true;
    }else if (reg_name.value.length <= 0){
        // show that username field is empty
        alert('Username cannot be blank');
        e.preventDefault();
        reg_name_valid = false;
    }

    if(reg_password.value === reg_confirm_password.value && reg_password.value.length > 0){
        reg_password_valid = true;
        reg_confirm_password_valid = true;
    }else {
        reg_password_valid = false;
        reg_confirm_password_valid = false;
        e.preventDefault();
        alert("Passwords don't match");
    }

    if (reg_email_valid === false || reg_name_valid === false || reg_password_valid === false || reg_confirm_password_valid === false){
        e.preventDefault();
    }

});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form_login';
    small.innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}