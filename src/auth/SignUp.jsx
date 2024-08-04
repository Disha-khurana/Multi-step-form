import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

function SignUp(props) {
    const{message , setMessage , register} = useContext(AuthContext);
    const[formData , setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e) =>{
        let {name , value} = e.target;
        setFormData((prev)=>({
            ...prev ,
            [name] : value,
           
        }))
    }

    useEffect(()=>{
        setMessage(" ")
     },[setMessage])

     const handleRegister = (e) =>{
           e.preventDefault();
           register(formData);
     }


    return (
      <div className="modal-container">
      <div className="modal-dialog modal-dialog-centered custom-modal-width">
          <div className="modal-content">
              <div className="modal-header">
                  <h3 className="modal-title">Sign Up</h3>
              </div>
              <div className="modal-body">
                  <form>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" name="name" className="form-control" required onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" name="password" required onChange={handleChange}/>
                          <p className="text-danger">{message}</p>
                      </div>
                      <div className="form-footer">
                          <p>Back to login page? <Link to="/">Click here</Link></p>
                      </div>
                      
                          <button type="submit" className="btn btn-primary w-100" onClick={handleRegister}>Sign Up</button>
                      
                  </form>
              </div>
          </div>
      </div>
  </div>
        
    
  
    );
}

export default SignUp;