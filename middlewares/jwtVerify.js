import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.jwtSecretKey;

const jwtVerify = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      res.status(401).json({ message: "You are not authorized" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, secretKey, (err, payload) => {
      if (err) {
        throw new Error("Token doesnot match");
      }
      console.log(payload);
      next();
    });
  } catch (err) {
    res.status(500).json({ error: err.message, status: 500, success: false });
  }
};

export default jwtVerify;
