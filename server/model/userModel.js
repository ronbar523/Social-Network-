const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  photo: {
    type: String,
    default:
      "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352062-stock-illustration-default-placeholder-profile-icon.jpg",
  },
  password: {
    type: String,
    required: true,
  },
  countPost: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  randomSecureNumber: {
    type: String,
  },
  dateSecureNumber: {
    type: Date,
  },
  followers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("users", userSchema);

const createUser = (
  firstName,
  lastName,
  fullName,
  nickName,
  phone,
  dateOfBirth,
  gender,
  email,
  photo,
  password,
  countPost,
  createdAt,
  isAdmin,
  block,
  verify,
 
) => {
  const newUser = new User({
    firstName,
    lastName,
    fullName,
    nickName,
    phone,
    dateOfBirth,
    gender,
    email,
    photo,
    password,
    countPost,
    createdAt,
    isAdmin,
    block,
    verify,
    
  });
  return newUser.save();
};

const findUserByEmail = (email) => {
  return User.find({ email: email });
};

const findUserByNickName = (nickName) => {
  return User.find({ nickName: nickName });
};

const findUserById = (id) => {
  return User.findById(id);
};


const findFiveUser = (firstName, lastName, nickName, fullName) => {
  return User.find({
    $or: [
      { firstName: { $regex: "^" + firstName.toString(), $options: "i" } },
      { lastName: { $regex: "^" + lastName.toString(), $options: "i" } },
      { nickName: { $regex: "^" + nickName.toString(), $options: "i" } },
      { fullName: { $regex: "^" + fullName.toString(), $options: "i" } },
    ],
  }).select(["-password", "-__v"])
  .limit(5);
};

const findSix = (firstName, lastName, nickName, fullName, skip) => {
  return User.find({
    $or: [
      { firstName: { $regex: "^" + firstName.toString(), $options: "i" } },
      { lastName: { $regex: "^" + lastName.toString(), $options: "i" } },
      { nickName: { $regex: "^" + nickName.toString(), $options: "i" } },
      { fullName: { $regex: "^" + fullName.toString(), $options: "i" } },
    ],
  })
    .select(["-password", "-__v"])
    .skip(skip)
    .limit(6);
};

const findMoreOne = (firstName, lastName, nickName, fullName, skip) => {
  return User.find({
    $or: [
      { firstName: { $regex: "^" + firstName.toString(), $options: "i" } },
      { lastName: { $regex: "^" + lastName.toString(), $options: "i" } },
      { nickName: { $regex: "^" + nickName.toString(), $options: "i" } },
      { fullName: { $regex: "^" + fullName.toString(), $options: "i" } },
    ],
  })
    .select(["-password", "-__v"])
    .skip(skip)
    .limit(2);
};



const blockUser = (id, { block }) => {
  return User.findByIdAndUpdate(
    id,
    {
      $set: { block: block },
    },
    { new: true }
  );
};

const receiveFollow = (id, followers) => {
  return User.findByIdAndUpdate(
    id,
    {
      $push: { followers: followers },
    },
    { new: true }
  );
};

const sendFollow = (id, following) => {
  return User.findByIdAndUpdate(
    id,
    {
      $push: { following: following },
    },
    { new: true }
  );
};

const unFollowers = (id, followers) => {
  return User.findByIdAndUpdate(
    id,
    {
      $pull: { followers: followers },
    },
    { new: true }
  );
};

const unFollowing = (id, following) => {
  return User.findByIdAndUpdate(
    id,
    {
      $pull: { following: following },
    },
    { new: true }
  );
};


const verifyUser = (email, { verify }) => {
  return User.updateOne({ email }, { verify: verify });
};

const becomeBizUser = (email, { biz }) => {
  return User.updateOne({ email }, { biz: biz });
};


const changeEmailUser = async (id, email) => {
  return await new Promise((success, failure) => {
    try {
      User.findOneAndUpdate({ id: id }, { email: email })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
      success("Successfully changed email");
    } catch (e) {
      failure(e);
    }
  });
};

const updatePassword = (email, password) => {
  return User.updateOne(
    { email },
    { password, randomSecureNumber: null, dateSecureNumber: null }
  );
};

const updateUserPassword = async (id, password) => {
  return await new Promise((success, failure) => {
    try {
      User.findOneAndUpdate({ id: id }, { password: password })
        .then((response) => {
        })
        .catch((e) => console.log(e));
      success("Successfully changed password");
    } catch (e) {
      failure(e);
    }
  });
};

const updateRecoveryParams = (email, randomSecureNumber, dateSecureNumber) => {
  return User.updateOne({ email }, { randomSecureNumber, dateSecureNumber });
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

const deleteMyUser = (id) => {
  return User.findByIdAndDelete(id);
};

const findOnlyVerifyUsers = (verify) => {
  const filter = verify ? { verify } : {};
  return User.find(filter);
};

const findOnlyBlockUsers = (block) => {
  const filter = block ? { block } : {};
  return User.find(filter);
};


const updateDetails = (
  email,
  { firstName, lastName, fullName, phone, gender, dateOfBirth }
) => {
  return User.updateOne(
    { email },
    { firstName, lastName, fullName, phone, gender, dateOfBirth }
  );
};

const changePassword = (email, { password }) => {
  return User.updateOne({ email }, { password });
};


const updateCountPost = (id, countPost) => {
  return User.findByIdAndUpdate(
    id,
    { $set: { countPost: countPost }},
    { new: true }
  );
}







module.exports = {
  createUser,
  findUserByEmail,
  findUserByNickName,
  verifyUser,
  findUserById,
  deleteUser,
  deleteMyUser,
  findFiveUser,
  findSix,
  findMoreOne,
  blockUser,
  findOnlyVerifyUsers,
  findOnlyBlockUsers,
  becomeBizUser,
  changeEmailUser,
  updateRecoveryParams,
  updatePassword,
  changePassword,
  updateUserPassword,
  updateDetails,
  updateCountPost,
  receiveFollow,
  sendFollow,
  unFollowing,
  unFollowers,
};
