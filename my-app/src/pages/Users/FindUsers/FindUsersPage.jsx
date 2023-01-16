import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { findUserStore } from "../../../store/findUsers";
import { findAllUsers } from "../../../services/usersServices";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FindUsers from "../../../components/User/FindUsers/FindUsers";

const FindUsersPage = () => {

  const [closeModal, setCloseModal] = useState(false);  
  const [searchBar, setSearchBar] = useState(true)
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(true);  

  useEffect(() => {
    const url = window.location.href;
    const urlWordsArr = url.split("=");

    const firstName = urlWordsArr[1];
    const lastName = urlWordsArr[1];
    const nickName = urlWordsArr[1];
    const fullName = urlWordsArr[1];

    const fetchData = async () => {
      try {
        findAllUsers(firstName, lastName, nickName, fullName, 0).then((res) => { 
          findUserStore.addUsersArr(res.data.userArr);
          setAllUsers(res.data.userArr);
          findUserStore.flag = res.data.flag;
          setDisableNext(res.data.flag);
          findUserStore.flag2 = res.data.flag;
          setIsLoading(false)
        });
        
        
      } catch {
        console.log("Err");
      }
    };

    fetchData().catch();    

  }, [])


  useEffect(() => {
    if(!searchBar){
      window.location.reload(true);
    }
  }, [searchBar])


  const next = useCallback(() => {
    setIsLoading(true)
    const url = window.location.href;
    const urlWordsArr = url.split("=");

    const firstName = urlWordsArr[1];
    const lastName = urlWordsArr[1];
    const nickName = urlWordsArr[1];
    const fullName = urlWordsArr[1];
    setDisableBack(false);    
    
    if(findUserStore.x + 1 === findUserStore.usersArr.length) {
      findUserStore.x = findUserStore.x + 1;
      findUserStore.count = findUserStore.count + 5;
      
      const fetchData = async () => {
        try {
          findAllUsers(firstName, lastName, nickName, fullName, findUserStore.count).then((res) => {
            findUserStore.addUsersArr(res.data.userArr);
            findUserStore.flag = res.data.flag;
            findUserStore.flag2 = res.data.flag;
            setDisableNext(res.data.flag)
            setAllUsers(findUserStore.usersArr[findUserStore.x]);
            setIsLoading(false);
          });
        } catch {
          console.log("Err");
        }
      };

      fetchData().catch();

    } else {
      
      findUserStore.x = findUserStore.x + 1;
      
      if (findUserStore.countUntilFlag === findUserStore.x) {
        setDisableNext(true);
      }
      setAllUsers(findUserStore.usersArr[findUserStore.x]);
      setIsLoading(false);
    }
  }, []);
  

  const back = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (findUserStore.flag) {
      findUserStore.countUntilFlag = findUserStore.x;
      findUserStore.flag = false
    }

    findUserStore.x = findUserStore.x - 1;
    if (findUserStore.x === 1) {
      setDisableBack(true);
    }

    setAllUsers(findUserStore.usersArr[findUserStore.x]);
    setDisableNext(false);
    
  }, []);
 


  return (
    <>
      <header>
        <Navbar
          closeModal={closeModal}
          setCloseModal={setCloseModal}
          searchBar={searchBar}
          setSearchBar={setSearchBar}
        />
      </header>
      {!isLoading ? (
        <main className="bg-light" onFocus={() => setCloseModal(true)}>
          <br></br>
          <div className="user-profile-find-user">
            {/* {allUsers ? ( */}
            <div>

              {allUsers.map((item, index) => {
                return <FindUsers item={item} key={index} />;
              })}
            </div>
            {/* ) : null} */}

            <Button
              sx={{
                height: 35,
                marginRight: 1,
                marginTop: "15px",
              }}
              disabled={disableBack}
              onClick={() => back()}
              variant="outlined"
            >
              <NavigateBeforeIcon />
            </Button>

            <Button
              sx={{
                height: 35,
                marginTop: "15px",
              }}
              variant="outlined"
              disabled={disableNext && findUserStore.flag2}
              onClick={() => next()}
            >
              <NavigateNextIcon />
            </Button>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default FindUsersPage;

