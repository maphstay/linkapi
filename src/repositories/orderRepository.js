import Deal from "../models/Order.js";

export async function saveOrder(orders) {
  const savedOrders = await orders.map(async ({ dataBase, valorTotal }) => {
    const order = await Deal.create({
      dataBase,
      valorTotal,
    });
    return order;
  });
}
export async function allDays() {
  const orders = await Deal.find();

  return orders;
}
