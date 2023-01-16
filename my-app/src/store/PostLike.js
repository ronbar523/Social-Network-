class PostLikeStore {
  likes = [];
  postId = "";
  countLikes = 0;
  count = 10;
  x = 0;
  newFollow = [];
  unFollow = [];
  userLike = false;
  flag = false;

  addToArrLikes = (like) => {
    this.likes.push(like);
  };

  addToNewFollowArr = (follow) => {
    this.newFollow.push(follow);
  };

  addToUnFollowArr = (unFollow) => {
    this.unFollow.push(unFollow);
  };

  removeFollow = (follow) => {
    this.newFollow = this.newFollow.filter((item) => item !== follow);
  };

  removeUnFollow = (unFollow) => {
    this.unFollow = this.unFollow.filter((item) => item !== unFollow);
  };

}

export const postLikeStore = new PostLikeStore();
