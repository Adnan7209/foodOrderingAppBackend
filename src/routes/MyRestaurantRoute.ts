import express from "express";
import multer from "multer";
import {
  createMyRestaurant,
  getMyRestaurant,
  updateMyRestaurant,
} from "../controllers/MyRestaurant";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

//  /api/my/restaurant
router.get("/", jwtCheck, jwtParse, getMyRestaurant);
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurant
);
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateMyRestaurant
);

export default router;
