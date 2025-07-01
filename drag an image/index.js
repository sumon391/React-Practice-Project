
let drag=document.getElementById("dragitem");
let drop=document.getElementById("dropitem");
drag.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text/plain",e.target.src);
})
drop.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
drop.addEventListener("drop",(e)=>{
    e.preventDefault();
    let imgurl=e.dataTransfer.getData("text/plain");
    drop.innerHTML=`<img src="${imgurl}`;
})