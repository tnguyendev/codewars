// Simple, given a string of words, return the length of the shortest word(s).

//question
function findShort(s){

}

//solution

function findShort(s){

let arr = s.split(" ").sort((a, b) => a.length - b.length);
return arr[0].length
}


//or
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  //or

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}