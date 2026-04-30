const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;

//En este archivo definimos las rutas para las operaciones de get, post, put y delete relacionadas con las tareas.
//Cada ruta está asociada a una función de control con su lógica específica, que se encuentra en el archivo tasks.controller.js.
