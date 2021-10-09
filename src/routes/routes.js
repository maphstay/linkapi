import express from "express";
import cors from "cors";
import ListAllDaysController from "../controllers/ListAlldaysController.js";
import CreateOrderController from "../controllers/CreateOrderController.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

router.get("/alldays", ListAllDaysController.index);
router.post("/orders", CreateOrderController.create);

export { router };
