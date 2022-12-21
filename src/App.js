import './App.css';
import Card from "./componentes/Card/Card";
import Button from "./componentes/Button/Button";
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos!"/>
    </div>
  );
}

export default App;
