import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import { BiMailSend } from 'react-icons/bi'
// import { useInRouterContext } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'



const LoginScreen = () => {

        const { register } = useContext (LoginContext)

        const [values, setValues] = useState({
            email: '',
            password: '',
        })

        const handleInputChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()  
            register(values)
        }

        return (
            <div className='login-screen'>
                <div  className='login'>
                    <h2> Registrate </h2>
                    <hr/>

                <form onSubmit={handleSubmit} >
                    <input 
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='tu email'
                        name='email'
                    />
                    <input 
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='password'
                        name='password'
                    />
                    <button className='btn btn-primary' type='submit'>Crear usuario</button>
                    <Link to="/login"> Ya estoy registrado, logearme</Link>
                </form>

                </div>
            </div>
        )
}

export default LoginScreen