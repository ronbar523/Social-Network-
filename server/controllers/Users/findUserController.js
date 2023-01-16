const UserModel = require("../../model/userModel");

// Find User By Email
const findUserByEmailRequest = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModel.findUserByEmail(email);
    res.json(user);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// Find User By ID
const findUserByIdRequest = async (req, res) => {
  try {
    const user = await UserModel.findUserById(req.jwtData._id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// Find User By Nick Name
const findUserByNickNameRequest = async (req, res) => {
  try {
    const { nickName } = req.params
    const user = await UserModel.findUserByNickName(nickName);
    res.json(user);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

const findAllUserRequest = async (req, res ) => {
  try {
    const { firstName, lastName, nickName, fullName } = req.query;

    const userArr = await UserModel.findFiveUser(
      firstName,
      lastName,
      nickName,
      fullName,
    );
    res.json(userArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
}

const findAllUsersRequest = async (req, res) => {
  try {
    let { firstName, lastName, nickName, fullName, skip } = req.query;
    let flag = false

    skip = Number(skip)


    const userArr = await UserModel.findSix(
      firstName,
      lastName,
      nickName,
      fullName,
      skip,
    );

    if(userArr.length === 6) {
      const moreUser = await UserModel.findMoreOne(
        firstName,
        lastName,
        nickName,
        fullName,
        skip + 5
      );
      if (moreUser.length === 0) {
        flag = true;
      }
    } else {
      flag = true;
    }
    

    res.json({ userArr , flag });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};







module.exports = {
  findUserByEmailRequest,
  findUserByIdRequest,
  findUserByNickNameRequest,
  findAllUserRequest,
  findAllUsersRequest,
};
