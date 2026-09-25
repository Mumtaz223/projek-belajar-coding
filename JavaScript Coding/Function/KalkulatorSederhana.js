function multiply(a, b){
    return a * b;

}

function hitungPengurangan(a, b){
return a - b;
}

function hitungPembagian(a, b){
    return a - b;
}

function sisaBagi(a, b){
    return a%b;
}

function calculate (operation, numA, numB){
    return operation(numA, numB);
}


console.log(calculate(multiply,4, 5));
console.log(calculate(hitungPengurangan, 6, 3));
console.log(calculate(hitungPembagian, 4, 2));
console.log(calculate(sisaBagi, 5, 2));