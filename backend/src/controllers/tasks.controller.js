const data = require("../data/tasks");

const getTasks = (req, res) => {
  res.json(data.tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;

  // Validación básica a modo de prueba, en un entorno real se podrían agregar más validaciones.
  if (!title) {
    return res.status(400).json({ error: "El título es obligatorio" });
  }

  const newTask = {
  id: Date.now().toString(),
  title,
  description: description || "",
  completed: false,
  createdAt: new Date(),
};
  data.tasks.push(newTask);

  res.status(201).json(newTask);
};


const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = data.tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  const index = data.tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const deletedTask = data.tasks.splice(index, 1);

  res.json(deletedTask[0]);
};

module.exports = { getTasks, createTask, updateTask, deleteTask};

//En este archivo definimos las funciones que manejarán las solicitudes relacionadas con las tareas. 
//Estas funciones se importarán en el archivo de rutas para ser utilizadas como controladores de las rutas correspondientes.