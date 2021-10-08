import { ordersPerDate } from "../repositories/orderRepository.js";

class ListAllOrdersController {
  async index(req, res) {
    try {
      const orders = await ordersPerDate();
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  }
}

export default new ListAllOrdersController();
