//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


//question
function removeChar(str){
   };

//solution

function removeChar(str){
    return str.substring(1).slice(0, -1)
    };

//or

    function removeChar(str){
        return str.slice(1, -1)
        };

        