// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


//question
function capitalize(s){
    return [];
  };


//solution

function capitalize(s){
    return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
            s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
  };


  //or

  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

  //or
  function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
  }
