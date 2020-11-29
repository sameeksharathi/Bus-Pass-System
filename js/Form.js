const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const destination = document.getElementById('destination');
const small = document.querySelector('small');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const mobValue = mob.value.trim();
    const expdateValue = expdate.value.trim();
    const destinationValue = destination.value.trim();

    if (nameValue === '') {
        showError(name, "Name can not be Blank");
    }
    else if (!isname(nameValue)) {
        showError(name, "Name is not valid")
    }
    else {
        showSuccess(name);
    }


    if (emailValue === '') {
        showError(email, "Email can not be Blank");
    }
    else if (!isEmailValid(emailValue)) {
        showError(email, "Email Id is not valid")
    }
    else {
        showSuccess(email);
    }


    if (mobValue === '') {
        showError(mob, "Mobile Number can not be Blank");
    }
    else if (!ismob(mobValue)) {
        showError(mob, "Mobile Number is not valid")
    }
    else {
        showSuccess(mob);
    }

    if (expdateValue === '') {
        showError(expdate, "Expiry Date can not be Blank");
    }

    else {
        showSuccess(expdate);
    }

    if (destinationValue === 'Choose Your Destination') {
        destination.style.border = "2px solid red";
        showError(destination, "Destination can not be Blank");
    }
    else {
        destination.style.border = "2px solid green";
        showSuccess(destination);
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
    return /^[a-zA-Z\-]+[a-zA-Z0-9.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,3}$/.test(email);
}

function isname(name) {
    return /^[a-zA-Z \-]+$/.test(name);
}

function ismob(mob) {
    return /^[6-9]\d{9}$/.test(mob);
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
    doc.text("Name: " + document.getElementById("name").value, 30, 30);
    doc.text("Email: " + document.getElementById("email").value, 30, 40);
    doc.text("Mobile Number: " + document.getElementById("mob").value, 30, 50);
    doc.text("Valid Till: " + document.getElementById("expdate").value, 30, 60);
    doc.text("Destination: " + document.getElementById("destination").value, 30, 70);
    doc.setTextColor(0, 0, 125);
    doc.setFontSize(25);
    doc.setFont("courier");
    doc.setFontType("bold");
    doc.text("Enjoy Your Journey", 65, 100);



    doc.save("output.pdf");
    // }
}
