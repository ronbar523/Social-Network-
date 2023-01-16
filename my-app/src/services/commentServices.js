import http from "./httpService";
const URL = process.env.REACT_APP_SERVER_URL;

export const createNewComment = (id, comment) =>
  http.post(`${URL}/comments/create/${id}`, comment);

export const sendLike = (commentsId, myId) =>
  http.patch(`${URL}/comments/send_like/${commentsId}`, myId);

export const sendLike2 = (createdAt, createdBy) =>
  http.patch(
    `${URL}/comments/send_like_redux/${createdAt}/${createdBy}`
  );

export const removeLike = (commentsId, myId) =>
  http.patch(`${URL}/comments/remove_like/${commentsId}`, myId);

export const removeLike2 = (createdAt, createdBy) =>
  http.patch(
    `${URL}/comments/remove_like_redux/${createdAt}/${createdBy}`
  );

export const findMyComments = (id) =>
  http.get(`${URL}/comments/find_my_comment/${id}`);

export const findByCreatedAt = (createdAt, createdPostBy) =>
  http.get(`${URL}/comments/find_by_created_at/${createdAt}/${createdPostBy}`);

export const deleteById = (id) => {
  http.delete(`${URL}/comments/delete/${id}`)
}

export const deleteByCreatedAt = (createdAt, createdBy) => {
  http.delete(`${URL}/comments/delete/${createdAt}/${createdBy}`)
}

export const updateByCreatedAt = (createdAt, createdBy, comment) => {
  http.patch(`${URL}/comments/update/${createdAt}/${createdBy}`, comment);
};

export const updateCommentById = (id, comment) => {
  http.patch(`${URL}/comments/update/${id}`, comment);
};

export const findUsersByCommentLike = (id, start, end, userLog, flag2) =>
  http.get(`${URL}/comments/find_comment_like/${id}/?start=${start}&end=${end}&userLog=${userLog}&flag2=${flag2}`);