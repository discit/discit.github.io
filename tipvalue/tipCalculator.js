function calcTip() {
    var subtotal = parseFloat(document.getElementById('subtotal').value)

    var tip = parseFloat(document.getElementById("tip").value);

	var totalElem = document.getElementById('total');

    var total = subtotal + tip*subtotal/100;

	totalElem.innerHTML = '$' + total;
}