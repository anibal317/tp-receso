window.addEventListener("load", () => {
    if (sessionStorage.getItem("sessionCart")) {
        lnkLogin.classList.toggle("hide")
        if (!JSON.parse(sessionStorage.getItem("sessionCart")).isAdmin) {
            addProduct.classList.toggle("hide")
        }
    }else{
        redirect(routes.login)
    }
})

btnAddProduct.addEventListener("click",ver);
loadImg.addEventListener("click",changeImg)
btnClearForm.addEventListener("click", clearImg)

function changeImg(event){
    event.preventDefault()
    frmImg.setAttribute("src",txtProductImg.value)
}
function clearImg(){
    frmImg.setAttribute("src","")
}

function ver(event){
    event.preventDefault()
    let productToAdd = {
        description: txtProductDescription.value,
        brand: txtProductBrand.value,
        price: parseFloat(intProductPrice.value),
        qty_stock: parseInt(intProductQty.value),
        state: Boolean(txtProductState.value) ,
        img: txtProductImg.value || imgDefault
    }
    addNewProduct(productToAdd)
    btnClearForm.click()
}
lnkLogout.addEventListener("click",logout)
