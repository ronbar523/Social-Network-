import http from "./httpService";
const URL = process.env.REACT_APP_SERVER_URL;


export const createNewPost = (post) => http.post(`${URL}/posts/create_post`, post);

export const findAllPosts = () => http.get(`${URL}/posts/find_all_posts`);

export const findPostsByCreatedBy = (nickName, skip) =>
  http.get(`${URL}/posts/find_by_created_by/${nickName}/?skip=${skip}`);

export const findComments = (id) => http.get(`${URL}/posts/find_comment/${id}`);

export const findCommentsById = (id) => http.get(`${URL}/comments/find/${id}`);

export const findById = (id) => http.get(`${URL}/posts/find_by_id/${id}`);

export const findPostById = (id) => http.get(`${URL}/posts/find_post_by_id/${id}`);

export const findByCreatedAt = (createdAt, createdBy) =>
  http.get(`${URL}/posts/find_by_created_at/${createdAt}/${createdBy}`);

export const updatePost = (id, post) =>
  http.patch(`${URL}/posts/update_post/${id}`, post);

export const updatePostByCreatedAt = (createdAt, createdBy, post) =>
  http.patch(`${URL}/posts/update_post/${createdAt}/${createdBy}`, post);


export const updateUserDetailsInPost = (UserDetailsInPost) => http.patch(`${URL}/posts/update_user_details_in_post`, UserDetailsInPost);

export const deletePost = (id) => http.delete(`${URL}/posts/delete_post/${id}`);

export const deletePostByCreatedAt = (createdAt, createdBy) =>
  http.delete(`${URL}/posts/delete_post/${createdAt}/${createdBy}`);

export const sendLike = (postId, myId) =>
  http.patch(`${URL}/posts/send_like/${postId}`, myId);

export const removeLike = (postId, myId) =>
  http.patch(`${URL}/posts/remove_like/${postId}`, myId);


export const findMyLastPost = (nickName) => {
  http.get(`${URL}/posts/find_my_last_post/${nickName}`)
}

export const findUsersByPostLike = (id, start, end, userLog, flag2) =>
  http.get(`${URL}/posts/find_post_like/${id}/?start=${start}&end=${end}&userLog=${userLog}&flag2=${flag2}`);


