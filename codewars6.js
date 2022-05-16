//Write a function that returns a string in which firstname is swapped with last name.

//nameShuffler('john McClane'); => "McClane john"

//question
function nameShuffler(str){
  }

//solution
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }

//OR
  const nameShuffler = str => str.split(' ').reverse().join(' ');

