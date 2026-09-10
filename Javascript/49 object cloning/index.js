let src={
    age:12,
    ht:5,
    wt:40


}
let dest={};
for(let key in  src){
    let newkey =key;
    let newvalue=src[key];
    //insert new key and value in dest and create a clone
     dest[newkey]=newvalue
    

}
console.log("src:",src);
console.log("dest:",dest);
// let dest = Object.assign({},src);
// src.age=90;
// console.log("src:",src);
// console.log("dest:",dest);
// let dest={...src};
// console.log(dest);
// console .log(obj)
// obj.color="white";
// console .log(obj)