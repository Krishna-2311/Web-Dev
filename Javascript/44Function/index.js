// //functio definition
// function sayMyname(){
//     console.log('love babbar');

// }
// //function call-function use
// // sayMyname()
// function countingnumber(){
//     for(let i=0; i<100; i++){
//         console.log(i);
//     }
// };
// countingnumber();
// function printingnumber(num){
//     console.log("Printing number:",num)
// }
// // printingnumber(5);
// function average(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log("Average:", avg);
// }
// average(3,11);
// RETURN
// function getSum(a,b,c){
//     let sum=a+c+b;
//     return sum;
// }
// let ans = getSum(3,5,7);
// console.log(ans);
// function Getmyname(firstname,lastname){
//     let fullname=firstname+" "+lastname;
//     return fullname;
// }
// let Name=Getmyname("love","babbar")
// console.log(Name);
// NEW WAY TO WRITE FUNCTION
function multiplication(a,b){
    return a*b;
}
console.log(multiplication(4,5));


let multi=function(a,b){
    return a*b;
}
let ans= multi(2,20);
console.log(ans);

let exp=function (x,y){
    return x**y;
}
let pow=exp(2,10);
console .log(pow);