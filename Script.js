
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
//     var result = amount
//     var resultNotes = parseInt( result/10)
//     // console.log(resultNotes)
//     if(resultNotes){
//         console.log(`${result}Rs have ${resultNotes} notes`)
//     }else{
//         console.log('Enter a Valid Value!')
//         // consolegit comm
//     }
//  }
// var userAmount =+ prompt('Enter Your Amount to Get Numbers of 10Rs Notes')
// totalNotes(userAmount)

// ----------------------------------------------------------------------------------------------------------

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not

// function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left + right + baseValue == 180 ){
//         console.log('LeftSide= ', left)
//         console.log('RightSide= ', right)
//         console.log('Base= ', baseValue)
//         console.log(`It is a Valid Triangle because ${left} + ${right} + ${baseValue} = 180`)
//     }
//     else{
//         console.log(`It is a Invalid Triangle ${left} + ${right} + ${baseValue} is not equal to 180  `)
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)

// ----------------------------------------------------------------------------------------------------


// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

//  function makeTriangle(leftSide, rightSide, base){

//     var left = leftSide
//     var right = rightSide
//     var baseValue = base
//     if(left == right && left == baseValue && right == left && right == baseValue && baseValue == left && baseValue == right ){
//         console.log('LeftSide= ', left)
//         console.log('RightSide= ', right)
//         console.log('Base= ', baseValue)
//         console.log("A triangle with all sides of equal length is called an 'equilateral triangle'")
//     }
//     else if(left== 90 || right == 90){
//         console.log("LeftSide= ", left)
//         console.log("RightSide= ", right)
//         console.log("base= ", baseValue)
//         console.log('A triangle with one angle measuring 90 degrees is called a "right-angled triangle"')
//     }else{
//         console.log('Please Enter Same Values to Create "equilateral triangle"')
//         console.log('Please Enter one side 90  to Create "right-angled triangle"')
//     }



//  }
// var UserValues1 =+ prompt('ENTER Left side angle')
// var UserValues2 =+ prompt('ENTER Right side angle')
// var UserValues3 =+ prompt('ENTER base')
// makeTriangle(UserValues1,UserValues2,UserValues3)

// ====================================================================================================

// 17. Write a js program to find all roots of a quadratic equation.
// function findRoots(){
//  if(){

//  }

// } 



// ================================================================================================

// 18. Write a js program to calculate profit or loss.

// function profitOrLoss(userbuyPrice, usersalePrice){

// var user = userbuyPrice
// var sale = usersalePrice
// var result = sale - user
// if(result >= 0){
//         console.log("Market Price = ", user )
//         console.log("Sale Price = ", sale )
//         console.log("Your Profit = ", result , " Rupees")
// }else{
//     console.log("Market Price = ", user )
//     console.log("Sale Price = ", sale )
//     console.log("Your Loss = ", result , " Rupees")
// }

// }
// var markedPrice =+ prompt('Enter Marked Price in Rupees')
// var salePrice =+ prompt('Enter sale price in Rupees')
// profitOrLoss(markedPrice, salePrice)

// ====================================================================================================

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// function gradeAndPercentege(phy,chem,bio,math,comp){

//     var physicsMarks = phy
//     var ChemMarks = chem
//     var bioMarks = bio
//     var mathMarks = math
//     var compMarks = comp
//     var ObtainedMarks = physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks
//     var getPercentege = (physicsMarks + ChemMarks + bioMarks + mathMarks + compMarks) /500 * 100
//     // console.log(TotalMarks)
//     if(ObtainedMarks > 500){
//        alert('Please Enter valid Values Total Marks of Every subject is 100 ')
//     }
//     else if(getPercentege >= 90){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = A`)
//     }
//     else if(getPercentege >= 80){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = B`)
//     }
//     else if(getPercentege >= 70){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = C`)
//     }
//     else if(getPercentege >= 60){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = D`)
//     }
//     else if(getPercentege >= 50){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = E`)
//     }
//     else if(getPercentege <= 40){
//         console.log(`Obtained Marks = ${ObtainedMarks}`)
//         console.log(`Total Marks = 500`)
//         console.log(`Your Percentege = ${getPercentege}%`)
//         console.log(`Your Grade = F`)
//     }else{
//         console.log('Enter a valid value!')
//     }

// }

// var Physics =+ prompt('Your Physics Marks?')
// var Chemistry =+ prompt('Your Chemistry Marks?')
// var Biology =+ prompt('Your Biology Marks?')
// var Math =+ prompt('Your Math Marks?')
// var Computer =+ prompt('Your Computer Marks?')
// gradeAndPercentege(Physics,Chemistry,Biology,Math,Computer)

// ====================================================================================================


// . Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// function employeeSalary(salary){

//     var result = salary
//     var calculate  = result 

// }
// var userData =+ prompt('Enter Your Salary')
// employeeSalary(userData)



// ====================================================================================================

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

function countBill(units){

    var result = units 
    
    if(result < 50  ){
        var unitsCount = result * 0.50 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 0.50`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result < 100  ){
        var unitsCount = result * 0.70 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 0.70`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result < 200  ){
        var unitsCount = result * 1.20 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 1.20`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
    else if(result > 200  ){
        var unitsCount = result * 1.50 
        var totalBill = 20/100 + unitsCount
        // console.log(tex)
        // console.log(unitsCount)
      console.log(`Price of One Unit = 1.50`)
      console.log(`Your Used Units = ${result}`)
      console.log(`additional surcharge = 20%`)
      console.log(`Your Bill = ${totalBill} Rs`)
    }
 else{
    console.log('Enter a valid value')
 }



}
var units =+ prompt('Enter Units To generate Bill')
countBill(units)