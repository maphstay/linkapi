# LINKAPI - Desafio integração Pipedrive/Bling -

![LINKAPI](./src/assets/logo.jpg)

## :checkered_flag: Tecnologias

- Docker 4.1
- NodeJS 14.18
- MongoDB (ATLAS)
- Swagger OAS3

Para usar o repositório, siga os passos:
> git clone https://github.com/maphstay/linkapi.git

> cd .\linkapi\

> docker compose up -d

> Documentação swagger para teste: <http://localhost:3000/api-docs>

> OBS: Pode ser testado pelo Postman/Insomnia através das rotas:
    > Listar: GET <http://localhost:3000/alldays>
    > Cadastrar: POST <http://localhost:3000/orders>


## :ledger: Descrição

1 - Todo o projeto esta conteinerizado utilizando docker.

2 - Criada uma API utilizando nodeJS e javascript a qual integra a plataforma Pipedrive com a Bling para cadastro de pedido que por sua vez a soma total dos valores de todos os pedidos filtrados pela data de emissão são armazenados no banco mongoDB.

3 - Seguindo o modelo MVC, utilizado o desacoplamento de código e boas práticas.


## :bust_in_silhouette: Autor

### Stefferson Thallys

---

This README was generated with ❤️ by <a href="https://www.linkedin.com/in/stefferson-thallys-6309851a2/">**Stefferson Thallys**</a>:copyright:

