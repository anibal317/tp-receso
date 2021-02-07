window.addEventListener("load", () => {
    if (sessionStorage.getItem("sessionCart")) {
        lnkLogin.classList.toggle("hide")
        if (!JSON.parse(sessionStorage.getItem("sessionCart")).isAdmin) {
            addProduct.classList.toggle("hide")
        }
    console.log(sessionStorage.getItem("sessionCart"))
    }else{
        addProduct.classList.toggle("hide")
        lnkLogout.classList.toggle("hide")
    }
})


// btnLogin.removeEventListener("click",login)
btnLogin.addEventListener("click", login)

function login() {
    createSession(user, pass)
}