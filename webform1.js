window.onload = pageload;

function pageload() {
    const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submit = document.getElementById("submit");
    submit.onclick = () =>{
        alert("Hi")
    }




}