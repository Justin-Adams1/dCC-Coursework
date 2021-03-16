function sumTwo(var1, var2){
    let total = var1 + var2;
    return total;
}

function addString(string1, string2){
    let stringSum = string1.concat(" " + string2);
    return stringSum;
}

function stringEval(string1){
    string1 = prompt("Please enter a string: ");

    while(string1.length <3) {
        string1 = prompt("Please enter a string larger than 3 characters");
    }
    return string1;
}

let var1 = parseInt(prompt("Enter Value 1: "));
let var2 = parseInt(prompt("Enter Value 2: "));

let total = sumTwo(var1, var2);
console.log(total);


let string1= prompt("Enter the first text: ");
let string2= prompt("Enter the second text: ");

let stringSum = addString(string1, string2);
console.log(stringSum);

let vertString = prompt("Enter a string to display Vertically ");
let vertStringPosition = 0;
for(let i=0; i < vertString.length; i++) {
    console.log(vertString.charAt(vertStringPosition));
    vertStringPosition++;
}

let stringTest = console.log(stringEval());