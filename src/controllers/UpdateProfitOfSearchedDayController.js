import listOrdersByDateController from "./listOrdersByDateController.js";

export default async function updateProfitOfSearchedDay() {
  const updatedProfit = await Deal.findOneAndUpdate(
    { dataBase: order[0].dataBase },
    { valorTotal: await listOrdersByDateController.index(order[0].dataBase) },
    {
      new: true,
    }
  );
  return updatedProfit;
}
