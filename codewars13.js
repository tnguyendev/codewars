//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

//question
function solution(str){
    return
}


//solution
function solution(str){
    arr = str.split("").reverse().join("")
    //split is a method for a string. 
    //basically saying, everytime you see nothing, split it. 
    //you can "chain" methods by putting it at the end
    //output of one is the input of another
    //split and join need parameters
    //reverse is not defined with a parameter
    //things inside paranthesis is parameter
    //
    console.log(arr)
    return arr
  }