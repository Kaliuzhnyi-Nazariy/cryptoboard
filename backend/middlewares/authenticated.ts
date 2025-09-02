import { NextFunction, Request, Response } from "express";
import { IUser, UserRequest } from "../types/user";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";

const { SECRET_JWT } = process.env;

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.cookie
    ?.split("; ")
    .filter((cook) => cook.includes("token="))[0]
    .split("=")[1];

  const authorization = token || "";

  if (authorization === "") throw new Error("unauthorized");

  try {
    const { id } = jwt.verify(authorization, SECRET_JWT as string) as
      | { id: string }
      | JwtPayload;

    const user = await User.findById<IUser>(id).select("-password");
    if (!user) return next(new Error("unauthorized"));

    (req as unknown as UserRequest).user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default isAuthenticated;
