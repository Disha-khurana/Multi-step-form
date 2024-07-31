import { createContext} from "react";
import { useState } from "react";

const FormContext = createContext();

//save data
export const FormProvider = ({ children }) =>{
    const[user , setUser] = useState(null);
    const[message , setMessage] = useState("");



    //save step1 data
    const data = async (formData) =>{
        console.log(formData)
        let config = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
           
        }
        console.log(config)

        try{
        const response = await fetch("http://localhost:5000/step1",config)
        if(response.status===201){
            const user = await response.json();
            setUser(user[0]);
            setMessage("Filled successfully , move to step2!");
        }else{
            setMessage("something went wrong!");
        }
    }catch(error){
    console.error("error")
}
    }


     //save step2 data
        const data2 = async (formData2) =>{
            console.log(formData2)
            let config = {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formData2)
               
            }
            console.log(config)
    
            try{
            const response = await fetch("http://localhost:5000/step2",config)
            if(response.status===201){
                const user = await response.json();
                localStorage.setItem("user",JSON.stringify(user)); 
                setUser(user[0]);
                setMessage("Filled successfully , move to step3!");
            }else{
                setMessage("something went wrong!");
            }
        }catch(error){
        console.error("error")
    }
    }

    const data3 = async(pdf) =>{
        const config = {
            method:"POST",                     
            headers:{
                "Content-Type" : "application/json"
            },
            body  : JSON.stringify(pdf)                
        } 
        
        try{
            const response = await fetch("http://localhost:5000/step3",config)
            if(response.status===201){
                const user = await response.json();
                localStorage.setItem("user",JSON.stringify(user)); 
                setUser(user[0]);
                setMessage("Uploaded successfully!");
            }else{
                setMessage("something went wrong!");
            }
        }catch(error){
        console.error("error")
        }  
    }



    return(
        <FormContext.Provider value={{
            user,
            message,
            setMessage,
            data,
            data2,
            data3
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;