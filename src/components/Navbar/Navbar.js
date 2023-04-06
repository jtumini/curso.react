import './Navbar.scss'
import logo from './logo.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';


export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar" >
                    <ButtonGroup aria-label="Basic example" size="lg" >
                        <Link to="/productos/Futbol11">
                            <Button  variant="success" className="mx-1">Futbol 11</Button>
                        </Link>
                        <Link to="/productos/FutbolSala">
                            <Button variant="success" className="mx-1">Futbol sala</Button>
                        </Link>
                        <Link to="/productos/Sintetico">
                            <Button variant="success" className="mx-1">Cesped Sintetico</Button>
                        </Link>
                        <Link to="/contacto">
                            <Button variant="success" className="mx-1">Contacto</Button>
                        </Link>
                        <Link to="/nosotros">
                            <Button variant="success" className="mx-1">Nosotros</Button>
                        </Link>
                        <Link to="/productos">
                            <Button variant="success" className="mx-1">Productos</Button>
                        </Link>
                    </ButtonGroup>
                </nav>

                <CartWidget/> 
                
            </div>
            <div className='login-state container'>
            <h6 className='usuario'> Bienvenido {user.email}</h6>
            <button className='btn btn-sm btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}