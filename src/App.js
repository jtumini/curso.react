
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/> 
        
        <Routes>
          <Route path='/' element= {<ItemListContainer/>} />
          <Route path='/productos/category:Id' element= {<ItemListContainer/>} />
          <Route path='/detail/itemId' element= {<ItemDetailContainer/>} />
          <Route path='/nosotros' element= {<Nosotros/>} />
          <Route path='/contacto' element= {<Contacto/>} />
          <Route path="*" element= { <Navigate to="/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
