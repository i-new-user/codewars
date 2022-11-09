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


//----------------------------------------------------------------------------------------------------------------


//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
    return str.replace( /[aeiou]/gi, '');
}