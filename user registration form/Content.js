let data=localStorage.getItem("current");
let h1=document.getElementById("h1");
h1.innerText=`Welcome ${data} to the book store `;
h1.style.color='green';

let thriller=document.getElementById("thriller");
let comedy=document.getElementById("comedy");
let horror=document.getElementById("horror");
let religious=document.getElementById("religious");

thriller.addEventListener("click",(e)=>{
    e.preventDefault();
    
})