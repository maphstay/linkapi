import express from "express";
import cors from "cors";
import listProfitOfAllDaysController from "../controllers/listProfitOfAllDaysController.js";
import createOrderController from "../controllers/createOrderController.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

router.get("/alldays", listProfitOfAllDaysController.profitAllDays);
router.post("/orders", createOrderController.create);

export { router };
