//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//"1234" --> 1234
//"605"  --> 605
//"1405" --> 1405
//"-7" --> -7


//question
const stringToNumber = function(str){
    return null;
  }

//solution

var stringToNumber = function(str){
    return parseInt(str);
  }

//OR

var stringToNumber = Number;

//OR

var stringToNumber = function(str){
    return Number(str);
  }