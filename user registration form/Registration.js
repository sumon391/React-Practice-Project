
let regi_form = document.getElementById("registration_form");
//for registration
let email_id=document.getElementById("email");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
//handling registration form
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email=email_id.value;
    let username = user.value.trim();
    let password = pass.value.trim();
    if(!check_email(email)){
        alert('Invalid email');
        return;
    }
    if (users.some((value) => (value.username == username && value.email==email))) {
        alert('User name exist');
        return;
    }
    users.push({ email,username, password });
    localStorage.setItem("users", JSON.stringify(users));
    user.value = "";
    pass.value = "";
    email_id.value="";
    window.location.href='http://127.0.0.1:5500/login.html';
})
function check_email(email){
    let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

