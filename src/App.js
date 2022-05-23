import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import Cart from './pages/cart/Cart';
import Checkout from './components/Checkout/checkout';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (    
    <>
      <NavBar/>      
      <Routes>
        <Route path='/' element={<ItemListContainer/> } />
        <Route path='/cart' element={<Cart/> } />
        <Route path='/checkout' element={<Checkout/> } />
        <Route path='/category/:categoryId' element={<ItemListContainer/> } />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>       
    </>    
  );  
}

export default App;
