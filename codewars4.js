//We need a function that can transform a number into a string.

//What ways of achieving this do you know?

//Examples:
//123 --> "123"
//999 --> "999"

//question

function numberToString(num) {
    // Return a string of the number here!
  }

//solution 

function numberToString(num) {
    return num.toString();
  }

//OR
function numberToString(num) {
    return String(num);
  }

//OR
const numberToString = num => `${num}`;

//OR
const numberToString = num => num.toString();