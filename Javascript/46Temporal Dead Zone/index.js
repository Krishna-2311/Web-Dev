// GLOBAL SCOPE
// var age= 15;
// // FUNCTION SCOPE
// function sayhello(){
//     var fullName="earth";
//     console.log("hi",name);
// }
// sayhello();
//  console.log("hi",fullName);
//  BLOCK SCOPE
// {
//     var age=25;
// }
//  console.log(age);
// niche error ayega kuyki let/const block scope hota hai
//  {
//     let age=25;

//  }
//  console.log(age);
// TEMPORAL DEAD ZONE
// line 23 to 36 take ham marks ki value access nahi kar sakte islye ye part ko temporal  dead zone kahete hain 
console.log(marks);
console.log("hello");
console.log("hi");
const marks=100;
console.log(marks);