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

async function getProductById(idProduct) {
  let product = await fetch(`https://mr-mercado-default-rtdb.firebaseio.com/products/${idProduct}.json`)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  return product
}

async function getUserCart(idUser) {
  userCart = await fetch(`https://mr-mercado-default-rtdb.firebaseio.com/cart/${idUser}.json`)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  return userCart
}

function addNewProduct(product) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(product);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mr-mercado-default-rtdb.firebaseio.com/products.json", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

function addToCart(cart) {
  let newItemCart = `{"${JSON.parse(sessionStorage.getItem("sessionCart")).idUser}": ${JSON.stringify(cart)}}`

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = newItemCart;

  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mr-mercado-default-rtdb.firebaseio.com/cart.json", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

function editStockProdcut(idProduct, newCant) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (newCant !== 0) {
    var raw = `{"qty_stock":${newCant}}`;
  } else {
    var raw = `{"qty_stock":0,"state":false}`;
  }

  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`https://mr-mercado-default-rtdb.firebaseio.com/products/${idProduct}.json`, requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

function createOrder(cart){
  let newOrder = `{"cartInfo":${JSON.stringify(cart)}, "userInfo": {"user-id": "${JSON.parse(sessionStorage.getItem("sessionCart")).idUser}", "user":"${JSON.parse(sessionStorage.getItem("sessionCart")).user}"}}`
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = newOrder;

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mr-mercado-default-rtdb.firebaseio.com/orders.json", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

function delCartUser(idCartUser){
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch(`https://mr-mercado-default-rtdb.firebaseio.com/cart/${idCartUser}.json`, requestOptions)
    .then(response => response.text())
    .then(result => {
      alert("Compra realziada con exito")
      console.log(result)
    })
    .catch(error => console.log('error', error));
}