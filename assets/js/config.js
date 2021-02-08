//Url para los fetchs
const urlBase = "https://mr-mercado-default-rtdb.firebaseio.com";


//Variables generales
let allProducts;
let productDescription;
let userCart;
let allUsers;
let imgDefault= "https://image.flaticon.com/icons/png/512/1370/1370329.png";
let carrito;

//Rutas

let routes = {
    home: "http://127.0.0.1:5500/index.html",
    login: "http://127.0.0.1:5500/sections/login.html",
    products: "http://127.0.0.1:5500/sections/products.html",
    addProducts: "http://127.0.0.1:5500/sections/addProdcuts.html",
}