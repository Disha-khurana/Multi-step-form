import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormContext from '../context/FormContext';

const FirstPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        password: ""
    });
    const[isSubmitted , setIsSubmitted]= useState(false);

    const { message, setMessage, data } = useContext(FormContext);

    useEffect(() => {
        setMessage("");
    }, [setMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await data(formData)
            setIsSubmitted(true)
        } catch (error) {
            setIsSubmitted(false)
        }
    };

    return (
        
        <div className="modal-container ">
            <p className="text-danger">{message}</p>
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h2 className="modal-title mb-2">Personal Information</h2>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName"><b>First Name</b></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    value={formData.firstName} 
                                    required 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"><b>Last Name</b></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={formData.lastName}
                                    required 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateOfBirth"><b>D.O.B</b></label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="dateOfBirth" 
                                    name="dateOfBirth" 
                                    value={formData.dateOfBirth} 
                                    min="2000-01-01" 
                                    max="2024-06-18" 
                                    required 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><b>Email</b></label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={formData.email} 
                                    required 
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><b>Password</b></label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={formData.password} 
                                    required 
                                    onChange={handleChange} 
                                    
                                />
                            </div>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link to="/">
                            <button type="button" className='btn btn-primary'> Back</button>
                        </Link>
                        {isSubmitted ? (
                            <Link to="/secondPage">
                                <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Next</button>
                            </Link>
                        ) : (
                            <button type="button" className="btn btn-secondary" disabled>Next</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
