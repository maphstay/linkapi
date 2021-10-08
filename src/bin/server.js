import { app } from "../app.js";

const PORT = process.env.PORT || 3000;

/** SERVER EXECUTE */
app.listen(PORT, () => console.log(`----Server Online on port ${PORT}-----`));
