import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormContext from '../context/FormContext';

const SecondPage = () => {
    const [formData2, setFormData2] = useState({
        designation: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        salary: "",
        department: "",
        phone: ""
    });
    const[isSubmitted , setIsSubmitted]= useState(false);
    const { message, setMessage, data2 } = useContext(FormContext);

    useEffect(() => {
        setMessage("");
    }, [setMessage]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData2({
            ...formData2,
            [name]: value
        });
    };

    const handleSubmit2 = async () => {
        try {
            await data2(formData2)
            setIsSubmitted(true)
        } catch (error) {
            setIsSubmitted(false)
        }
    };

    return (
        <div className="modal-container">
            <div className="modal-dialog modal-dialog-centered custom-modal-width">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Office Information</h3>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="designation"><b>Designation</b></label>
                                <select 
                                    id="designation"
                                    name="designation"
                                    className="form-control"
                                    value={formData2.designation}
                                    required
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select Designation</option>
                                    <option value="HR">HR</option>
                                    <option value="Manager">Manager</option>
                                    <option value="SEO Executive">SEO Executive</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Python Developer">Python Developer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address"><b>Address</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    placeholder="Address Line 1"
                                    value={formData2.address}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex'>
                            <div className="form-group">
                                <label htmlFor="city"><b>City</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    value={formData2.city}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state"><b>State</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    value={formData2.state}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode"><b>Pincode</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Pincode"
                                    value={formData2.pincode}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary"><b>Salary</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="salary"
                                    name="salary"
                                    placeholder="Salary"
                                    value={formData2.salary}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department"><b>Department</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="department"
                                    name="department"
                                    placeholder="Department"
                                    value={formData2.department}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"><b>Phone</b></label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone No."
                                    value={formData2.phone}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleSubmit2}
                                />
                            </div>
                              <p className="text-danger">{message}</p>
                    </form>
                    <div className="modal-footer">
                        <Link to="/firstPage">
                            <button type="button" className="btn btn-secondary">Back</button>
                        </Link>
                        {isSubmitted ? (
                            <Link to="/thirdPage">
                                <button type="button" className="btn btn-secondary">Next</button>
                            </Link>
                        ) : (
                            <button type="button" className="btn btn-secondary" disabled>Next</button>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;
