window.addEventListener("load", () => {
    calculateCartPrice(JSON.parse(sessionStorage.getItem("cartItems")))
    if (sessionStorage.getItem("sessionCart")) {
        lnkLogin.classList.toggle("hide")
        getAllProducts();
        getUserCart(JSON.parse(sessionStorage.getItem("sessionCart")).idUser)
            .then(cart => {
                if (cart) {
                    sessionStorage.setItem("cartItems", JSON.stringify(cart))
                    createProductsCartRow(cart)
                }
            })
        if (!JSON.parse(sessionStorage.getItem("sessionCart")).isAdmin) {
            addProduct.classList.toggle("hide")
        }
    } else {
        redirect(routes.login)
    }

})

lnkLogout.addEventListener("click", logout)

