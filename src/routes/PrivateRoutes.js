
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Navbar } from '../components/Navbar/Navbar';
import Contacto from '../components/Contacto/Contacto';
import Nosotros from '../components/Nosotros/Nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from "../components/Checkout/Checkout";

const PrivateRoutes = () => {
    return (
        <>
                <div className="App">
                    <Navbar/> 
                    <Routes>
                        <Route path='/' element= {<ItemListContainer/>} />
                        <Route path='/productos/:categoryId' element= {<ItemListContainer/>} />
                        <Route path='/detail/:itemId' element= {<ItemDetailContainer/>} />
                        <Route path='/Cart' element= {<Cart/>} />
                        <Route path='/checkout' element=  {<Checkout/>} />
                        <Route path='/nosotros' element= {<Nosotros/>} />
                        <Route path='/contacto' element= {<Contacto/>} />
                        <Route path="*" element= { <Navigate to="/"/>} />
                    </Routes>
                </div>  
        </>
    )
}

export default PrivateRoutes