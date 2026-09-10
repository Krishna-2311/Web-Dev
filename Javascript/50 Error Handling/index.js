//compile time error
// try{
//     console.log("your code start here");
//     // error->refrence error
//     console.log(x);
//     console .log("try block  end here")
// }
// catch(err){
//     console.log("find the error")
//     console.log("your error is here:",err)
// }
// finally{
//     console .log("i will run always as i am finally block")
// }
// let create a custom error
// try{
//     console.log(x);
// }
// catch(err){
//     throw new Error("bhai pehle variable declare karlo")
// }
let errorcode=100;
if(errorcode==100){
    throw  new Error ("invalid json")
}
