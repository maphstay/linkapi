import axios from "axios";
import qs from "qs";
import getXml from "./getXml.js";

export async function createDeal(deals) {
  const orders = deals.map(async (deal) => {
    const xml = getXml(deal);

    try {
      const orderData = await axios.post(
        `${process.env.BLING_URL_API}/pedido/json/`,
        qs.stringify({
          apikey: `${process.env.BLING_API_KEY}`,
          xml: `${xml}`,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (orderData.data.retorno.erros) return orderData.data.retorno.erros[0];
      const { pedido } = orderData.data.retorno.pedidos[0];
      pedido.dataBase = xml.split("<data>")[1].slice(0, 10);
      pedido.valorTotal = deal.value;

      return pedido;
    } catch (error) {
      console.log(error);
    }
  });

  const CreatedOrders = await Promise.all(orders).then((res) => {
    if (res[0].erro) return res;
    const response = [res[res.length - 1]];

    return response;
  });

  return CreatedOrders;
}
