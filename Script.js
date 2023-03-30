
// 1. Write a js program to find maximum between two numbers.


// var number1 =+ prompt('Enter Number1')
// var number2 =+ prompt('Enter Number2')
// if(number1 > number2){
//    console.log(` your Number1 "${number1}" is greater then Number2 "${number1}"`)
   
// }else if(number1 < number2){
//    console.log(`Your Number2 "${number2}" is greater then Number1 "${number1}"`)
   
// }
// else if(number1 == number2){
//    console.log(`Your Number1 "${number1}" is Equal to Number2 "${number2}"`)
   
// }
// else{
//     console.log("Enter a valid value!")
// }

// ---------------------------------------------------------------------------------------------------------

// 2. Write a js program to find maximum between three numbers.

// var num1 =+ prompt('Enter Number1')
// var num2 =+ prompt('Enter Number2')
// var num3 =+ prompt('Enter Number3')
// if(num2 > num1 && num2 > num3){
//    console.log(`your Number2 "${num2}" is greater then Number1 "${num1}" and Number3 "${num3}"`)
// }
// else if(num1 > num2 && num1 > num3){
//    console.log(`Your Number1 "${num1}" is greater then Number2 "${num2}" and Number3 "${num3}"`)
   
// }
// else if(num3 > num1 && num3 > num2){
//    console.log(`Your Number3 "${num3}" is greater then Number1 "${num1}" and Number2 "${num2}"`)
   
// }
// else if(num1 == num2 && num1 == num3 && num2 == num1 && num2 == num3 && num3 == num1 && num3 == num2){
//    console.log(`Your Numbers "${num1}" =  "${num2}" = "${num3}"`)
   
// }
// else{
//     console.log("Enter a valid value! Please Enter only Numbers")
// }

// ---------------------------------------------------------------------------------------------------------

// 3. Write a js program to check whether a number is negative, positive or zero.


// var weather =+ prompt('Enter Weather Temperature in Numbers')
// if(weather <= 3){
//   console.log(`Your Temperature is  '${weather}⁰C' its means weather is very cold`)
// }
//  else if(weather <= 10){
//   console.log(`Your Temperature is  '${weather}⁰C' its means weather is cold`)
// }
//  else if(weather <= 25){
//   console.log(`Your Temperature is  '${weather}⁰C' its means weather is Normal`)
// }
//  else if(weather <= 40){
//   console.log(`Your Temperature is  '${weather}⁰C' its means weather is Hot`)
// }
//  else if(weather > 40){
//   console.log(`Your Temperature is  '${weather}⁰C' its means weather is very Hot`)
// }
// else{
//    console.log("Enter Valid Value! Please Enter Temp in Numbers")
// }
// ---------------------------------------------------------------------------------------------------------

// 4. Write a js program to check whether a number is divisible by 5 and 11 or not

// var weatherNumber =+ prompt('Enter Temp')
// if(weatherNumber%5 == 0){
//    console.log(`Your Enter Number "${weatherNumber}"  is Divisible by 5`)
// }
//  else if(weatherNumber%11 == 0){
//    console.log(`Your Enter Number "${weatherNumber}" is Divisible by 11`)
// }else{
//   console.log(`Your Enter Number "${weatherNumber}"  is Not Divisible by 5 OR 11`)
// }
// ---------------------------------------------------------------------------------------------------------


// 5. Write a js program to check whether a number is even or odd.

// var weatherEvenOrOdd =+ prompt('Enter Temperature')
// if(weatherEvenOrOdd%2==0){
//    console.log(`Your Enter Number ${weatherEvenOrOdd} is Even Number`)
// }else{
//   console.log(`Your Enter Number ${weatherEvenOrOdd} is Odd Number`)
// }

// ---------------------------------------------------------------------------------------------------------


// 6. Write a js program to check whether a year is leap year or not.

//  var yearLeapOrNot =+ prompt('Enter Year To Check It is Leap OR NOT')
//  if(yearLeapOrNot%4==0){
//    console.log(`Year ${yearLeapOrNot} is a Leap Year`)
//  }else{
//   console.log(`Year ${yearLeapOrNot} is  Not a Leap Year`)
//  }

 // ---------------------------------------------------------------------------------------------------------

//  7. Write a js program to check whether a character is alphabet or not.

// var weatherCharacter = prompt('Enter character to check it is alphabet or not ')
// if(weatherCharacter >= 'a' && weatherCharacter <= 'z' || weatherCharacter >= 'A' && weatherCharacter <= 'Z'){
//  console.log(`"${weatherCharacter}" is a Alphabet`)
// }else{
//   console.log(`"${weatherCharacter}" is not a alphabet`)
// }

 // ---------------------------------------------------------------------------------------------------------

