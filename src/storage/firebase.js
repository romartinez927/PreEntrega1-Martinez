import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, getDoc, where, query, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChQ9cNDGzvMDTG1NXLxqCdi2GFQauynuw",
  authDomain: "akira-react.firebaseapp.com",
  projectId: "akira-react",
  storageBucket: "akira-react.appspot.com",
  messagingSenderId: "323196529188",
  appId: "1:323196529188:web:ab906177bfde5671f3c6b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function exportarArray() {
  const productosDeRopa = [
    {
        "id": 1, 
        "nombre": "Remera clásica", 
        "precio": 1200,  
        "img":"/imagenes/card1.png", 
        "categoria": "remeras",
        "stock": 5,
    },
    {
        "id": 2, 
        "nombre": "Top Roger", 
        "precio": 1200,  
        "img": "/imagenes/card2.jpeg", 
        "stock": 8,
        "categoria": "remeras",
    },
    
    {
        "id": 3, 
        "nombre": "Remera Gris",  
        "precio": 1500,  
        "img": "/imagenes/card3.jpeg", 
        "stock": 5,
        "categoria": "remeras",
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
        "stock": 11,
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
  for (let productoRopa of productosDeRopa) {
    delete(productoRopa.id)
    addDoc (collection(db, "productos"), productoRopa)
  }
}

export async function obtenerProductos() {
    const productosRopa = collection(db, "productos")
    const snapshot = await getDocs(productosRopa)

    const productos = snapshot.docs.map((el) => {
      let producto = el.data()
      producto.id = el.id
      return producto})

    return productos
}

export async function obtenerProducto(idUrl) {
  const productosRopa = collection(db, "productos")
  const docRef = doc(productosRopa, idUrl)
  const snapshot = await getDoc(docRef)
  return { ...snapshot.data(), id: snapshot.id }
}

export async function filtrarPorCategoria(categoriaUrl) {
  const productosRopa = collection(db, "productos")
  const q = query(productosRopa, where("categoria", "==", categoriaUrl))
  const snapshot = await getDocs(q)
  const productos = snapshot.docs.map((elem) => {
    let producto = elem.data()
    producto.id = elem.id
    return producto
  })
  return productos
}

export async function createOrder(order) {
  const orderRef = collection( db, "order" )
  let respuesta = await addDoc( orderRef, order)
  return respuesta.id
}

export default db