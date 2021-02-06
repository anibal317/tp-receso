function createRow(itemsTable) {
    console.log(itemsTable)
    tbody.innerHTML = ""
    let insertData = (itemsTable, index) => {
        let tr = document.createElement("tr");
        let tdinicio = document.createElement("td");
        let tdanio = document.createElement("td");
        let tdfin = document.createElement("td");
        let tdacciones = document.createElement("td");
        let th = document.createElement("th");
        let deleteIcon = document.createElement("i");
        let editIcon = document.createElement("i");
        let separador = document.createTextNode(" - ");

        th.setAttribute("scope", "row");
        th.innerHTML = itemsTable.mes;
        tr.appendChild(th);

        tdanio.innerHTML = itemsTable.anio;
        tr.appendChild(tdanio);

        tdinicio.innerHTML = itemsTable.start;
        tr.appendChild(tdinicio);

        tdfin.innerHTML = itemsTable.end;
        tr.appendChild(tdfin);

        deleteIcon.setAttribute("class", "far fa-trash-alt");
        deleteIcon.setAttribute("data-action", "loadDelete");
        deleteIcon.setAttribute("data-target", "#deleteModal");
        deleteIcon.setAttribute("data-toggle", "modal");
        deleteIcon.setAttribute("data-id", index);
        deleteIcon.setAttribute("data-internalId", itemsTable.id);

        editIcon.setAttribute("class", "far fa-edit");
        editIcon.setAttribute("data-action", "loadEdit");
        editIcon.setAttribute("data-target", "#editModal");
        editIcon.setAttribute("data-toggle", "modal");
        editIcon.setAttribute("data-id", index);
        editIcon.setAttribute("data-InternalId", itemsTable.id);

        tdacciones.appendChild(deleteIcon);
        tdacciones.appendChild(separador);
        tdacciones.appendChild(editIcon);

        tdacciones.setAttribute("class", "acciones");
        tr.appendChild(tdacciones);

        tbody.appendChild(tr);
        crearListeners();
    };

    for (let i = 0; i < itemsTable.length; i++) {
        insertData(itemsTable[i], i);
    }
}