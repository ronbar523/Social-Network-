import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";


const ModalSearch = ({
  allUsers,
  filter,
  closeModal,
  setCloseModal,
  searchBar,
  setSearchBar,
}) => {
  return (
    <>
      <div className="modal-search-users">
        {allUsers.length > 0 &&
        filter.length > 0 &&
        !closeModal &&
        searchBar ? (
          <div className="modal-header close-header">
            <Link
              className="h5 ms-3 mt-1 mb-2"
              onClick={() => setSearchBar(false)}
              to={`/find_users/?filter=${filter}`}
            >
              {" "}
              Show More{" "}
            </Link>
            <button
              className="btn-close close-search-users"
              onClick={() => setCloseModal(true)}
            ></button>
          </div>
        ) : allUsers.length > 0 &&
        filter.length > 0 &&
        !closeModal ? (
          <div className="modal-header close-header">
            <Link
              className="h5 ms-3 mt-1 mb-2"
              to={`/find_users/?filter=${filter}`}
            >
              {" "}
              Show More{" "}
            </Link>
            <button
              className="btn-close close-search-users"
              onClick={() => setCloseModal(true)}
            ></button>
          </div>
        ) : null}
        {filter.length > 0 && !closeModal
          ? allUsers.slice(0, 5).map((item, index) => {
              return (
                <Link
                  to={`/user_profile/${item.nickName}`}
                  key={index}
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
                                  <Avatar
                                    src={item.photo}
                                    aria-label="recipe"
                                  ></Avatar>
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
              );
            })
          : null}
      </div>
    </>
  );
};

export default ModalSearch;
