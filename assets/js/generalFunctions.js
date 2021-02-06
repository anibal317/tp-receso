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

        tdPrice.innerHTML = "$"+itemsTable[1].price;
        tr.appendChild(tdPrice);

        tdStcok.innerHTML = itemsTable[1].qty_stock;
        tr.appendChild(tdStcok);


        img.setAttribute("src",itemsTable[1].img)
        img.setAttribute("class","imgProducts")

        tdimg.appendChild(img)
        tr.appendChild(tdimg)


        buyProduct.setAttribute("class", "fab fa-opencart");
        buyProduct.setAttribute("data-action", "buy");
        buyProduct.setAttribute("data-id", index);
        buyProduct.setAttribute("data-internalid", itemsTable[0]);

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
            console.log("comprar", e.target.dataset.internalid)
        default:
            break;
    }
}