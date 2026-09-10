// let obj = {
//     Name: "love babbar",
//     age:25,
//     height:6,
//     greet:function(){
//         console.log("kaise ho saare");
//     }


// };
// for(let key in obj){
//     console .log(key," ",obj[key]);
// }
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// // array constructor
// let brr = new Array('love',1,'true');
// brr.push('babbar');
// // brr.pop();
// brr.shift();
// brr.push(40);
// brr.push(20);
// brr.push(80);
// brr.push(60);
// console.log(brr.slice(2,5));
// brr.splice(1,2,'Kunal');
// brr.unshift('love babbar');
// console.log(brr);

// console.log(typeof(brr));
// let arr = [10,20,30,41,11,50,87,90];
//  let evenArray=arr.filter((number)=>{
//     return number%2!=0;
// })
// console.log(evenArray);
// arr.map((number,index)=>{
//     console.log(number+1,index);

// })
//  let ansArray=arr.map((number)=>{
//     return number*number;
// });
// console.log(ansArray);
// let arr=[1,'kunal','babbar',null];
// let ans= arr.filter((value)=>{
//     if(typeof (value)=='string'){
//         return true;

//     }
//     else{return false};
// })
// console.log(ans);
// let arr=[10,20,30,40];
// let ans= arr.reduce((acc,curr)=>{
//     return(acc+curr)
// },0);
// console.log(ans);
// let arr=[9,7,4,3,6];
// arr.sort();
// console.log(arr);
// console.log( arr.indexOf(7))
// let arr=[10,20,30,50];
// let length= arr.length;
// console.log("length:",length);
// //traditional loops
// for(let index=0;index<length; index++){
//     console.log(arr[index]);
// }
// arr.forEach((value ,index)=>{
//     console.log("number:",value, "index:",index,);
// })
// let arr= [10,20,30,40];
// for(let  value of arr){
//     console.log(value);
// }
let fullname="babbar";
for(let  val of fullname){
console.log(val);
}
