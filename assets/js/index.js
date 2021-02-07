window.addEventListener("load", () => {
    if (sessionStorage.getItem("sessionCart")) {
        lnkLogin.classList.toggle("hide")
        if (!JSON.parse(sessionStorage.getItem("sessionCart")).isAdmin) {
            addProduct.classList.toggle("hide")
        }
    }else{
        addProduct.classList.toggle("hide")
        lnkLogout.classList.toggle("hide")
    }
})

lnkLogout.addEventListener("click",logout)