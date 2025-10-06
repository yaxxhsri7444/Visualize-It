import jwt from "jsonwebtoken";

const userauth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.json({ success: false, message: "Not Authorized. Login Again" });
    }

    // Format: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.json({ success: false, message: "Token not provided" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_TOKEN);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      
      next();
    } else {
      return res.json({ success: false, message: "Invalid Token" });
    }
  } catch (error) {
    console.log("Auth Error:", error);
    return res.json({ success: false, message: "Token verification failed" });
  }
};

export default userauth;
