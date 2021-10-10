import profitOfDay from "../../src/infra/models/profitOfDay.js";

export async function createProfitOfDay(orders) {
  await orders.map(async ({ dataBase, valorTotal }) => {
    await profitOfDay.create({
      dataBase,
      valorTotal,
    });
  });
  return orders;
}
export async function listProfitAllDays() {
  const orders = await profitOfDay.find().sort("dataBase");

  return orders;
}
