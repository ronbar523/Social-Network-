import React, { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";
import { updatePostByCreatedAt } from "../../../../services/postServices";
import HeaderModal from "./Header/HeaderModal";
import TextFieldUpdate from "./TextField/TextFieldUpdate";
import ButtonUpdate from "./Button/ButtonUpdate";

const ModalEditPost = ({ user, i, setOpenModalUpdate }) => {
  const [description, setDescription] = useState(i.description);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const cancelUpdate = () => {
    setOpenModalUpdate(false);
    document.body.style.overflow = "visible";
  };

  const updatePost = async () => {
    try {
      if (description !== i.description) {
        const post = {
          description: description,
        };
        await updatePostByCreatedAt(i.createdAt, user._id, post);
        i.description = description;
      }
      setOpenModalUpdate(false);
    } catch (err) {
      setOpenModalUpdate(false);
      toast.error(`Something happened`);
    }
    setOpenModalUpdate(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {i.createdBy !== user?._id && <Navigate to="/change_password" />}

      <div className="modal show fade d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block model-update-post">
          <div className="modal-content">
            <div className="modal-body">
              <Card sx={{ height: "270px" }}>
                <HeaderModal user={user} i={i} cancelUpdate={cancelUpdate} />
                <TextFieldUpdate
                  description={description}
                  setDescription={setDescription}
                />

                <ButtonUpdate updatePost={updatePost} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditPost;
