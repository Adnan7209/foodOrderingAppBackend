import express from "express";
import { param } from "express-validator";
import { searchRestaurant } from "../controllers/RestaurantsController";

const router = express.Router();

// /api/restaurant/search/:${location}

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramater must be a valid string"),
  searchRestaurant
);

export default router;
