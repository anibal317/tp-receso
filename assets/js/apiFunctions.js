function getAllProducts() {
  fetch(`${urlBase}/products.json`)
    .then(response => response.json())
    .then(result => createProductsRow(Object.entries(result).filter(product => product[1].state === true)))
    .catch(error => console.log('error', error));
}

async function getUsers() {
  allUsers = await fetch(`${urlBase}/users.json`)
                   .then(response => response.json())
                   .catch(error => console.log('error', error));
  return allUsers;
}
