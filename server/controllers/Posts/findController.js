const PostModel = require("../../model/postModel");
const UserModel = require("../../model/userModel");


const findAllPostRequest = async (req, res) => {
  try {
    const postArr = await PostModel.findAllPosts();
    res.json(postArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

const findPostByCreatedBy = async (req, res) => {
  try {
    const { id } = req.params;
    
    const postArr = await PostModel.findPostByCreatedBy(id);

    
    res.json(postArr);

  } catch (err) {
    res.status(400).json({ err: err });
  }
}

const findPostWithId = async (req,res) => {
  try {
    const { id } = req.params;

    const post = await PostModel.findPostById(id);

    res.json(post);
    
  } catch (err) {
    res.status(400).json({ err: err });
  }
}

const findByCreatedAtRequest = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params;
    const post = await PostModel.findByCreatedAt(createdAt, createdBy);
    res.json(post);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};


const findByNickNameRequest = async (req,res) => {
  try {
    const { createdBy } = req.params;

    const { skip } = req.query;

    const userCreated = await UserModel.findUserByNickName(createdBy);

    const postArr = await PostModel.findByNickName(userCreated[0]._id, skip);

    res.json(postArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
}



module.exports = {
  findAllPostRequest,
  findPostByCreatedBy,
  findPostWithId,
  findByCreatedAtRequest,
  findByNickNameRequest,
};