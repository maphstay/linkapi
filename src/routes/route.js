import express from "express";
import cors from "cors";
import ListAllDaysController from "../controllers/ListAlldaysController.js";
import CreateOrderController from "../controllers/CreateOrderController.js";

const api = express.Router();

/** GENERAL SETTINGS */
api.use(express.urlencoded({ extended: true }));
api.use(express.json());
api.use(cors());

/** API ROUTES */
api.get("/alldays", ListAllDaysController.index);
api.post("/orders", CreateOrderController.create);

export { api };
