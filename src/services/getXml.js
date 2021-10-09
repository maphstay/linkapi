import jsontoxml from "jsontoxml";

export default function getXml(deal) {
  const randomNumber = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed();
  };
  const randomDate = function (start, end) {
    start = new Date(start.split("/").reverse().join("/"));
    end = new Date(end.split("/").reverse().join("/"));
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const generatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return date.getDate() < 10 ? `0${generatedDate}` : `${generatedDate}`;
  };
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
            { name: "endereco", text: `rua teste ${randomNumber(1, 10000)}` },
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
          text: `${randomDate("05/11/2021", "15/11/2021")}`,
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

  return xml;
}
