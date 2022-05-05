import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from"./pages/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (    
    <>
      <NavBar/>      
      <Routes>
        <Route path='/' element={<ItemListContainer/> } />
        <Route path='/category/:categoryId' element={<ItemListContainer/> } />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>       
    </>    
  );  
}

export default App;
