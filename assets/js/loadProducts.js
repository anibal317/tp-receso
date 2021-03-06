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
btnFinalizarCompra.addEventListener("click", finalizarCompra)

function finalizarCompra() {
    sessionStorage.removeItem("cartItems")
    getAllProducts();
    carrito = JSON.parse(sessionStorage.getItem("cartItems"))
    delCartUser(JSON.parse(sessionStorage.getItem("sessionCart")).idUser)
    createOrder(carrito)
    tbodyCart.innerHTML=""
}