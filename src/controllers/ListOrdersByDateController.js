import axios from "axios";

class ListOrdersByDateController {
  async index(dataBase, req, res) {
    try {
      const response = await axios.get(
        `${process.env.BLING_URL_API}/pedidos/json/?filters=dataEmissao[${dataBase} TO ${dataBase}]&apikey=${process.env.BLING_API_KEY}`
      );

      let total = 0;
      for (let i = 0; i < response.data.retorno.pedidos.length; i++) {
        total += Number(response.data.retorno.pedidos[i].pedido.totalvenda);
      }

      return total;
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new ListOrdersByDateController();
