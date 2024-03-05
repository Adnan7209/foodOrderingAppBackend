import express from "express";
import { createCurrentUser } from "../controllers/MyUserControllers";

const router = express.Router();


//  api/my/user/
router.post("/",createCurrentUser);


export default router;