class PostStore {
  posts = [];
  modalUpdatePosts = [];
  updatePosts = [];
  deletedPosts = [];
  modalDeletePosts = [];

  addUpdatePost = (post) => {
    this.updatePosts.push(post);
  };

  addPost = (post) => {
    this.posts.unshift(post);
  };

  addPostDeleted = (post) => {
    this.deletedPosts.unshift(post);
  };

  removePost = (post) => {
    this.posts = this.posts.filter((item) => item !== post);
  };

  addModalPost = (post) => {
    this.modalDeletePosts.push(post);
  };

  removeModalPost = (post) => {
    this.modalDeletePosts = this.modalDeletePosts.filter(
      (item) => item !== post
    );
  };

  addModalPostUpdate = (post) => {
    this.modalUpdatePosts.push(post);
  };

  removeModalPostUpdate = (post) => {
    this.modalUpdatePosts = this.modalUpdatePosts.filter(
      (item) => item !== post
    );
  };
}
export const postStore = new PostStore();
