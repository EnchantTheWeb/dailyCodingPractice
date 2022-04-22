// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    if (num.toString().length === 1) {
      return 0;
    }
    let mult = 1;
    let splitStr = num.toString().split("");
    for (let i = 0; i < splitStr.length; i++) {
      mult *= parseFloat(splitStr[i])
    }
    return 1 + persistence(parseFloat(mult));
  }
  
  console.log(
    persistence(999),
    persistence(39),
    persistence(4)
  );