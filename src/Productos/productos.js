const productosDeRopa = [
    {
        "id": 1, 
        "nombre": "Remera clásica", 
        "precio": 1200,  
        "img":"/imagenes/card1.png", 
        "categoria": "remeras",
        "stock": 5
    },
    {
        "id": 2, 
        "nombre": "Top Roger", 
        "precio": 1200,  
        "img": "/imagenes/card2.jpeg", 
        "stock": 8,
        "categoria": "remeras"
    },
    
    {
        "id": 3, 
        "nombre": "Remera Gris",  
        "precio": 1500,  
        "img": "/imagenes/card3.jpeg", 
        "stock": 5,
        "categoria": "remeras"
    },
    {
        "id": 4, 
        "nombre": "Short Delfi",
        "precio": 2500,  
        "img": "/imagenes/card4.jpeg", 
        "stock": 9,
        "categoria": "shorts"
    },
    {
        "id": 5, 
        "nombre": "Short Calvin",  
        "precio": 2300, 
        "img": "/imagenes/card5.jpeg", 
        "stock": 4,
        "categoria": "shorts"
    },
    {
        "id": 6, 
        "nombre": "Remera V",  
        "precio": 1200,  
        "img":"/imagenes/card6.png", 
        "stock": 5,
        "categoria": "remeras"
    },
    {
        "id": 7, 
        "nombre": "Short Negro", 
        "precio": 2100,  
        "img": "/imagenes/card7.png", 
        "stock": 9,
        "categoria": "shorts"
    },
    {
        "id": 8, 
        "nombre": "Short Azul", 
        "precio": 2100, 
        "stock": 100, 
        "img": "/imagenes/card8.jpeg", 
        "stock": 5,
        "categoria": "shorts"
    },       
    {
        "id": 9, 
        "nombre": "Campera Negra", 
        "precio": 2500, 
        "img": "/imagenes/card9.jpeg", 
        "stock": 4,
        "categoria": "camperas"
    },    
    {
        "id": 10,
        "nombre": "Buzo Gris", 
        "precio": 1300, 
        "img": "/imagenes/card10.jpeg", 
        "stock": 8,
        "categoria": "camperas"
    },   
    {
        "id": 11,
        "nombre": "Buzo Blanco", 
        "precio": 2200,  
        "img": "/imagenes/card11.jpeg", 
        "stock": 7,
        "categoria": "camperas"
    },
    {
        "id": 12,
        "nombre": "Jogging rústico",
        "precio": 1500, 
        "img": "/imagenes/card13.jpeg", 
        "stock": 5,
        "categoria": "pantalones"
    },
    {
        "id": 13,
        "nombre": "Pantalón Juno",
        "precio": 2300, 
        "img": "/imagenes/card14.jpeg", 
        "stock": 5,
        "categoria": "pantalones"
    },
    {
        "id": 14,
        "nombre": "Jean Celeste",
        "precio": 2300, 
        "img": "/imagenes/card15.jpeg", 
        "stock": 5,
        "categoria": "pantalones"
    },
    {
        "id": 15,
        "nombre": "Jean Negro",
        "precio": 2300,  
        "img": "/imagenes/card16.jpeg", 
        "stock": 8,
        "categoria": "pantalones"
    },
    {
        "id": 16,
        "nombre": "Jean Azul",
        "precio": 2300,  
        "img": "/imagenes/card17.jpeg", 
        "stock": 5,
        "categoria": "pantalones"
    }
]

const obtenerProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosDeRopa);
      }, 1000);
    });
  };
  
const obtenerProducto = (idUrl) => {
return new Promise((resolve) => {
    const productoRopa = productosDeRopa.find( (item) => {return item.id === Number(idUrl)})
    setTimeout(() => {
    resolve(productoRopa);
    }, 1000);
});
};

const filtrarPorCategoria = (categoryUrl) => {
    return new Promise((resolve) => {
        let productosFiltrados = productosDeRopa.filter(item => item.categoria === categoryUrl)
        setTimeout(() => {
            resolve(productosFiltrados)
        },
        2000)
    })
}

export { obtenerProducto, obtenerProductos, filtrarPorCategoria }



