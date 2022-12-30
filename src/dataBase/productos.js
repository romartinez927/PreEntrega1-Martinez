const data = [
    {
        id: 1, 
        nombre: "Remera clásica", 
        precio: 1200,  
        img:"./imagenes/card1.png", 
        cantidad: 1,
        categoria: "remeras"
    },
    {
        id: 2, 
        nombre: "Top Roger", 
        precio: 1200,  
        img: "./imagenes/card2.jpeg", 
        cantidad: 1,
        categoria: "remeras"
    },
    
    {
        id: 3, 
        nombre: "Remera Gris",  
        precio: 1500,  
        img: "./imagenes/card3.jpeg", 
        cantidad: 1,
        categoria: "remeras"
    },
    {
        id: 4, 
        nombre: "Short Delfi",
        precio: 2500,  
        img: "./imagenes/card4.jpeg", 
        cantidad: 1,
        categoria: "shorts"
    },
    {
        id: 5, 
        nombre: "Short Calvin",  
        precio: 2300, 
        img: "./imagenes/card5.jpeg", 
        cantidad: 1,
        categoria: "shorts"
    },
    {
        id: 6, 
        nombre: "Remera V",  
        precio: 1200,  
        img:"./imagenes/card6.png", 
        cantidad: 1,
        categoria: "remeras"
    },
    {
        id: 7, 
        nombre: "Short Negro", 
        precio: 2100,  
        img: "./imagenes/card7.png", 
        cantidad: 1,
        categoria: "shorts"
    },
    {
        id: 8, 
        nombre: "Short Azul", 
        precio: 2100, 
        stock: 100, 
        img: "./imagenes/card8.jpeg", 
        cantidad: 1,
        categoria: "shorts"
    },       
    {
        id: 9, 
        nombre: "Campera Negra", 
        precio: 2500, 
        img: "./imagenes/card9.jpeg", 
        cantidad: 1,
        categoria: "camperas"
    },    
    {
        id: 10,
        nombre: "Buzo Gris", 
        precio: 1300, 
        img: "./imagenes/card10.jpeg", 
        cantidad: 1,
        categoria: "camperas"
    },   
    {
        id: 11,
        nombre: "Buzo Blanco", 
        precio: 2200,  
        img: "./imagenes/card11.jpeg", 
        cantidad: 1,
        categoria: "camperas"
    },
    {
        id: 12,
        nombre: "Jogging rústico",
        precio: 1500, 
        img: "./imagenes/card13.jpeg", 
        cantidad: 1,
        categoria: "pantalones"
    },
    {
        id: 13,
        nombre: "Pantalón Juno",
        precio: 2300, 
        img: "./imagenes/card14.jpeg", 
        cantidad: 1,
        categoria: "pantalones"
    },
    {
        id: 14,
        nombre: "Jean Celeste",
        precio: 2300, 
        img: "./imagenes/card15.jpeg", 
        cantidad: 1,
        categoria: "pantalones"
    },
    {
        id: 15,
        nombre: "Jean Negro",
        precio: 2300,  
        img: "./imagenes/card16.jpeg", 
        cantidad: 1,
        categoria: "pantalones"
    },
    {
        id: 16,
        nombre: "Jean Azul",
        precio: 2300,  
        img: "./imagenes/card17.jpeg", 
        cantidad: 1,
        categoria: "pantalones"
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {

        let error = false

        setTimeout(() => {
            if (error) reject("Usuario no autorizado")
            else resolve(data);
        }, 3000);
    });
};

export default obtenerProductos;