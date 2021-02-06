function getAllProducts(){
    fetch(`${urlBase}/products.json`)
  .then(response => response.json())
  .then(result => createRow(Object.entries(result)))
  .catch(error => console.log('error', error));
}