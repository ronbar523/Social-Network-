import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const ModalLogin = ({ setModalLogin, user }) => {
    
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = () => {
    setModalLogin(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <div className="modal show fade model-all d-block mt-4" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <button
                className="btn-close"
                onClick={() => closeModal()}
              ></button>
            </div>

            <div className="modal-body">
              <h5 className="py-4 text-center model-text">
                Do you need to be login for it
              </h5>
            </div>

            <div className="modal-footer">
              <Link
                className="btn btn-secondary"
                to={"/register"}
                onClick={() => closeModal()}
              >
                Register
              </Link>
              <Link
                className="btn btn-primary"
                to={"/login"}
                onClick={() => closeModal()}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
