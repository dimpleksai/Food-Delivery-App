import express from "express";
import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import authMiddleWare from "../middleware/auth.js";

const orderRouter = new express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/orders", authMiddleWare, userOrders);

export default orderRouter;
