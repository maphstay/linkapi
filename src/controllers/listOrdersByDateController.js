import axios from "axios";
class listOrdersByDateController {
  async listOrdersBling(dataBase, _req, res) {
    try {
      const blingOrders = await axios.get(
        `${process.env.BLING_URL_API}/pedidos/json/?filters=dataEmissao[${dataBase} TO ${dataBase}]&apikey=${process.env.BLING_API_KEY}`
      );

      let total = 0;
      for (let i = 0; i < blingOrders.data.retorno.pedidos.length; i++) {
        total += Number(blingOrders.data.retorno.pedidos[i].pedido.totalvenda);
      }

      return total;
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new listOrdersByDateController();
