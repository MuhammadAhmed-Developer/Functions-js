
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


// 2. Write a js program to find maximum between three numbers.

var num1 =+ prompt('Enter Number1')
var num2 =+ prompt('Enter Number2')
var num3 =+ prompt('Enter Number3')
if(num2 > num1 && num2 > num3){
   console.log(`your Number2 "${num2}" is greater then Number1 "${num1}" and Number3 "${num3}"`)
}
else if(num1 > num2 && num1 > num3){
   console.log(`Your Number1 "${num1}" is greater then Number2 "${num2}" and Number3 "${num3}"`)
   
}
else if(num3 > num1 && num3 > num2){
   console.log(`Your Number3 "${num3}" is greater then Number1 "${num1}" and Number2 "${num2}"`)
   
}
else if(num1 == num2 && num1 == num3 && num2 == num1 && num2 == num3 && num3 == num1 && num3 == num2){
   console.log(`Your Numbers "${num1}" =  "${num2}" = "${num3}"`)
   
}
else{
    console.log("Enter a valid value! Please Enter only Numbers")
}