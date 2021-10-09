import deal from "../infra/models/profitOfDay.js";
import { createProfitOfDay } from "../repositories/orderRepository.js";
import { create } from "../services/createOrder.js";
import listWonDealsController from "./listWonDealsController.js";
import updateProfitOfSearchedDay from "./updateProfitOfSearchedDayController.js";

class createOrderController {
  async create(_req, res) {
    try {
      const wonDeals = await listWonDealsController.getWonDeals();

      const order = await create(wonDeals);

      if (order[0].erro) return res.status(400).json(order);

      const profitOfSearchedDay = await deal.findOne({
        dataBase: order[0].dataBase,
      });

      if (!profitOfSearchedDay) {
        order.filter(Boolean);
        await createProfitOfDay(order);

        return res.status(201).json(order);
      } else {
        return res.status(200).json(await updateProfitOfSearchedDay());
      }
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new createOrderController();
