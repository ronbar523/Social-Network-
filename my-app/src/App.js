import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./css/App.css";
import "./css/User/UserSystem/Register.css";
import "./css/User/UserSystem/Login.css";
import "./css/User/UserSystem/ResetPass.css";
import "./css/User/UserDetails/UpdateUser.css";
import "./css/User/UserProfile/UserProfile.css";
import "./css/User/FindUsers/FindUsers.css";

import "./css/Navbar/Navbar.css";


import "./css/Post/CreateBox.css";
import "./css/Post/ShowPost.css"
import "./css/Post/UpdatePost.css";


import "./css/Comment/CreateComment.css";
import "./css/Comment/ShowComment.css";
import "./css/Comment/UpdateComment.css";

import Login from "./pages/Users/LoginSystem/Login";
import Logout from "./pages/Users/LoginSystem/Logout";


import ShowPost from "./pages/Post/ShowPosts";
import MyProfile from "./pages/Users/Profile/MyProfile";
import FindUsersPage from "./pages/Users/FindUsers/FindUsersPage";
// import PostPage from "./pages/Post/PostPage";

const Register = React.lazy(() => import("./pages/Users/LoginSystem/Register")); 
const VerifyUser = React.lazy(() => import("./pages/Users/LoginSystem/VerifyUser")); 
const ResetPass = React.lazy(() => import("./pages/Users/LoginSystem/ResetPass")); 
const NewPass = React.lazy(() => import("./pages/Users/LoginSystem/NewPass")); 
const UpdateDetailsUser = React.lazy(() => import("./pages/Users/UpdateUser/UpdateDetails")); 
const UpdatePassword = React.lazy(() => import("./pages/Users/UpdateUser/UpdatePassword")); 
const DeleteMyUser = React.lazy(() => import("./pages/Users/UpdateUser/DeleteMyUser")); 

const UserProfile = React.lazy(() => import("./pages/Users/Profile/UserProfile")); 

const PostPage = React.lazy(() => import("./pages/Post/PostPage"));



function App() {
  return (
    <>
      <main className="">
        <Suspense fallback={<div> loading </div>}>
          <ToastContainer />
          <Routes>
            {/* Login System */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify/:email" element={<VerifyUser />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/reset" element={<ResetPass />} />
            <Route path="/reset/:email/:num" element={<NewPass />} />
            {/* Update User Info */}
            <Route path="/update_user_info" element={<UpdateDetailsUser />} />
            <Route path="/update_password" element={<UpdatePassword />} />
            <Route path="/delete_my_user" element={<DeleteMyUser />} />
            {/* User Profile */}
            <Route path="/user_profile/:nickName" element={<UserProfile />} />
            <Route path="/my_profile/:nickName" element={<MyProfile />} />
            {/* Find User */}
            <Route path="/find_users" element={<FindUsersPage />} />
            {/* Post */}
            <Route path="/" element={<ShowPost />} />
            <Route path="/post_page/:id" element={<PostPage />} />

          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
