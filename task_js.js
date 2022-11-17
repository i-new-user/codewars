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
//A common way to deal with this situation is to remove all of the vowels from 
//the trolls' comments, neutralizing the threat.Your task is to write a function 
//that takes a string and return a new string with all vowels removed. For example,
//the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
    return str.replace( /[aeiou]/gi, '');
}




//--------------------------------------------------------------------------------------------------------------------------------------------------------

//Given a string of digits, you should replace any digit below 5 with '0' and any 
//digit 5 and above with '1'. Return the resulting string.Note: input will never be
//an empty string




function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


//-------------------------------------------------------------------------------------------------------

//Create a function that checks if a number n is divisible by two numbers x AND y. 
//All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }





//----------------------------------------------------------------------------------------------------------------

//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i*2;
}




//-----------------------------------------------------------------------------------------------------------

//Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return +laLigaGoals + +copaDelReyGoals + +championsLeagueGoals;
}







//---------------------------------------------------------------------------------------------------------------------------

//Think of a way to store the languages as a database (eg an object). The languages 
//are listed below so you can copy and paste! Write a 'welcome' function that takes 
//a parameter 'language' (always a string), and returns a greeting - if you have it 
//in your database. It should default to English if the language is not in the database, 
//or in the event of an invalid input.

var obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};
function greet(language) {
    return obj[language] || 'english';
};





//------------------------------------------------------------------------------------------------------------------

//Create a function that accepts 2 string arguments and returns an integer of the count 
//of occurrences the 2nd argument is found in the first one. If no occurrences can be found, 
//a count of 0 should be returned.

function strCount(str, letter){  
    return str.split(letter).length-1
}




//-------------------------------------------------------------------------------------------------

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    return x.toUpperCase() === x.split('').reverse().join('').toUpperCase();
}





//----------------------------------------------------------------------------------------------------

//You can assume, for the purpose of this kata, that the supplied array will
//not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}





//------------------------------------------------------------------------------------------------------

//Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
    let bmi = weight / (height**2);
    
    if(bmi < 18.5){
      return "Underweight";
    }else if (bmi < 25){
      return "Normal";
    }else if (bmi < 30){
      return "Overweight";
    }else{
      return "Obese";
    }
  }





//-------------------------------------------------------------------------------------------------

//You have to write a function that accepts three parameters:cap is the amount of people 
//the bus can hold excluding the driver.on is the number of people on the bus excluding 
//the driver.wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he
//can't take.

function enough(cap, on, wait) {
    return (cap - on) > wait ? 0 : wait - (cap - on);
}






//Convert a Boolean to a String
function booleanToString(b){
    return String(b);
}



//Convert a String to a Number!
const stringToNumber = function(str){
    return +str;
}



//The highest profit wins!
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}



//Friend or Foe?c
function friend(friends){
    let newArr = [];
   for(let elem of friends){
     if(elem.length == 4){
       newArr.push(elem);
     } 
   }
    return newArr;
}

//Wilson primes
function amIWilson(p) {
    return p==5||p==13||p==563;
}


//Return a new array consisting of elements which are multiple of their own index in input 
//array (length > 1).
function multipleOfIndex(array) {
    let newArr = [];
    for(let i = 0; i < array.length;i++){
      if(array[i] % i == 0){
        newArr.push(array[i]);
      }
    }
    return newArr;
}


//Find Multiples of a Number
function findMultiples(integer, limit) {
    let arr = [];
    for(let i = integer; i <= limit; i+=integer){
        arr.push(i); 
    }
    return arr;
}

//Function 2 - squaring an argument
const square = function(x) {
    return x * x;
};
console.log(square(12));
  
