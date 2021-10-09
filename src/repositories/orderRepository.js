import Deal from "../../src/models/order.js";

export async function createProfitOfDay(orders) {
  await orders.map(async ({ dataBase, valorTotal }) => {
    const order = await Deal.create({
      dataBase,
      valorTotal,
    });
    return order;
  });
}
export async function allDays() {
  const orders = await Deal.find().sort("dataBase");

  return orders;
}
