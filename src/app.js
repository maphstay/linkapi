import express from "express";
import { api } from "./routes/route.js";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

const baseURL = ``;
const app = express();
const openApi = YAML.load("./src/doc/openapi.yaml");

app.use(api);

/** ROUTES */
import { baseRouter } from "./routes/base.js";

/** BASEROUTER AND DOCUMENTATION */
app.use(`${baseURL}/`, baseRouter);
app.use(`${baseURL}/api-docs`, swaggerUi.serve, swaggerUi.setup(openApi));

export { app };
