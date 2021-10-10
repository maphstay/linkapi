import { listProfitAllDays } from "../repositories/orderRepository.js";
class listProfitOfAllDaysController {
  async profitAllDays(_req, res) {
    try {
      const orders = await listProfitAllDays();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new listProfitOfAllDaysController();
