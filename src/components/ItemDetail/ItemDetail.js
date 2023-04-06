import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import LowStockMsg from "./LowStockMsg"



const ItemDetail = ({item}) => {
    const { agregarAlCarrito , isInCart } = useContext(CartContext)
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }
        agregarAlCarrito (newItem)
    }


    if(item.stock === 0){
        return(
            <div className="container my-5">
            <h2>{item.name}</h2>
            <img className="item-img" src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <strong>No hay stock de este producto</strong>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>

            </div>
        )
    }
    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img className="item-img" src={item.img} alt={item.name}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            { item.stock <= 5 && <LowStockMsg stock={item.stock} /> }  

            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success"> terminar mi compra </Link>
                :   <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            
            } 

            <button onClick={handleVolver} className="btn btn-primary mx-2 ">Volver</button>
        </div>
    )
}

export default ItemDetail