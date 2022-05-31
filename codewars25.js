// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

//question
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }


//solution
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }

  //or
  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }