const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue === localStorage.getItem('Email')) {
        showSuccess(email);
    }
    else {
        showError(email, "Invalid Email");
    }

    if (passwordValue === localStorage.getItem('Password')) {
        showSuccess(password);
    }
    else {
        showError(password, "Invalid Email");
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function validateMyForm() {
    if (!((email.parentNode.className == 'form-control success') && (password.parentNode.className == 'form-control success'))) {
        returnToPreviousPage();
        return false;
    }
    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "PrintPass.html";
    }
}