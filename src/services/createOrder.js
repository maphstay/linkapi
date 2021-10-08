import axios from "axios";
import jsontoxml from "jsontoxml";
import qs from "qs";

export async function create(deals) {
  const numero = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  const randomDate = function (start, end) {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    if (date.getDate() < 10)
      return `0${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const orders = deals.map(async (deal) => {
    const xml = jsontoxml(
      {
        pedido: [
          {
            name: "cliente",
            children: [
              {
                name: "nome",
                text: deal.org_id.name ? deal.org_id.name : "Empresa",
              },
              { name: "tipoPessoa", text: "J" },
              { name: "endereco", text: `rua teste ${numero(1, 10000)}` },
              { name: "cpf_cnpj", text: "98526364000104" },
              { name: "numero", text: "234" },
              { name: "bairro", text: "presidente prudente" },
              { name: "cep", text: "59600-000" },
              { name: "cidade", text: "Mossoro" },
              { name: "uf", text: "RN" },
              { name: "fone", text: "84920016598" },
              {
                name: "email",
                text: deal.creator_user_id.email || "empresa@gmail.com",
              },
            ],
          },
          {
            name: "data",
            text: `${randomDate(
              new Date(2021, 10, 5),
              new Date(2021, 10, 15)
            )}`,
          },
          {
            name: "transporte",
            children: [
              { name: "transportadora", text: "Transportadora teste" },
              { name: "tipo_frete", text: "R" },
              { name: "servico_correios", text: "CORREIOS" },
              {
                name: "dados_etiqueta",
                children: [
                  { name: "nome", text: "Endereco de entrega" },
                  { name: "endereco", text: "Rua jose de souza" },
                  { name: "numero", text: "220" },
                  { name: "complemento", text: "casa A" },
                  { name: "municipio", text: "Governador Dix-Sept Rosado" },
                  { name: "uf", text: "RN" },
                  { name: "cep", text: "59600-100" },
                  { name: "bairro", text: "Bairro teste" },
                  { name: "cidade", text: "Cidade Alta" },
                ],
              },
              {
                name: "volumes",
                children: [
                  {
                    name: "volume",
                    children: [
                      {
                        name: "servico",
                        text: "CORREIOS",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "itens",
            children: [
              {
                name: "item",
                children: [
                  { name: "codigo", text: 123456789 },
                  { name: "descricao", text: "serviço teste" },
                  { name: "un", text: "Un" },
                  { name: "qtde", text: 1 },
                  { name: "vlr_unit", text: deal.value || 0 },
                ],
              },
            ],
          },
          {
            name: "parcelas",
            children: [
              {
                name: "parcela",
                children: [
                  {
                    name: "vlr",
                    text: deal.value || 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      false
    );

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
