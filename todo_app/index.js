
let p=document.getElementById("p");
let counter=0;
let handler=(e)=>{
    counter++;
    e.target.innerText=`clicked ${counter} times`;
}
p.addEventListener("click",handler);
button.addEventListener("click",()=>{
    p.removeEventListener("click",handler);
});