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

function addNewProduct(product) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(product);

  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mr-mercado-default-rtdb.firebaseio.com/products.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function addToCart() {
  /*
    1° Verificar si en el carrito hay datos con el usuairo logeuado
    2° Si hay datos con el usuario: 
          traigo objeto, y lo pongo en variable de session
          Agrego al carrito todo el nuevo objeto al cart/id-usuario.json
       Si no hay datos con el usuario
          Hago put directo
  */ 
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "-MSpMxsuMdt-5H_cEmDk": [
                              {
                                "id": "MQZlAOQNTWK5u34h1aM",
                                "qty": 1,
                                "unitPrice": 300
                              },
                              {
                                "id": "-MSuqHBvXyL75iB9POPY",
                                "qty": 1,
                                "unitPrice": 643
                              }
                            ]
  });

  var requestOptions = {
    method: '',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mr-mercado-default-rtdb.firebaseio.com/cart.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}