import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { provider, auth } from "../firebase/config";

export const LoginContext = createContext()


export const Loginprovider = ({children}) => {

    const [user, setUser] = useState ({
        email: null,
        logged: false,
        uid: null
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err))
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider )
            .then((result)=> {
                console.log(result)
            })
    }

    const register = (values) =>{
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => {
                if (err.code === "auth/invalid-email"){
                    alert("El correo debe tener el formato: correo@dominio.com");
                    }else if (err.code === "auth/weak-password"){
                        alert("La contraseña debe tener al menos 6 caracteres")
                    } else {
                        alert(err.message);
                        }
            } ) 
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    uid: null
                })
            })
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })    
            } else{
                logout()
            }
        })
    },[])

    return (
            <LoginContext.Provider value={{
                user,
                register,
                login,
                logout,
                googleLogin
            }}>
                {children} 
            </LoginContext.Provider>
        )
}