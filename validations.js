const form = document.getElementById('form_login');
const login_email = document.querySelector("[name='login_email']");
const login_password = document.querySelector("[name='login_password']");

form.addEventListener('submit', (e) =>{
    let email_valid = false;
    let password_valid = false;

    if(login_email.value.length > 0){
        email_valid = true;
    }else if(login_email.value.length <= 0){
        // setErrorFor(login_email, 'Email cannot be blank');
        alert('Email cannot be blank');
    }
    if (!isEmail(login_email.value)) {
        // setErrorFor(login_email, 'Not a valid email');
        email_valid = false;
        alert('Not a valid email');
    }

    if(login_password.value.length > 0){
        password_valid = true;
    }else if(login_password.value.length <= 0){
        // setErrorFor(login_password, 'Password cannot be blank');
        alert('Password cannot be blank');
    }
    if (email_valid === false || password_valid === false){
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