import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const Checkout = () => {
    const { cart,totalCompra } = useContext(CartContext)

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

    const handleSubmit =(e) =>{
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

        console.log ("Submit", values, orden)
    }

    if (cart.length === 0){
        return <Navigate to='/'/>
    }

    return (
        <div className="containter my-5" >
            <h2>Checkout</h2>
            <hr/>

        <form onSubmit={handleSubmit}>
            <input
                name= "nombre"
                onChange={handleInputChange}
                value={values.nombre}
                type={'text'}
                placeholder='Tu nombre'
                className="form-control my-2"
            />
            <input
                name= "direccion"  
                onChange={handleInputChange}
                value={values.direccion}
                type={'text'}
                placeholder='Direccion'
                className="form-control my-2"
            />
            <input
                name= "email"
                onChange={handleInputChange}
                value={values.email}
                type={'text'}
                placeholder='Tu mail'
                className="form-control my-2"
            />

            <button className="btn btn-primary" type="submit">Enviar</button>
        </form>

        </div>
    )
}

export default Checkout