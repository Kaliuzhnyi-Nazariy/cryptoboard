import { Request, Response } from "express";
import { ctrlWrapper } from "../helper";
import { IUser, UpdUser, UserRequest } from "../types/user";
import { JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import bcrypt from "bcryptjs";

const getMe = (req: UserRequest, res: Response) => {
  const data = req.user;

  if (!data) throw new Error("unauthorized");

  const { email, name } = data;

  res.status(200).json({ email, name });
};

const updateUser = async (req: Request<{}, {}, UpdUser>, res: Response) => {
  const { id, email: userEmail } = (req as unknown as UserRequest).user as
    | { id: string; email: string }
    | JwtPayload;

  const user = await User.findById<IUser>(id);

  if (!user) throw new Error("user not found!");

  const { email, name, password } = req.body;

  if (userEmail !== email) {
    const isUpdUser = await User.findOne({ email }).select("-password");

    if (isUpdUser) throw new Error("this email is already in use!");
  }

  const isPasswordMatch = bcrypt.compare(password, user.password);

  let hashedPassword = "";

  if (!isPasswordMatch) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const updUser = await User.findByIdAndUpdate(
    id,
    {
      email,
      name,
      password: hashedPassword,
    },
    { new: true }
  ).select("-password");

  return res.status(200).json(updUser);
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = (req as unknown as UserRequest).user as
    | { id: string }
    | JwtPayload;

  const isUser = await User.findById(id);

  if (!isUser) throw new Error("user not found!");

  const deleteUser = await User.findByIdAndDelete(id).select("-password");

  return res.status(200).json(deleteUser);
};

export default {
  getMe: ctrlWrapper(getMe as any),
  updateUser: ctrlWrapper(updateUser),
  deleteUser: ctrlWrapper(deleteUser),
};
