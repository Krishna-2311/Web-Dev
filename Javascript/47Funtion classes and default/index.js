// class human{
//     age;/*PUBLIC*/
//     #wt=80; /*PRIVATE*/
//     ht=180;
//     constructor(NewAge,Newheight){
//       this.age=NewAge;
//       this.ht=Newheight;
//     }
//     // behaviour
//     walking(){
//         console.log("I am walking" ,this.#wt)
//     }
//     running(){
//         console .log("i am running");
//     }
//     get fetchweight(){
//         this.#wt;
//     }
//     set modifyweight(val){
//         this.#wt=val;
//     }
// }
// let obj= new human(50,190);
// console.log(obj.ht);
// // default parameter
// function sayhello(myname="rohan"){/*rohan is default parameter*/
// console.log("Name is:",myname)
// }
// sayhello("sohan")
// function sayhello(fname="Rohan", lname= fname.toUpperCase()){
//     console .log("my name is :",fname,lname)
// }
// sayhello()
// function solve(val={age:25,ht:40,wt:100}){
//     console.log("hello ji", val)
// }
// solve()
// function solve(val="rahul"){/*undefined mein defalut value hi pass hoti hain*/
//     console.log("hello ji", val)
// }
// solve(undefined)
function getage(){
    return 190;
}
function  utility(name, age=getage()){
    console .log(name, age)
}
utility("rahul")