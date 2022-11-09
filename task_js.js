//   Your classmates asked you to copy some paperwork for them. 
//   You know that there are 'n' classmates and the paperwork has
//   'm' pages.Your task is to calculate how many blank pages do 
//   you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
}


//----------------------------------------------------------------------------------------------------

//   Simple, remove the spaces from the string, then return the resultant
//   string.

function noSpace(x){
    return x.split(' ').join('');
 }



//-------------------------------------------------------------------------------------------------

//Write function RemoveExclamationMarks which removes all exclamation marks 
//from a given string.




function removeExclamationMarks(x){
    return x.replace(/!/g, '');
}


