import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { useState } from "react";
import { useEffect } from "react";


const FindUsers = ({ item }) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false);
  }, [])

    
  return (
    <>
      {!isLoading ? (
      <Link
        to={`/user_profile/${item.nickName}`}
        className="text-decoration-none text-dark"
      >
        <div className="d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-header">
              <div className="modal-content">
                <Card>
                  <div className="modal-header">
                    <CardHeader
                      avatar={
                        <Avatar src={item.photo} aria-label="recipe"></Avatar>
                      }
                      title={item.firstName + " " + item.lastName}
                      subheader={"( " + item.nickName + " )"}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Link>
      ) : null}
    </>
  );
};

export default FindUsers;
