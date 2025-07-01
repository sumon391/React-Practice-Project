
let form_element=document.getElementById("myform");
let input_element=document.getElementById("input");
let start_time;
let ok=false;
input_element.addEventListener("input",()=>{
    setTimeout(() => {
        let str=input_element.value.trim();
        let len=str.trim().split(/\s+/).length;
        let per_sec=len/30;
        console.log(len);
        console.log(per_sec);

    }, 30*1000);
},{once:true})