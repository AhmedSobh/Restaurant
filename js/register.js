let firistName = document.querySelector("#firistName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let registerBtn = document.querySelector("#signUp")

registerBtn.addEventListener("click",function (e) {
    e.preventDefault()
    if (firistName.value === "" || lastName.value ==="" || email.value ==="" || password.value ==="") {
        alert("please fill data")
    }else{
        localStorage.setItem("firistName",firistName.value)
        localStorage.setItem("lastName",lastName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location = "login.html"
        },1500)
    }
})
