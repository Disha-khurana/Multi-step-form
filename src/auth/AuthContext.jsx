import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[loginUser , setLoginUser] = useState(null);
    const[messageLogin , setMessageLogin] = useState("");
    const navigate = useNavigate();

    //login user
    const login = async(formData) =>{
        const res = await fetch(`http://localhost:5000/login?email=${formData.email}&password=${formData.password}`,{method:"GET"})
        if(res.ok){
            const user = await res.json();
            if(user.length>0){
                setLoginUser(user[0])
                setMessageLogin('Successfully logged in!')
                 navigate("/firstPage");
            }else{
            setMessageLogin('email/password incorrect')
            }
        }else{
        setMessageLogin('something went wrong')
        }
        console.log(loginUser)
}

    


    return (
        <AuthContext.Provider value={{
            loginUser,
            messageLogin,
            setMessageLogin,
            login
        }}>
            {children}

        </AuthContext.Provider>
    );
}


export default AuthContext;