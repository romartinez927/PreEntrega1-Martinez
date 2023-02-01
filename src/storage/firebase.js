import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChQ9cNDGzvMDTG1NXLxqCdi2GFQauynuw",
  authDomain: "akira-react.firebaseapp.com",
  projectId: "akira-react",
  storageBucket: "akira-react.appspot.com",
  messagingSenderId: "323196529188",
  appId: "1:323196529188:web:ab906177bfde5671f3c6b1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function obtenerProductos() {
    const productosRopa = collection(db, "productos")

    const snapshot = await getDocs(productosRopa)

    const productos = snapshot.docs.map((producto) => producto.data())

    console.log(productos)
//    getDocs(productosRopa).then((snapshot) =>{
//     const productos = snapshot.docs.map((producto) => producto.data())
//     console.log(productos)
//    })
}

export default db