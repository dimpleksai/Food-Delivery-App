import jwt from "jsonwebtoken";

//call back function next
const authMiddleWare = async (req, res, next) => {
  //token taken from header
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized, Login again!",
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    // console.log(req.body.userId);
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleWare;
