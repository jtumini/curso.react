
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import { Loginprovider } from './context/LoginContext';
import AppRouter from './routes/AppRouter';


function App() {

  return (
    <Loginprovider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </Loginprovider>
  );
}
export default App;
