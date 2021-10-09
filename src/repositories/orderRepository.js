import deal from "../models/profitOfDay.js";

export async function createProfitOfDay(orders) {
  await orders.map(async ({ dataBase, valorTotal }) => {
    const order = await deal.create({
      dataBase,
      valorTotal,
    });
    return order;
  });
}
export async function allDays() {
  const orders = await deal.find().sort("dataBase");

  return orders;
}
