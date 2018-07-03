'use strict'

export const rowMultiplication = (row) => {

  /*for (let i = 0; i < row.length; i++) {
    result = result * row[i]
  }*/

  const result = row.reduce(function(a,b){return a*b})

  return result;
}