//  8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// function vowelOrConsonant(alphabet){
//   var result = alphabet 
//  if(result == 'a' || result == 'e' || result == 'i' || result == 'o' || result == 'u'){
//     console.log(`"${result}" is a Vowel`)
//  }else{
//    console.log(`${result} is a Consonant`)
//  }
// }
// var checkVowelOrConsonant = prompt('Enter Alphabet to Check it is Vowel OR Consonant')
// vowelOrConsonant(checkVowelOrConsonant)

 // ---------------------------------------------------------------------------------------------------------

//  9. Write a js program to input any character and check whether it is alphabet, digit or special character.

//  function checkAlphabetDigitORSymbol(character){

//   var result = character
//   if(result >= 'a' && result <='z' || result >= 'A' && result <='Z'){
//     console.log(`"${result}" is a Alphabet`)
//   }
//   else if(result >= -100){
//      console.log(`"${result}" is a Number`)
//   }else{
//     console.log(`"${result}" is a special character`)
//   }


//  }

//  var userCharacter = prompt('Enter a character to Check it is Alphabet, Number or Symbol')
//  checkAlphabetDigitORSymbol(userCharacter)

//  ---------------------------------------------------------------------------------------------------------

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function checkUpperOrLowerCase(character){
//   var result = character
//   if(result >= 'a' && result <= 'z'){
//      console.log(`"${result}" is a Lowercase Character`)
//   }
//    else if(result >= 'A' && result <= 'Z'){
//      console.log(`"${result}" is a Uppercase Character`)
//   }else{
//     console.log('Enter a Valid Value!')
//   }
// }

// var userData = prompt('Enter Alphabet to Check it is Upper OR LowerCase')
// checkUpperOrLowerCase(userData)

// ---------------------------------------------------------------------------------------------------------

// 11. Write a js program to input week number and print week day.

//   function weekNumber(weeekDay){

//     var result = weeekDay
//     if(result == 1){
//        console.log(`${result} is a Monday`)
//     }
//     else if(result == 2){
//        console.log(`${result} is a Tuesday`)
//     }
//     else if(result == 3){
//        console.log(`${result} is a Wednesday`)
//     }
//     else if(result == 4){
//        console.log(`${result} is a Thursday`)
//     }
//     else if(result == 5){
//        console.log(`${result} is a Friday`)
//     }
//     else if(result == 6){
//        console.log(`${result} is a Saturday`)
//     }
//     else if(result == 7){
//        console.log(`${result} is a Sunday`)
//     }else{
//         console.log('PLease Enter Valid Number Enter 1 To 7 Only! ')
//     }

//   }
   
//   var getWeekNumber =+ prompt('Enter Number to see day Name, Enter 1 to 7')
//   weekNumber(getWeekNumber)

// ----------------------------------------------------------------------------------------------------------

// 12. Write a js program to input month number and print number of days in that month.

// function monthName(month){

//     var result = month
    
//     if(result == "january" || result == "January"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "february" || result == "February"){
//        console.log(`${result} have 28 Days`)
//     }
//     else if(result == "march" || result == "March"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "april" || result == "April"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "may" || result == "May"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "june" || result == "June"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "july" || result == "July"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "august" || result == "August"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "september" || result == "September"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "october" || result == "October"){
//        console.log(`${result} have 30 Days`)
//     }
//     else if(result == "november" || result == "November"){
//        console.log(`${result} have 31 Days`)
//     }
//     else if(result == "december" || result == "December"){
//        console.log(`${result} have 30 Days`)
//     }else{
//         console.log('Please Enter Correctly! ')
//     }

// }

// var getMonthName = prompt('Enter Any Month name to See Number of Days!')
// monthName(getMonthName)

// c----------------------------------------------------------------------------------------------------------

// 13. Write a js program to count total number of notes in given amount

//  function totalNotes(amount){
//     var result = amount/10
//     // var resultNotes = result/10
//     if(result == 0){
//         console.log('result')
//     }
//  }
// var userAmount =+ prompt('Enter Your Amount to Get Numbers of Notes')
// totalNotes(userAmount)

// ----------------------------------------------------------------------------------------------------------

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not

 function makeTriangle(values){

 }
var UserValues =+ ('ENTER Left side angle')
var UserValues =+ ('ENTER Right side angle')
var UserValues =+ ('ENTER base')
makeTriangle()


