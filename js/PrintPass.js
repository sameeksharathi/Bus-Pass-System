const name = document.getElementById('name');
const email = document.getElementById('email');
const mob = document.getElementById('mob');
const validity = document.getElementById('valid');
const destination = document.getElementById('destination');
const payment = document.getElementById('payment');

name.innerHTML = localStorage.getItem('Name')
email.innerHTML = localStorage.getItem('email')
mob.innerHTML = localStorage.getItem('mobno')
destination.innerHTML = localStorage.getItem('Destination')
payment.innerHTML = "Rs " + localStorage.getItem('Payment') + "/-"


var valid = localStorage.getItem('Expire')
if (valid == 1) {
    validity.innerHTML = localStorage.getItem('Expire') + " Month"
}
else {
    validity.innerHTML = localStorage.getItem('Expire') + " Months"
}



// function createPDF() {
//     // if (document.getElementById("name").value == "" || document.getElementById("email").value == "") {
//     //     alert("Please enter all the fields");
//     // }
//     // else {
//     var doc = new jsPDF('l', 'mm', [610, 310]);
//     doc.setFontType('bold');
//     doc.text("Bus Pass", 90, 10);
//     doc.line(90, 12, 116, 12);
//     doc.setTextColor(0, 0, 0);
//     doc.setFontSize(15);
//     doc.setFont("times");
//     doc.setFontType('normal');
//     doc.text("Name: " + localStorage.getItem('Name'), 30, 30);
//     doc.text("Email: " + localStorage.getItem('email'), 30, 40);
//     doc.text("Mobile Number: " + localStorage.getItem('mobno'), 30, 50);
//     doc.text("Valid Till: " + localStorage.getItem('Expire'), 30, 60);
//     doc.text("Destination: " + localStorage.getItem('Destination'), 30, 70);
//     doc.text("Payment: " + localStorage.getItem('Payment'), 30, 80);
//     doc.setTextColor(0, 0, 125);
//     doc.setFontSize(25);
//     doc.setFont("Poppins");
//     doc.setFontType("bold");
//     doc.text("Enjoy Your Journey", 65, 100);


//     doc.save("Receipt.pdf");
//     // }
// }


// function pdf() {
//     let doc = new jsPDF()
//     doc.autoTable({ html: '#receipt' })
//     doc.save('Receipt.pdf')
// }
// var doc = new jsPDF('p', 'pt');
// var res = doc.autoTableHtmlToJson(document.getElementById('table'));
// console.log(res.columns);

document.getElementById('pdf').onclick = function () {
    var doc = new jsPDF('l', 'pt', [610, 310]);
    var res = doc.autoTableHtmlToJson(document.getElementById('table'));
    var height = doc.internal.pageSize.height;
    doc.setFontType('bold');
    doc.text("Pass Receipt", 210, 30);
    doc.line(210, 35, 310, 35);
    doc.setFontType('normal');
    doc.autoTable(res.columns, res.data, {
        startY: 50
    });
    // doc.autoTable(res.columns, res.data, {
    //     startY: doc.autoTableEndPosY() + 50
    // });
    // doc.autoTable(res.columns, res.data, {
    //     startY: height,
    //     afterPageContent: function (data) {
    //         doc.setFontSize(20)
    //         doc.text("After page content", 50, height - data.settings.margin.bottom - 20);
    //     }
    // });
    doc.save('Bus Pass.pdf');
}



    // document.getElementById('button').onclick = function () {
    //     var doc = new jsPDF('p', 'pt');
    //     var res = doc.autoTableHtmlToJson(document.getElementById('receipt'));
    //     var height = doc.internal.pageSize.height;
    //     doc.text("Bus Pass", 50, 50);
    //     // function pdf() {
    //     //     // let doc = new jsPDF()

    //     //     // doc.autoTable({ html: '#receipt' })
    //     //     // doc.save('  Receipt.pdf')

    //     //     var doc = new jsPDF();
    //     //     doc.autoTable({ html: '#receipt' });
    //     //     doc.save('table.pdf');
    //     // }




    //     // document.getElementById('pdf').onclick = function () {
    //     //     var doc = new jsPDF('p', 'pt');
    //     //     var res = doc.autoTableHtmlToJson(document.getElementById('table'));
    //     //     var height = doc.internal.pageSize.height;
    //     //     doc.text("Generated PDF", 50, 50);
    //     //     doc.autoTable(res.columns, res.data, {
    //     //         startY: 200
    //     //     });
    //     //     doc.autoTable(res.columns, res.data, {
    //     //         startY: doc.autoTableEndPosY() + 50
    //     //     });
    //     //     doc.autoTable(res.columns, res.data, {
    //     //         startY: height,
    //     //         afterPageContent: function (data) {
    //     //             doc.setFontSize(20)
    //     //             doc.text("After page content", 50, height - data.settings.margin.bottom - 20);
    //     //         }
    //     //     });
    //     doc.save('BusPass.pdf');

