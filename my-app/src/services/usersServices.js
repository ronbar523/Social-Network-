import http from "./httpService";
import JWTDecode from "jwt-decode";
const URL = process.env.REACT_APP_SERVER_URL;
http.setHeaders("token", getJWT());

export function getJWT() {
  return localStorage.getItem("token");
}

export const findUserById = (id) => http.get(`${URL}/users/find_by_id`, id);

export const findUserByEmail = (email) => http.get(`${URL}/users/find_by_email?email=` + email);

export const findUserByNickName = (nickName) =>
  http.get(`${URL}/users/find_by_nick_name/${nickName}`);

export const findUsers = (lastName, nickName, fullName, firstName,) =>
  http.get(
    `${URL}/users/find_all_users/?firstName=${firstName}&lastName=${lastName}&nickName=${nickName}&fullName=${fullName}`
  );


export const findAllUsers = (lastName, nickName, fullName, firstName, skip) =>
  http.get(
    `${URL}/users/find_page_all_users/?firstName=${firstName}&lastName=${lastName}&nickName=${nickName}&fullName=${fullName}&skip=${skip}`
  );









export const crateNewUser = (user) => http.post(`${URL}/users/register`, user);

export const sendVerifyMailAgain = () =>
  http.post(`${URL}/users/send_verify_mail_again`);

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    return JWTDecode(token);
  } catch (err) {
    return null;
  }
};

export const verifyUser = async (email, verify) => {  http.patch(`${URL}/users/verify/?email=${email}`, verify)};


export const loginUser = async (user) => {
  const {
    data: { token },
  } = await http.post(`${URL}/users/login`, user);
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("token");
  return (window.location = "/");
};


export const restPassword = async (email) => { http.post(`${URL}/users/reset_password`, email)}

export const newPassword = async (email, num, password) => {
  const {
    data: { token },
  } = await http.patch(`${URL}/users/new_password/${email}/${num}`, password);
  localStorage.setItem("token", token);
}



export const updatePassword = async (password) => { http.patch(`${URL}/users/update_password`, password)};


export const updateUserDetails = async (user) => {
  http.patch(`${URL}/users/update`, user);
};

export const deleteMyUser = async (email) => {
  http.delete(`${URL}/users/delete_my_user`, email);
  localStorage.removeItem("token");
};

export const makeFollow = async (nickName, follow) =>
  http.patch(`${URL}/users/follow/${nickName}`, follow);

export const sendUnFollow = async (nickName, unFollow) =>
  http.patch(`${URL}/users/un_follow/${nickName}`, unFollow);  

