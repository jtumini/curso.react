import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BiTrash } from 'react-icons/bi'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

        if (cart.length === 0){
            return (
                <div className="container my-5">
                    <h2>No tienes productos agregados</h2>
                    <hr/>
                    <Link to="/" className="btn btn-primary">Ir a comprar</Link>
                </div>
            )
        }


    return(
        <div className="container my-5">
                {
                    cart.map((prod) =>(
                        <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name}/>
                        <p>Precio Unitario: ${prod.price}</p>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        <small>Cantidad: {prod.cantidad}</small> 
                        <button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger mx-2"
                        >
                            <BiTrash/>
                        </button>
                        <hr/>
                    </div>
                ))
                }
            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger ">Vaciar Carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart