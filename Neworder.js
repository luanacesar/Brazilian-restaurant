function Calculate() {
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    var items = document.getElementsByTagName("input");
    var cells = document.getElementsByTagName("td");



    for (var i = 0; i < 12; i++) {
        if (items[i].checked) {
            subtotal += items[i].value * 1;

        }
    }
    tax = subtotal * 0.13;
    total = tax + subtotal;
    cells[1].innerHTML = subtotal.toFixed(2);
    cells[3].innerHTML = tax.toFixed(2);
    cells[5].innerHTML = total.toFixed(2);



}
var submit = document.getElementById("sButton");



submit.addEventListener("click", Calculate, false);