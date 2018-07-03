'use strict'

export const getOddNumbers = (numbers) => {

  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i])
    }
  }*/

  const result = numbers.filter(numbers => numbers % 2 !== 0);
  console.log(result);

  return result;
}

export const getEvenNumbers = (numbers) => {

  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i])
    }
  }*/

    const result = numbers.filter(numbers => numbers % 2 === 0);
    console.log(result);

    return result;
}
