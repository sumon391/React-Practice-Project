let log_form = document.getElementById("login_form");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");

//handling login form
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let username = user.value.trim();
    let index=users.findIndex(value=>value.username==username);
    let email=users[index].email;
    console.log(email);
    let password = pass.value;
    if(users.find(value=>(value.username==username || value.email==email) && value.password==password))){
        let currentuser=username;
        localStorage.setItem("current",currentuser);
        window.location.href='http://127.0.0.1:5500/content.html';
    }
    else {
        alert('Invalid User');
    }
})