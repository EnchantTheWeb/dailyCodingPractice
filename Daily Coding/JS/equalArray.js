// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      let start = arr.slice(0, i+1).reduce((a, b) => a + b, 0);
      let end = arr.slice(i).reduce((a, b) => a + b, 0)
      
      if (start === end) {
        
        index = i
      }
      
    }
    return index;
  }