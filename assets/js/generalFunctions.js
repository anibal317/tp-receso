function createProductsRow(itemsTable) {
    tbody.innerHTML = ""
    let insertData = (itemsTable, index) => {
        let tr = document.createElement("tr");
        let tdPrice = document.createElement("td");
        let tdStcok = document.createElement("td");
        let tdimg = document.createElement("td");
        let img = document.createElement("img");
        let tdacciones = document.createElement("td");
        let th = document.createElement("th");
        let buyProduct = document.createElement("i");

        th.setAttribute("scope", "row");
        th.innerHTML = itemsTable[1].description + " - " + itemsTable[1].brand;
        tr.appendChild(th);

        tdPrice.innerHTML = "$" + itemsTable[1].price;
        tr.appendChild(tdPrice);

        tdStcok.innerHTML = itemsTable[1].qty_stock;
        tr.appendChild(tdStcok);


        img.setAttribute("src", itemsTable[1].img)
        img.setAttribute("class", "imgProducts")

        tdimg.appendChild(img)
        tr.appendChild(tdimg)


        buyProduct.setAttribute("class", "fab fa-opencart");
        buyProduct.setAttribute("data-action", "buy");
        buyProduct.setAttribute("data-qty", itemsTable[1].qty_stock);
        buyProduct.setAttribute("data-internalid", itemsTable[0]);
        buyProduct.setAttribute("data-unitprice", itemsTable[1].price);

        tdacciones.appendChild(buyProduct);

        tdacciones.setAttribute("class", "acciones");
        tr.appendChild(tdacciones);

        tbody.appendChild(tr);
        crearListeners();
    };

    for (let i = 0; i < itemsTable.length; i++) {
        insertData(itemsTable[i], i);
    }
}

function createProductsCartRow(itemsCrtTable) {
    tbodyCart.innerHTML = ""
    let insertData = (itemsCrtTable, index) => {
        let tr = document.createElement("tr");
        let tdPrice = document.createElement("td");
        let tdStcok = document.createElement("td");
        let th = document.createElement("th");

        tdStcok.innerHTML = itemsCrtTable.qty;
        tr.appendChild(tdStcok);



        getProductById(itemsCrtTable.id).then(res => {
            th.setAttribute("scope", "row");
            th.innerHTML = res.description + " - " + res.brand;
            tr.appendChild(th);
        })

        tdPrice.innerHTML = "$" + (itemsCrtTable.qty * itemsCrtTable.unitPrice);
        tr.appendChild(tdPrice);

        tbodyCart.appendChild(tr);
        crearListeners();
    };

    for (let i = 0; i < itemsCrtTable.length; i++) {
        insertData(itemsCrtTable[i], i);
    }
}

function crearListeners() {
    for (let i = 0; i < buyProduct.length; i++) {
        buyProduct[i].removeEventListener("click", actions)
        buyProduct[i].addEventListener("click", actions);
    };
}

function actions(e) {
    jQuery.noConflict();
    switch (e.target.dataset.action) {
        case "buy":
            let carrito = JSON.parse(sessionStorage.getItem("cartItems")) || []

            let newProduct = {
                id: e.target.dataset.internalid,
                qty: 1,
                unitPrice: parseFloat(e.target.dataset.unitprice)
            }

            if (carrito.length != 0) {
                carrito.find(item => {
                    if (item.id === e.target.dataset.internalid) {
                        item.qty++
                        sessionStorage.setItem("cartItems", JSON.stringify(carrito))
                    } else {
                        carrito.push(newProduct)
                    }
                })
            } else {
                carrito.push(newProduct)
            }
            createProductsCartRow(carrito)
            calculateCartPrice(carrito)
            addToCart(carrito)
            break;
        default:
            break;
    }
}

function calculateCartPrice(arrProductos) {
    let price = 0;
    for (item in arrProductos) {
        price += arrProductos[item].qty * arrProductos[item].unitPrice
    }
    subTotal.innerText = "El precio del carrito es: $" + price
}

async function createSession(txtUser, txtPass) {
    let userInfo = await getUsers().then(result => Object.entries(result).filter(user => user[1].user === txtUser.value && user[1].pass === txtPass.value))

    if (userInfo.length !== 0) {
        let idUser = userInfo[0][0]
        let {
            img,
            isAdmin,
            mail,
            pass,
            user
        } = userInfo[0][1]
        let userData = {
            idUser,
            img,
            isAdmin,
            mail,
            pass: MD5(pass),
            user
        }
        sessionStorage.setItem("sessionCart", JSON.stringify(userData))
        return redirect(routes.products)
    } else {
        return alert("usuario equivocado")
    }
}

function redirect(page) {
    window.location.replace(page)
}

function logout() {
    sessionStorage.removeItem("sessionCart");
    redirect(routes.home)
}