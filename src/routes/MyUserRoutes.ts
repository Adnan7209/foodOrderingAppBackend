import express from "express";
import { createCurrentUser } from "../controllers/MyUserControllers";
import { jwtCheck } from "../middlewares/auth";

const router = express.Router();


//  api/my/user/
router.post("/",jwtCheck,createCurrentUser);


export default router;