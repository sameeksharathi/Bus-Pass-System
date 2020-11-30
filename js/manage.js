const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const password = document.getElementById('password');
const destination = document.getElementById('destination');
const small = document.querySelector('small');



// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     checkInput();
// })

localStorage.setItem('Name', name.value)
localStorage.setItem('email', email.value)
localStorage.setItem('Password', password.value);
localStorage.setItem('mobno', mob.value)

localStorage.setItem('Expire', expdate.value)
var pay = Number(expdate.value)

if (destinationValue === 'Choose Your Destination') {
    destination.style.border = "2px solid red";
    showError(destination, "Please fill out this field!");
}
else {
    destination.style.border = "2px solid green";
    showSuccess(destination);
    localStorage.setItem('Destination', destination.value)
    let dest = destination.value
    let payment;
    if (dest == "Delhi") {
        payment = Number(150) * pay
        localStorage.setItem("Payment", payment)
    }
    else if (dest == "Agra") {
        payment = Number(100) * pay
        localStorage.setItem("Payment", payment)
    }
    else if (dest == "Mathura") {
        payment = Number(60) * pay
        localStorage.setItem("Payment", payment)
    }
    else if (dest == "Vrindavan") {
        payment = Number(40) * pay
        localStorage.setItem("Payment", payment)
    }
    else if (dest == "Barsana") {
        payment = Number(80) * pay
        localStorage.setItem("Payment", payment)
    }
    else if (dest == "Chaumuhan") {
        payment = Number(20) * pay
        localStorage.setItem("Payment", payment)
    }
}
function validateMyForm() {
    if (!((name.parentNode.className == 'form-control success') && (email.parentNode.className == 'form-control success') && (mob.parentNode.className == 'form-control success') && (destination.parentNode.className == 'form-control success'))) {
        returnToPreviousPage();
        return false;
    }
    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "Payment.html";
    }
}
