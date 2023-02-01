import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './storage/cartContext';
import CartContainer from './componentes/CartContainer/CartContainer';
import Footer from "./componentes/Footer/Footer"
import app from "./storage/firebase"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer />} />
            <Route path="/cart" element={ <CartContainer/> } />
            <Route path="/category/:categoryid" element={ <ItemListContainer />} />
            <Route path="/item/:itemid" element={ <ItemDetailContainer /> } />
          </Routes>
          <Footer />
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
