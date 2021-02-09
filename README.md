Descripción del proyecto:

1* La base esta realziada en firebase. 
      La información esta dividida en:
      
          * cart: tiene la infromación de las compras cada clave corresponde a un usuario que tiene un array de objetos con la info de los productos
                    "-MSpMxsuMdt-5H_cEmDk": [
                                              {
                                                "id": "-MQZlT0392tXy593g4oU",
                                                "qty": 4,
                                                "unitPrice": 250
                                              },
                                              {
                                                "id": "-MRDOLsi12Uy2yppp0on",
                                                "qty": 1,
                                                "unitPrice": 56.2
                                              }
                                           ],
                  "-MT5o-9weAZ3LLQ6Vte5": {
                                            "id": "MQZlAOQNTWK5u34h1aM",
                                            "qty": 1,
                                            "unitPrice": 300
                                          }

          * orders: tiene la información de la compra confirmada, es un objet con un id autogenerado por firebase, donde tiene dos elementos. El primero es un array con los productos del carrito y el segundo es un objeto con la info del usuario que hizo la compra.
                     "-MT1AqkkinXVH9FthqJS": {
                                            "cartInfo": [
                                                          {
                                                            "id": "-MQZlUjrWn694IzwMtXn",
                                                            "qty": 1,
                                                            "unitPrice": 34
                                                          }
                                                        ],
                                            "userInfo": {
                                                           "user": "jsardon",
                                                          "user-id": "-MQsRvedXD5hDs6tJdod"
                                                        }
                                            }
          *products: tiene la información de los productos. 
            
                         "-MQZlT0392tXy593g4oU": {
                                                    "brand": "GRANIX",
                                                    "description": "ACEITE GIRASOL ALTO OLEICO GRANIX 750ml",
                                                    "id": "3",
                                                    "img": "https://image.flaticon.com/icons/png/512/1370/1370329.png",
                                                    "price": 250,
                                                    "qty_stock": 22,
                                                    "state": true
                                                },
          *users: tiene la información de los usuarios
                           "-MQsRvedXD5hDs6tJdod": {
                                                       "img": "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
                                                               "isAdmin": true,
                                                               "mail": "anibal317@hotmail.com",
                                                               "pass": "elpepe",
                                                               "user": "jsardon"
                                                   },
