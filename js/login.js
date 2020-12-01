const email = document.getElementById('email1');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
    Proceed();
})

function checkInput() {
    const emailValue = email.value;
    const passwordValue = password.value;


    if (emailValue === localStorage.getItem('email')) {
        showSuccess(email);
    }
    else {
        showError(email, "Invalid Email!");
    }

    if (passwordValue === localStorage.getItem('Password')) {
        showSuccess(password);
    }
    else {
        showError(password, "Incorrect Password!");
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
        // returnToPreviousPage();
        // location.href = "index.html";
        return false;
    }
    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "EditAndPrintPass.html";
    }
}