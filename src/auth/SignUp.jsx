import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
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
                          <input type="text" name="name" className="form-control" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="password" required />
                      </div>
                      <div className="form-footer">
                          <p>Back to login page? <Link to="/">Click here</Link></p>
                      </div>
                      <Link to='/firstPage'>
                          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                      </Link>
                  </form>
              </div>
          </div>
      </div>
  </div>
        
    
  
    );
}

export default SignUp;