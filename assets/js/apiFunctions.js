function getAllProducts() {
  fetch(`${urlBase}/products.json`)
    .then(response => response.json())
    .then(result => createProductsRow(Object.entries(result).filter(product => product[1].state === true)))
    .catch(error => console.log('error', error));
}

function getUsers(){
  fetch(`${urlBase}/users.json`)
    .then(response => response.json())
    .then(result => console.log(result))
    // .then(result => createProductsRow(Object.entries(result).filter(product => product[1].state === true)))
    .catch(error => console.log('error', error));
}