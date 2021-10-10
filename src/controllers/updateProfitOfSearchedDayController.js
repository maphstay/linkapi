import listOrdersByDateController from "../../src/controllers/listOrdersByDateController.js";
import profitOfDay from "../../src/infra/models/profitOfDay.js";

export default async function updateProfitOfSearchedDay(order) {
  const updatedProfit = await profitOfDay.findOneAndUpdate(
    { dataBase: order[0].dataBase },
    {
      valorTotal: await listOrdersByDateController.listOrdersBling(
        order[0].dataBase
      ),
    },
    {
      new: true,
    }
  );
  return updatedProfit;
}
