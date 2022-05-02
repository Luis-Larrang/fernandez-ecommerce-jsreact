import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


function App() {
  return (    
     <><NavBar/>           
        <ItemDetailContainer/>
      </>    
  );  
}
// <ItemListContainer greeting="Bienvenid@ a Mercado X!" />

/*
Te felicito Luis por esta entrega. En cuanto al Spinner podés hacer un estado que sea por ejemplo isLoading y que esté en true cuando estén cargando los productos por ejemplo y después pasa a false. Siguiendo esa lógica el Spinner se va a renderizar en el componente si isLoading es true -> { isLoading && <Spinner / > } sería en este ejemplo que te hice para que puedas armar algo. Espero tu próximo trabajo :) Muchas gracias
*/

export default App;
