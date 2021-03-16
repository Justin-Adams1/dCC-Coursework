let array1=[0];

console.log(array1[0])

let color = ["blue", "red", "white", "green", "yellow"];

let color1 = prompt("Please enter a color: ");

if(color.includes(color1.toLowerCase())){
    console.log("You found one of my favorite colors!");
}
else{
    console.log("That isn\'t one of my favorite colors");
}


let numberTable = [1,1,2,3,3,3,4,5,6,7,8,9,10,7,7];

function findMost(numberTable){
    numberTable.sort();
    let currentCount = 1;
    let currentHighestFequency = numberTable[0];
    let highestCount = 0;

    for(i=0; i < numberTable.length; i++){

        if(numberTable[i] === numberTable[i+1]){
            currentCount++; //adds to the counter if the current iteration equals the next array item.
        }else{
            if(currentCount > highestCount){
                highestCount = currentCount;
                currentHighestFequency = numberTable[i];
            }
        }
    }
    console.log(currentHighestFequency);
    return currentHighestFequency;
}
findMost(numberTable);


let numberTable2 = [1,2,3,4,5,6,7,8,9,10]

function addArray(numberTable){
    let currentSum = 0;

    for(i=0; i<numberTable2.length; i++){
        currentSum += (numberTable2[i]);
    }

    if(currentSum % 2 ==0){
        console.log("Number is Even");
    } else {
        console.log("Number is Odd");
    }

}
addArray(numberTable2);


let numberTable3 = [1,2,3,4,300, 544, 5,6,7,8,9,10];
let numberToCheck = prompt("Enter a value between 1 and 10: ");

function greaterThan(numberTable3, numberToCheck){

    for(i=0; i<numberTable3.length; i++){
        
        if(numberToCheck <= numberTable3[i]){
        console.log(numberTable3[i]);
        }
    }

}
greaterThan(numberTable3, numberToCheck);


let numberTable4 = [1,2,3,4,5,6,7,8,9,10];
let lessThanAvg = [];

function averageArray(numberTable4, lessThanAvg){
    let avgArray = 0;
    let currentSum = 0;

    for(i=0; i < numberTable4.length; i++){
        
        currentSum += (numberTable4[i]);
    }
    avgArray = (currentSum / i);
    for(i=0; i < numberTable4.length; i++){

        if(numberTable4[i] < avgArray)
        lessThanAvg.push(numberTable4[i]);

    }
    for(i=0; i < lessThanAvg.length; i++){
    console.log(lessThanAvg[i]);
    }
    return(lessThanAvg);
}
averageArray(numberTable4, lessThanAvg);


let numberTable5 = [1,2,3,4,5,6,7,8,,];
let checkSpot = prompt("Please enter the array location to check(starts at 0 being first): ");

function checkArray(numberTable5, checkSpot){

    if (numberTable5[checkSpot] != null) {
        console.log(numberTable5[checkSpot])
        return(numberTable5[checkSpot]);
    }else{
        console.log("That place does not exist")
    }

}

checkArray(numberTable5, checkSpot);


let numberTable6 = ["Bob", "John", "Ben", "Joe", "Kero"];
let numberTable7 = ["Bill", "Jill", "Ken", "Job", "Kero"];
let check;

function compareArray(numberTable6, numberTable7){
    for(i=0; i < numberTable6.length; i++){

            if(numberTable7.includes(numberTable6[i])){
            check= numberTable6[i];
            }
        }
    return check;
}
compareArray(numberTable6,numberTable7);

console.log(check);