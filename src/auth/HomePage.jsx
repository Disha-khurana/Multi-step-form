import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Login = () => {

    const { messageLogin , setMessageLogin} = useContext(AuthContext);

    useEffect(() => {
        setMessageLogin("");
    }, [setMessageLogin]);


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
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" required />
                                <p className="text-danger">{messageLogin}</p>
                            </div>
                            <div className="form-footer">
                                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
