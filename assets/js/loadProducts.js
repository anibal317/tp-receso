window.addEventListener("load", () => {
    if (sessionStorage.getItem("sessionCart")) {
        lnkLogin.classList.toggle("hide")
        getAllProducts();
        if (!JSON.parse(sessionStorage.getItem("sessionCart")).isAdmin) {
            addProduct.classList.toggle("hide")
        }
    } else {
        redirect(routes.login)
    }
})

lnkLogout.addEventListener("click",logout)