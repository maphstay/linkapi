import profitOfDay from "../../src/infra/models/profitOfDay.js";
import { createProfitOfDay } from "../repositories/orderRepository.js";
import { createDeal } from "../services/createOrder.js";
import listWonDealsController from "./listWonDealsController.js";
import updateProfitOfSearchedDay from "../../src/controllers/updateProfitOfSearchedDayController.js";

class createOrderController {
  async create(_req, res) {
    try {
      const wonDeals = await listWonDealsController.getWonDeals();

      const order = await createDeal(wonDeals);

      if (order[0].erro) return res.status(400).json(order);

      const profitOfSearchedDay = await profitOfDay.findOne({
        dataBase: order[0].dataBase,
      });

      return !profitOfSearchedDay
        ? res.status(201).json(await createProfitOfDay(order))
        : res.status(200).json(await updateProfitOfSearchedDay(order));
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new createOrderController();
