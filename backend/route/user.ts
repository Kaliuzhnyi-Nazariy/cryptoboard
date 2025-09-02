import { Router } from "express";
import ctrl from "../controllers/user";
import { isAuthenticated } from "../middlewares";

const router = Router();

router.get("/me", isAuthenticated, ctrl.getMe);

router.put("/update", isAuthenticated, ctrl.updateUser);

router.delete("/delete", isAuthenticated, ctrl.deleteUser);

export default router;
