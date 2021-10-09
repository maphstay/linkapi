import ListOrdersByDateController from "./ListOrdersByDateController.js";

export default async function UpdateProfitOfSearchedDay() {
  const updatedProfit = await Deal.findOneAndUpdate(
    { dataBase: order[0].dataBase },
    { valorTotal: await ListOrdersByDateController.index(order[0].dataBase) },
    {
      new: true,
    }
  );
  return updatedProfit;
}
