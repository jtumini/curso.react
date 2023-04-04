import { BiCart } from "react-icons/bi"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './CartWidget.scss'


const CartWidget = () => {

    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <button className={`btn btn-success cart-Widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <Link to="/Cart" className={`cart-Widget ${cart.length > 0 ? 'cart-widget-active' : ''}`} >
                <BiCart />
                <span>{totalCantidad()}</span>
            </Link>
        </button>
    )
}


export default CartWidget