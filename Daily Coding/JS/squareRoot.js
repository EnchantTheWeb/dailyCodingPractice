// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {

    let newValues = []; 
    for(let i = 0 ; i<array.length ;i++) {
        Number.isInteger(Math.sqrt(array[i]))?newValues.push(Math.sqrt(array[i])):newValues.push(array[i]*array[i]);
    }
    return newValues;
}

let a = [3,4,5,9,7,16,36,11];
console.log('Input : ' + a);
console.log('Output: ' + squareOrSquareRoot(a));