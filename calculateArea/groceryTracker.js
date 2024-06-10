let grocery1;
let grocery2;
let grocery3;

function calculatGroceriesTotal() {
    grocery1 = parseFloat(document.getElementById('Grocery-1').value);
    grocery2 = parseFloat(document.getElementById('Grocery-2').value);
    grocery3 = parseFloat(document.getElementById('Grocery-3').value);
    let res = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total amount is : $ ${res}`;
}