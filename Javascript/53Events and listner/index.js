
// function changeText(event){
//     console.log(event);
//     let fpara= document.getElementById('fpara');
// fpara.textContent="hello babbar"
// }
//    let fpara= document.getElementById('fpara');
//    fpara.addEventListener('click',changeText);
// //    fpara.removeEventListener('click',changeText);
//  let anchorElement= document.getElementById('fanchor')
//  anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent="Click ho gaya Bhai"
//  });
function alertpara(event){
    alert ("You have Clicked on para:" + event.target.textcontent);

}
// let paras= document.querySelectorAll('p');
// for(let i=-0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         alert("you have click on para:"+(i+1))
//     })
// }
let mydiv = document .getElementById('wrapper');
document.addEventListener('click',alertpara);