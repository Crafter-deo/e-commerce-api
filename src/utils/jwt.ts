import jwt from "jsonwebtoken";
// import config from '../config/index';

export const generateToken = async (payload: object) => {
  const options = {
    expiresIn: process.env.JWT_EXPIRES_IN,
  };

  try {
    const token = await jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      options
    );
    if (!token) {
      console.log("Token not generated");
      return;
    } else {
      return token;
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

export const verifyToken = async (token: string) => {
  try {
    const decodedToken = await jwt.verify(
      token,
      process.env.JWT_SECRET!
    );
    if (!decodedToken) {
      console.log("Token not verified");
      return;
    } else {
      return decodedToken;
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
