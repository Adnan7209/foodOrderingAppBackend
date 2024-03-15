import express from "express";
import { param } from "express-validator";
import {
  getRestaurant,
  searchRestaurant,
} from "../controllers/RestaurantsController";

const router = express.Router();

// /api/restaurant/search/:${location}

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramater must be valid string"),
  getRestaurant
);
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
