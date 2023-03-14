import './Navbar.scss'
import logo from './logo.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CartWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar" >
                    <ButtonGroup aria-label="Basic example" size="lg" >
                        <Link to="/contacto">
                            <Button variant="success">Contacto</Button>
                        </Link>
                        <Link to="/nosotros">
                            <Button variant="success">Nosotros</Button>
                        </Link>
                        <Link to="/productos">
                            <Button variant="success">Productos</Button>
                        </Link>
                    </ButtonGroup>
                </nav>
                {<CartWidget/>}
                
            </div>
        </header>
    )
}