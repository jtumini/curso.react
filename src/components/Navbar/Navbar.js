import './Navbar.scss'
import logo from './logo.jpg'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo'/>

                <nav className="navbar">

                <ButtonGroup aria-label="Basic example" size="lg" >
                    <Button variant="success">Cesped</Button>
                    <Button variant="success">Cesped Sintetico</Button>
                    <Button variant="success">Sala</Button>
                </ButtonGroup>

                    {/* <a href="#" className="navbar__link">Cesped</a>
                    <a href="#" className="navbar__link">Cesped Sintetico</a>
                    <a href="#" className="navbar__link">Sala</a> */}
                </nav>

            </div>
        </header>
    )
}