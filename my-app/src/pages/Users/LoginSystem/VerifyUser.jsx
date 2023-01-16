import React, { useEffect } from "react";
import {
  getCurrentUser,
  verifyUser,
  findUserByEmail,
} from "../../../services/usersServices";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { useState } from "react";

const VerifyUser = () => {
  const user = getCurrentUser();

  const url = window.location.href;
  const urlWordsArr = url.split("=");
  const email = urlWordsArr[1];

  const [userNotEexist, setUserNotEexist] = useState(false);

  const verify = async () => {
    const theUserFound = await findUserByEmail(email);

    if (theUserFound.data[0] !== undefined) {
      const user = {
        verify: true,
      };
      verifyUser(email, user);

      setTimeout(() => {
        window.location = "/";
      }, 7000);
    } else {
      setUserNotEexist(true);
      window.location = "/";
    }
  };

  useEffect(() => {
    verify();
  }, []);

  
  return (
    <>
      {userNotEexist && <Navigate to="/" />}
      {user.verify && <Navigate to="/" />}
      <div className="modal show fade model-all d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="px-3">Peti</h4>
              <Link to={`/`} className="btn-close"></Link>
            </div>
            <div className="modal-body">
              <h5 className=" py-4 text-center model-text">
                Your user is verified
              </h5>
            </div>
            <div className="modal-footer">
              <Link to={`/`} className="btn btn-secondary">
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
