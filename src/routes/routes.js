import express from "express";
import cors from "cors";
import listAllDaysController from "../controllers/listAlldaysController.js";
import createOrderController from "../controllers/createOrderController.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

router.get("/alldays", listAllDaysController.index);
router.post("/orders", createOrderController.create);

export { router };
