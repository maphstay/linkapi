import { allDays } from "../repositories/orderRepository.js";
class listAllDaysController {
  async index(_req, res) {
    try {
      const orders = await allDays();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new listAllDaysController();
