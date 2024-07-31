import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertBase64 } from '../helper/index';
import FormContext from '../context/FormContext';

const ThirdPage = () => {

    const[pdf , setPdf] = useState({});
    const[isSubmitted , setIsSubmitted] = useState(false);
    const { message, setMessage, data3 } = useContext(FormContext);

    useEffect(() => {
        setMessage("");
    }, [setMessage]);


    const handlePdf = async (e) => {
        let file = e.target.files[0];
        // console.log(file)
        let pdfString = await convertBase64(file);
        setPdf({
            pdf :pdfString
            })
    };
    // console.log(pdf)

    const handleSubmit3 = async () => {
        try {
            await data3({pdf});
            setIsSubmitted(true)
        } catch (error) {
            console.error("Error submitting form data:", error);
            setIsSubmitted(false)
        }
    };

    return (
        <div className="modal-container">
            <div className="modal-dialog modal-dialog-centered custom-modal-width">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title mb-3">Upload your Resume</h3>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" onChange={handlePdf} onBlur={handleSubmit3} accept=".pdf"  />
                            {/* <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label> */}
                        </div>
                        <p className="text-danger">{message}</p>
                        
                    </div>
                    <div className="modal-footer">
                        <Link to="/secondPage">
                            <button type="button" className="btn btn-secondary">Back</button>
                        </Link>
                        {isSubmitted ? (
                            <Link to="/submit">
                                <button type="button" className="btn btn-secondary">Submit</button>
                            </Link>
                        ) : (
                            <button type="button" className="btn btn-secondary" disabled>Submit</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;
