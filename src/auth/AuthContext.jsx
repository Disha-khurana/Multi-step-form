import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const[user , setUser] = useState(null);
    const[message , setMessage] = useState("");
    const navigate = useNavigate();

    //login user
    const login = async(formData) =>{
        const res = await fetch(`http://localhost:5000/login?email=${formData.email}&password=${formData.password}`,{method:"GET"})
        if(res.ok){
            const user = await res.json();
            console.log(user)
            if(user.length>0){
                setUser(user[0])
                setMessage('Successfully logged in!')
                 navigate("/firstPage");
            }else{
                setMessage('email/password incorrect')
            }
        }else{
            setMessage('something went wrong')
        }
        console.log(user)
}

//register user
const register = async(formData) => {
    let config = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
    }

    const check = await fetch(`http://localhost:5000/login?email=${formData.email}`,{method:"GET"})
        if(check.ok){
            const user = check.json();
            console.log(user)
            if(user.length>0){
                setMessage("user already exists")
            }
            else{
                const res = await fetch("http://localhost:5000/login" , config)

                if(res.status === 201){
                    const user = res.json()
                    setUser(user)
                    setMessage("Registered Successfully")
                    navigate("/firstpage")
                }
                else{
                    setMessage("something went wrong")
                }
            }
        }
        else{
            setMessage("something went wrong , try again")
        }
       

}

    


    return (
        <AuthContext.Provider value={{
            user,
            message,
            setMessage,
            login,
            register
        }}>
            {children}

        </AuthContext.Provider>
    );
}


export default AuthContext;