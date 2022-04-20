import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./components/ItemListContainer/ItemListContainer"
//import Counter from"./components/Counter/Counter"



function App() {
  return (    
     <><NavBar/>      
      <ItemListContainer greeting="Bienvenid@ a Mercado X!" />
      </>    
  );  
}
//<Counter />
export default App;
