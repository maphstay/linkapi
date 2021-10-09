import express from "express";
import { router } from "./routes/routes.js";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import { baseRouter } from "./routes/base.js";

const app = express();

const baseURL = ``;
const openApi = YAML.load("./src/doc/openapi.yaml");

app.use(router);

app.use(`${baseURL}/`, baseRouter);
app.use(`/${process.env.API_VERSION}`, router);
app.use(`${baseURL}/api-docs`, swaggerUi.serve, swaggerUi.setup(openApi));

export { app };
