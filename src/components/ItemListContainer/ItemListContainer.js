import { useContext, useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import  ItemList  from '../ItemList/ItemList' 
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config.js'


const ItemListContainer = () => {



    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos") 
        const q = categoryId
                    ? query(productosRef, where("category","==",categoryId))
                    : productosRef

        getDocs(q)
            .then ((res) => {
                const docs = res.docs.map((doc) =>{
                    return {...doc.data(), id: doc.id}
                })
                setProductos(docs)
            })
            .finally (() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="contenedor">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : 
                    <div>
                        {console.log(categoryId)}
                        <ItemList items={productos}/>
                    </div>
            }
            
        </div>
    )
}

export default ItemListContainer