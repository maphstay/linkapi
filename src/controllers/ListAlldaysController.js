import { allDays } from "../repositories/orderRepository.js";

class ListAllDaysController {
  async index(req, res) {
    try {
      const orders = await allDays();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new ListAllDaysController();
