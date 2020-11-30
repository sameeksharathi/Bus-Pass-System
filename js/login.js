const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const emailValue = email.value.trim();
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