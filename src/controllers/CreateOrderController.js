import Deal from "../../src/models/order.js";
import { createProfitOfDay } from "../repositories/orderRepository.js";
import { create } from "../services/createOrder.js";
import ListWonDealsController from "./ListWonDealsController.js";
import UpdateProfitOfSearchedDay from "./UpdateProfitOfSearchedDayController.js";

class CreateOrderController {
  async create(_req, res) {
    try {
      const response = await ListWonDealsController.getWonDeals();

      const order = await create(response);

      if (order[0].erro) return res.status(400).json(order);

      const profitOfSearchedDay = await Deal.findOne({
        dataBase: order[0].dataBase,
      });

      if (!profitOfSearchedDay) {
        order.filter(Boolean);
        await createProfitOfDay(order);

        return res.status(201).json(order);
      } else {
        return res.status(200).json(await UpdateProfitOfSearchedDay());
      }
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new CreateOrderController();
