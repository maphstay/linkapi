import Deal from "../../src/models/order.js";
import { saveOrder } from "../repositories/orderRepository.js";
import { create } from "../services/createOrder.js";
import ListWonDealsController from "./ListWonDealsController.js";
import ListOrdersByDateController from "./ListOrdersByDateController.js";

class CreateOrderController {
  async create(req, res) {
    try {
      const response = await ListWonDealsController.getWonDeals();

      const order = await create(response);

      if (order[0].erro) return res.status(400).json(order);

      const currentDoc = await Deal.findOne({ dataBase: order[0].dataBase });

      const totalValueOrdersByDate = await ListOrdersByDateController.index(
        order[0].dataBase
      );

      if (!currentDoc) {
        order.filter(Boolean);

        await saveOrder(order);

        return res.status(201).json(order);
      } else {
        const updateDoc = await Deal.findOneAndUpdate(
          { dataBase: order[0].dataBase },
          { valorTotal: totalValueOrdersByDate },
          {
            new: true,
          }
        );
        return res.status(200).json(updateDoc);
      }
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new CreateOrderController();
