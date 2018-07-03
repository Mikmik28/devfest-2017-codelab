'use strict'

export const findLeftmostEven = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]
    }
  }*/

  var found = numbers.find(function(element){
    return element % 2 ===0;
  });

  return found;
}

export const findLeftmostOdd = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  }*/

  var found = numbers.find(function(element){
    return element % 2 !==0;
  });

  return found;
}
