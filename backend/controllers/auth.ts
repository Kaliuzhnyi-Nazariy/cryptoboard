import { Request, Response } from "express";
import { IUser, SignInUser, SignUpUser, UserRequest } from "../types/user";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ctrlWrapper } from "../helper";

const { SECRET_JWT } = process.env;

const signUp = async (req: Request<{}, {}, SignUpUser>, res: Response) => {
  const { email, name, password, confirmPassword } = req.body;

  const isUser = await User.findOne({ email });

  if (isUser) throw new Error("This email is already in use!");

  if (password !== confirmPassword) throw new Error("Passwords do not match!");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
  };

  const addNewUser = await User.create(newUser);

  if (!addNewUser) throw new Error("Sth went wrong during signing up");

  const payload = {
    id: addNewUser.id,
  };

  const token = jwt.sign(payload, SECRET_JWT as string, {
    expiresIn: "23h",
  });

  const updUser = await User.findByIdAndUpdate(
    addNewUser.id,
    { token },
    { new: true }
  ).select("-password");

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res.status(201).json(updUser);
};

const signIn = async (req: Request<{}, {}, SignInUser>, res: Response) => {
  const { email, password } = req.body;

  const isUser = await User.findOne<IUser>({ email });

  if (!isUser) throw new Error("Email or password is wrong!");

  const isPasswordMatch = await bcrypt.compare(password, isUser.password);

  if (!isPasswordMatch) throw new Error("Email or password is wrong!");

  const payload = {
    id: isUser.id,
  };

  const newToken = jwt.sign(payload, SECRET_JWT as string, {
    expiresIn: "23h",
  });

  const updUser = await User.findByIdAndUpdate(
    isUser.id,
    { token: newToken },
    { new: true }
  ).select("-password");

  res.cookie("token", newToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res.status(200).json(updUser);
};

const signOut = async (req: Request, res: Response) => {
  const { id } = (req as unknown as UserRequest).user as
    | { id: string }
    | JwtPayload;

  const user = await User.findById(id);

  if (!user) throw new Error("user not found");

  const updUser = await User.findByIdAndUpdate(
    user.id,
    { token: "" },
    { new: true }
  ).select("-password");

  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res.status(200).json(updUser);
};

export default {
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  signOut: ctrlWrapper(signOut),
};
