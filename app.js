/**
 * Service Main EntryPoint
 */
const express = require("express");
const app = express();


/**
 * @param {Number} myNumber 
 */
function convert(myNumber){
    if (myNumber == '0') return 'No Zero on Roman Notation';
    if('string' === typeof myNumber || myNumber instanceof String){
        if (isNaN(parseInt(myNumber,10))) throw new Error('This is supposed to be a number');
    }
    var romans = '';
    romans += parseNumber(Math.floor(myNumber / 1000), 'M', '', ''), myNumber %= 1000;
    romans += parseNumber(Math.floor(myNumber / 100), 'C', 'D', 'M'), myNumber %= 100;
    romans += parseNumber(Math.floor(myNumber / 10), 'X', 'L', 'C'), myNumber %= 10;
    romans += parseNumber(myNumber, 'I', 'V', 'X');
    return romans;
}

function parseNumber(myNumber, one, five, ten) {
    var result = '';
    switch (myNumber) {
      case 0: return result;
      case 9: return one + ten;
      case 4: return one + five;
    }
    if (myNumber >= 5) result = five, myNumber -= 5;
    while (myNumber-- > 0) result += one;
    return result;
  }

/**
 * Get user input
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter a number :`, (number) => {
    console.log(`In Roman: ${convert(number)} \t`);
    readline.close();
  })

module.exports = {
    app: app
}
