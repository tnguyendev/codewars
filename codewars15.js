//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//question
function getCount(str) {
    let vowelsCount = 0;
    
    // enter your magic here
    
    return vowelsCount;
  }


//solution

function getCount(str) {
    let vowelsCount = 0;
    //variable has to be given a value, can't have nothing
    //if you use let, you cant have it be null
    //defining a var in a function to use
    
    let vowels = ["a","e","i","o","u"];
  
    //split word into an array, to get it read letter by letter
    //make a method to read it
    let vowelOne = str.split("")
    console.log(vowelOne)
    //for every letter in vowelOne
    for(let letter in vowelOne){
      console.log(letter)
      //if the vowels array, line 7, includes the letter we're currently on (in the word we're using)
      //which will be str. 
      //we're gonna increase vowelsCount by 1
      //do this by using if state
      //includes is a method that returns a boolean
      //if checks for a boolean/condition
      if (vowels.includes(vowelOne[letter])){
        vowelsCount=vowelsCount+1
      }
    }
    
    
    return vowelsCount;
  }