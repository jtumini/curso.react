import { useContext, useState } from 'react'
// import { BiMailSend } from 'react-icons/bi'
// import { useInRouterContext } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'



const LoginScreen = () => {

        const { user, tryLogin } = useContext (LoginContext)

        const [values, setValues] = useState({
            email: '',
            password: '',
        })

        const handleInputChange = (e) => {
            console.log(e.target.name)
            console.log(e.target.value)

            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()  
            tryLogin(values)
        }

        return (
            <div className='login-screen'>
                <div  className='login'>
                    <h2> Login </h2>
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
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>

                </div>
            </div>
        )
}

export default LoginScreen