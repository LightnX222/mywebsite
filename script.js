"use strict";

//YakuzaDoor Program
// let $name = prompt("Who's there?").toLowerCase() 
// if($name=='boss'){
//     alert("Welcome, boss!")
// }
// else if($name==''|| $name==null){
//     alert("What did you say?")
// }
// else{
//     alert("Hey! I don't know you!")
// }


//Filter and map pet names
// function moviecheck(string){
//     return ['Mike Hat','Thor','Huntsman'].includes(string)
// }

// function toUpper(string){
//     return string.toUpperCase()
// }



// // //What are your cats called?
// let pets = ['Mike Hat','Henry','Thor','Huntsman','Bowser','Buffy']

// console.log(pets)
// console.log(pets.filter(moviecheck))
// console.log(pets.map(toUpper))

// let cats = ['Pete','Tom','My Cat'];
// let res = '';
// for(let i=0; i<cats.length; i++)
// {
//     if(i==cats.length-1){
//         res += `and ${cats[i]}.`;
//     }
//     else{
//         res += `${cats[i]}, `
//     }
// }
// console.log(`My cats are ${res}`)


//Fizzbuzz program
// function fizzbuzz(num){
//     if(num%3==0){
//         if(num%5==0){
//             return 'FizzBuzz';
//         }
//         else{
//             return 'Fizz';
//         }
//     }
//     else if(num%5==0){
//         if(num%3==0){
//             return 'FizzBuzz';
//         }
//         else{
//             return 'Buzz';
//         }
//     }
//     else{
//         return num;
//     }
// }

// let x = Number(prompt("Enter a number: "));
// for(let i=1; i<=x; i++){
//     console.log(fizzbuzz(i));
// }