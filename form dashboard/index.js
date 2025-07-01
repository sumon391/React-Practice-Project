
let form_element = document.getElementById("myform");
let user_element = document.getElementById("user");
let email_element = document.getElementById("email");
let feed_element = document.getElementById("feedback");

let name_node = document.createElement("p");
let feed_node = document.createElement("p");
let counter_node=document.createElement("p");
user_element.addEventListener("focus", () => {
  name_node.setAttribute("id", "id1");
  feed_node.setAttribute("id", "id2");
  counter_node.setAttribute("id","id3");
})
feed_element.addEventListener("focus", () => {
  form_element.after(counter_node);
  form_element.after(feed_node);
  form_element.after(name_node);
})
feed_element.addEventListener("input", () => {
  counter_node.innerText=`total character : ${feed_element.value.trim().length}`;
  feed_node.innerText = feed_element.value;
  name_node.innerText = `${user_element.value} is typing : `;
})

let user_name, email;
form_element.addEventListener("submit", (e) => {
  e.preventDefault();
  user_name = user_element.value;
  email = email_element.value;

  // creating child element
  let child = document.createElement("li");
  let para = document.createElement("p");
  para.innerText = `name : ${user_name} and feedback : ${feed_element.value} 
  he has typed ${feed_element.value.length} letters`
  let button = document.createElement("button");
  button.innerHTML = "<button>delete</button>";
  button.style.backgroundColor = 'red';

  // deleting the child element
  button.addEventListener("click", () => {
    let ok = confirm('Do you really want to delete this ');
    if (ok)
      document.getElementById("ul").removeChild(child);
  })
  child.append(para);
  child.append(button);
  //adding the child element to the list
  if (user_name && email && feed_element.value)
    document.getElementById("ul").append(child);
  user_element.value = "";
  email_element.value = "";
  feed_element.value = "";
  document.getElementById("id2").remove();
  document.getElementById("id1").remove();
})

document.getElementById("theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

