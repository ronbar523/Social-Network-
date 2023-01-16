class FindUserStore {
  search = "";
  usersArr = [];
  count = 0;
  x = 1;
  flag = false;
  flag2 = false;
  countUntilFlag = 0;

  addUsersArr = (users) => {
    this.usersArr.push(users);
  };

}

export const findUserStore = new FindUserStore();