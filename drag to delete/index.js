
const items = document.querySelectorAll(".item");
const trashBin = document.getElementById("trashBin");
let restore=document.getElementById("restore");
// Store dragged element's id
let store=new Array();
let dragged_element = null;

items.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        //dragged_element = e.target;
    });
});

trashBin.addEventListener("dragover", (e) => {
    e.preventDefault(); // Must allow drop
    trashBin.classList.add("hovered");
});

trashBin.addEventListener("dragleave", () => {
    trashBin.classList.remove("hovered");
});

trashBin.addEventListener("drop", (e) => {
    e.preventDefault();
    trashBin.classList.remove("hovered");

      const itemId = e.dataTransfer.getData("text/plain");
      const item = document.getElementById(itemId);
      store.push(item);
      if (item) {
        item.remove(); // Delete from DOM
      }
});
restore.addEventListener("click",()=>{
    let item=document.querySelector(".items");
    for(let i=0;i<store.length;i++)
        item.appendChild(store[i]);
})
