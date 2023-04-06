import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection,query,where, addDoc,writeBatch, documentId, getDocs } from "firebase/firestore"
import './Checkout.scss'


const Checkout = () => {
    const { cart,totalCompra, vaciarCarrito } = useContext(CartContext)

    const[ orderId, setOrderID] = useState(null)
    const [values, setValues] = useState ({
        nombre: '',
        direccion: '',
        email: ''
    })
    const handleInputChange = (e) =>{
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    } 

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (values.nombre.length < 3){
            alert ("Nombre invalido")
            return 
        }
        if (values.direccion.length < 3){
            alert ("Direccion invalida")
            return 
        }
        if (values.email.length < 9){
            alert ("Email invalido")
            return 
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id , price:prod.price , cantidad: prod.cantidad , nombre: prod.name})),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection (db,'orders')
        const productosRef = collection(db, 'productos')

        const itemsRef =query (productosRef, where(documentId(), 'in', cart.map(prod => prod.id) ) )

        const response = await getDocs(itemsRef)

        const outOfStock =[]

        response.docs.forEach((doc) => {
            const item = cart.find (prod => prod.id === doc.id)
            
            if (doc.data().stock >= item.cantidad){
                batch.update(doc.ref,{
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0){
            await batch.commit()

            addDoc(ordersRef, orden)
            .then ((doc) => {
                setOrderID(doc.id)
                vaciarCarrito()
            })    
        } else {
            alert("Hay items sin stock")
        }

            

    }

        if (orderId){
            return (
                <div className="container my-5">
                    <h2> Tu orden se registro con exito!</h2>
                    <hr/>
                    <p>Guarda tu numero de orden: {orderId}</p>
                    <Link className="btn btn-primary" to="/">Volver al inicio </Link>
                </div>
            )
        }

        if (cart.length === 0){
            return <Navigate to='/'/>
        }

    return (
        <div className="containter my-5 mx-3 " >
            <h2>Checkout</h2>
            <hr/>

        <form onSubmit={handleSubmit}>
            <input
                name= "nombre"
                onChange={handleInputChange}
                value={values.nombre}
                type={'text'}
                placeholder='Nombre'
                className="form-control my-2 "
            />
            <input
                name= "direccion"  
                onChange={handleInputChange}
                value={values.direccion}
                type={'text'}
                placeholder='Direccion'
                className="form-control my-2 "
            />
            <input
                name= "email"
                onChange={handleInputChange}
                value={values.email}
                type={'text'}
                placeholder='Email'
                className="form-control my-2  "
            />

            <button className="btn btn-primary " type="submit">Enviar</button>
        </form>

        </div>
    )
    
}
export default Checkout