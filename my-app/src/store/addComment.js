class CommentStore {
  comments = [];
  commentsDelete = [];
  arrComment = [];
  modalDeleteComment = [];
  commentUpdated = false;
  index = 0;
  arrDeleteIdPost = [];

  addComment = (comment) => {
    this.comments.unshift(comment);
  };

  addCommentDelete = (comment) => {
    this.commentsDelete.push(comment);
  };

  addArrDeleteIdPost = ({ postId, count }) => {
    this.arrDeleteIdPost.push({ postId, count });
  };

  addToArrComment = (comment) => {
    this.arrComment.unshift(comment);
  };

  removeComment = (comment) => {
    this.comments = this.comments.filter((item) => item !== comment);
  };

  addModalComment = (comment) => {
    this.modalDeleteComment.push(comment);
  };

  removeModalComment = (comment) => {
    this.modalDeleteComment = this.modalDeleteComment.filter(
      (item) => item !== comment
    );
  };
}

export const commentStore = new CommentStore();
