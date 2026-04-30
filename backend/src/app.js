const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks.routes");

const app = express();

app.use(cors()); // Permite solicitudes desde el frontend (React) al backend (Express) sin problemas de CORS.
app.use(express.json());

app.use("/api", tasksRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});