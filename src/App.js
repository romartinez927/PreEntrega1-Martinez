import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import CardsContainer from './componentes/CardsContainer/CardsContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos!"/>
      <CardsContainer />
    </div>
  );
}

export default App;
