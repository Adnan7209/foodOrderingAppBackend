import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import {
  createCheckoutSession,
  getMyOrder,
  stripeWebhookHandler,
} from "../controllers/OrderController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, getMyOrder);
router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckoutSession
);

router.post("/checkout/webhook", stripeWebhookHandler);

export default router;
