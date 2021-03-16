// let startString = prompt("Please enter the string you wish to reverse: ");
// let stringReversed;

// function reverseTheString(startString){
//     let arrayReversed= [];

//     for(i=(startString.length-1); i>=0; i--){
//         arrayReversed.push(startString.charAt(i));
//     }

//     stringReversed = arrayReversed.join("");
//     return(stringReversed);
// }


// reverseTheString(startString);

// console.log(stringReversed);



// let capitalString = prompt("Please enter the string you wish to modify: ");
// let splitString = capitalString.split(" ");
// let finalString = [];


// for(i=0; i<splitString.length; i++){

//     finalString.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1));
// }
// console.log(finalString.join(" "));

// let bigString = prompt("Please enter a big string: ");
// let sortString = bigString.split("");
// sortString.sort();

// let smallString = [];

// let currentCount = 1;

// let finalString;

// for(i=0; i < sortString.length; i++){

//     if(sortString[i] === sortString[i+1]){
//         currentCount++;
//     }else{
//         smallString.push(currentCount)
//         smallString.push(sortString[i]);
//         currentCount = 1;
//     }
// }
// finalString= smallString.join("");
// console.log(finalString);



let startString = prompt("Please enter the word or phrase to check for Palindrome status: ");
let stringReversed;

function reverseTheString(startString){
    let arrayReversed= [];

    for(i=(startString.length-1); i>=0; i--){
        arrayReversed.push(startString.charAt(i));
    }

    stringReversed = arrayReversed.join("");
    return(stringReversed);
}
reverseTheString(startString);

if(stringReversed === startString){
    console.log("This is a Palindrome!");
}else{
    console.log("This is NOT a Palindrome!");
}
