import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Login = () => {

    const { message , setMessage , login} = useContext(AuthContext);
    const [formData, setFormData] = useState(null);

    const handleChange = (e)=>{
        let { name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        setMessage("");
    }, [setMessage]);

    const handleLogin = (e)=>{
        e.preventDefault();
        login(formData);
    }


    return (
        <div className="modal-container">
            <div className="modal-dialog modal-dialog-centered custom-modal-width">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Login</h3>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" required  onChange={handleChange}/>
                                <p className="text-danger">{message}</p>
                            </div>
                            <div className="form-footer">
                                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
