const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const password = document.getElementById('password');
const destination = document.getElementById('destination');
const small = document.querySelector('small');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
    Proceed()
})

function checkInput() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const mobValue = mob.value.trim();
    const expdateValue = expdate.value;
    const destinationValue = destination.value;
    const passwordValue = password.value;
    console.log(name.value);
    if (nameValue === '') {
        showError(name, "Please fill out this field!");
    }
    else if (!isname(nameValue)) {
        showError(name, "This contain letters only.")
    }
    else {
        showSuccess(name);
        localStorage.setItem('Name', name.value)
    }


    if (emailValue === '') {
        showError(email, "Please fill out this field!");
    }
    else if (!isEmailValid(emailValue)) {
        showError(email, "Enter a valid email.")
    }
    else {
        showSuccess(email);
        localStorage.setItem('email', email.value)
    }

    if (passwordValue === '') {
        showError(password, "Please fill out this field!");
    }
    else {
        showSuccess(password);
        localStorage.setItem('Password', password.value);
    }

    if (mobValue === '') {
        showError(mob, "Please fill out this field!");
    }
    else if (!ismob(mobValue)) {
        showError(mob, "This contain numbers only without country code or 0.")
    }
    else {
        showSuccess(mob);
        localStorage.setItem('mobno', mob.value)
    }

    if (expdateValue === 'Select Months') {
        expdate.style.border = "2px solid red";
        showError(expdate, "Please fill out this field!");
    }
    else {
        expdate.style.border = "2px solid green";
        showSuccess(expdate);
        localStorage.setItem('Expire', expdate.value)

    }
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
            payment = Number(4500) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (dest == "Agra") {
            payment = Number(3000) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (dest == "Mathura") {
            payment = Number(1800) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (dest == "Vrindavan") {
            payment = Number(1200) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (dest == "Barsana") {
            payment = Number(2400) * pay
            localStorage.setItem("Payment", payment)
        }
        else if (dest == "Chaumuhan") {
            payment = Number(600) * pay
            localStorage.setItem("Payment", payment)
        }
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

function isEmailValid(email) {
    return /^[a-zA-Z\-]+[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(email) || /^[a-zA-Z\-]+.[a-zA-Z\-]+_[a-zA-Z0-9\-]+@gla.ac.in$/.test(email);
}

function isname(name) {
    return /^[a-zA-Z \-]+$/.test(name);
}

function ismob(mob) {
    return /^[6-9]\d{9}$/.test(mob);
}


// function createPDF() {
//     // if (document.getElementById("name").value == "" || document.getElementById("email").value == "") {
//     //     alert("Please enter all the fields");
//     // }
//     // else {
//     var doc = new jsPDF('l', 'mm', [610, 310]);
//     doc.setFontType('bold');
//     doc.text("Bus Pass", 90, 10);
//     doc.line(89, 12, 115, 12);
//     doc.setTextColor(0, 0, 0);
//     doc.setFontSize(15);
//     doc.setFont("times");
//     doc.setFontType('normal');
//     doc.text("Name: " + document.getElementById("name").value, 30, 30);
//     doc.text("Email: " + document.getElementById("email").value, 30, 40);
//     doc.text("Mobile Number: " + document.getElementById("mob").value, 30, 50);
//     doc.text("Valid Till: " + document.getElementById("expdate").value + " Month/Months", 30, 60);
//     doc.text("Destination: " + document.getElementById("destination").value, 30, 70);
//     doc.setTextColor(0, 0, 125);
//     doc.setFontSize(25);
//     doc.setFont("courier");
//     doc.setFontType("bold");
//     doc.text("Enjoy Your Journey", 65, 100);



//     doc.save("output.pdf");
//     // }
// }


// function submit() {
//     document.getElementById("submit").onclick = function () {
//         location.href = "Payment.html";
//     }
// }




function validateMyForm() {
    if (!((name.parentNode.className == 'form-control success') && (email.parentNode.className == 'form-control success') && (mob.parentNode.className == 'form-control success') && (destination.parentNode.className == 'form-control success'))) {
        // returnToPreviousPage();
        return false;
    }
    return true;
}


function Proceed() {
    if (validateMyForm()) {
        location.href = "Payment.html";
    }
}
