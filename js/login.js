let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#signIn")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click",function (e) {
    e.preventDefault()

    if (email.value ==="" || password.value ==="") {
        alert("please fill data")
    }else{
       if (getEmail &&getEmail.trim() === email.value && getPassword &&getPassword.trim()===password.value) {
        setTimeout( () => {
            window.location = "index.html"
        },1500)
       }else{
        alert("Please check your email or password")
       }
    }
})