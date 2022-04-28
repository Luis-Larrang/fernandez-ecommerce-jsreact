import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./components/ItemListContainer/ItemListContainer"


function App() {
  return (    
     <><NavBar/>           
      <ItemListContainer greeting="Bienvenid@ a Mercado X!" />
      </>    
  );  
}

export default App;
