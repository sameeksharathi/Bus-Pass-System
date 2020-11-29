const form = document.getElementById('form');
let name = document.getElementById('name');
const num = document.getElementById('num');
const expdate = document.getElementById('expdate');
const cvv = document.getElementById('cvv');
const small = document.querySelector('small');

name.innerHTML = name.value.toUpperCase()

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const nameValue = name.value.trim();
    const numValue = num.value.trim();
    const cvvValue = cvv.value.trim();
    const expdateValue = expdate.value.trim();
    // const destinationValue = destination.value.trim();

    if (nameValue === '') {
        showError(name, "Name can not be Blank");
    }
    else if (!isname(nameValue)) {
        showError(name, "Name is not valid")
    }
    else {
        // name.innerHTML = name.value.toUpperCase();
        showSuccess(name);
    }


    if (numValue === '') {
        showError(num, "Email can not be Blank");
    }
    else if (!isNumValid(numValue)) {
        showError(num, "Email Id is not valid")
    }
    else {
        showSuccess(num);
    }


    if (expdateValue === '') {
        showError(expdate, "Expiry Date can not be Blank");
    }

    else {
        showSuccess(expdate);
    }

    if (cvvValue === '') {
        // cvv.style.border = "2px solid red";
        showError(cvv, "Destination can not be Blank");
    }
    else if (!isCvvValid(numValue)) {
        showError(cvv, "Email Id is not valid")
    }
    else {
        // cvv.style.border = "2px solid green";
        showSuccess(cvv);
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

// function isEmailValid(email) {
//     return /^[a-zA-Z\-]+[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(email);
// }

function isname(name) {
    return /^[a-zA-Z \-]+$/.test(name);
}

function isNumValid(num) {
    return /^[4-5]\d{16}$/.test(num);
}
function isCvvValid(cvv) {
    return /^[0-9]\d{3}$/.test(cvv);
}


function createPDF() {
    // if (document.getElementById("name").value == "" || document.getElementById("email").value == "") {
    //     alert("Please enter all the fields");
    // }
    // else {
    var doc = new jsPDF('l', 'mm', [610, 310]);
    doc.setFontType('bold');
    doc.text("Bus Pass", 90, 10);
    doc.line(89, 12, 115, 12);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(15);
    doc.setFont("times");
    doc.setFontType('normal');
    doc.text("Name: " + localStorage.getItem('Name'), 30, 30);
    doc.text("Email: " + localStorage.getItem('email'), 30, 40);
    doc.text("Mobile Number: " + localStorage.getItem('mobno'), 30, 50);
    doc.text("Valid Till: " + localStorage.getItem('Expire'), 30, 60);
    doc.text("Destination: " + localStorage.getItem('Destination'), 30, 70);
    doc.text("Payment: " + localStorage.getItem('Payment'), 30, 80);
    doc.setTextColor(0, 0, 125);
    doc.setFontSize(25);
    doc.setFont("courier");
    doc.setFontType("bold");
    doc.text("Enjoy Your Journey", 65, 100);



    doc.save("output.pdf");
    // }
}

var pay = document.getElementById("payment")
var money = localStorage.getItem('Payment')

pay.innerHTML = "Rs " + money + "/-";
