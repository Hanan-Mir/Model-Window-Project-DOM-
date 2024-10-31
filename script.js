'use strict';
let modalBtn=document.querySelectorAll('.show-modal');
let modelWindow=document.querySelector('.modal');
let overlayWindow=document.querySelector('.overlay');
let btnClose=document.querySelector('.close-modal');
//function for opening model
let openModel=function(){
    modelWindow.classList.remove('hidden');
    overlayWindow.classList.remove('hidden');
}
let closeModel=function(){
    modelWindow.classList.add('hidden');
    overlayWindow.classList.add('hidden');
}
//function for closing model
for(let i=0;i<modalBtn.length;i++){
    modalBtn[i].addEventListener('click',openModel)
}
btnClose.addEventListener('click',closeModel)
document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !modelWindow.classList.contains('hidden'))
 closeModel();


})