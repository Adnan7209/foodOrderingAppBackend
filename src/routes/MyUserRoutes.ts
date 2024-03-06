import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/MyUserControllers";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validation";

const router = express.Router();

//  api/my/user/
router.post("/", jwtCheck, createCurrentUser);
router.put("/",jwtCheck,jwtParse,validateMyUserRequest, updateCurrentUser);

export default router;
