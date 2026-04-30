import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({title, description}); //Cuando se envía el formulario, se llama a la función onAdd pasando un objeto con el título y la descripción de la nueva tarea
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Nueva tarea"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    type="text"
    placeholder="Descripción"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <button type="submit">Agregar</button>
</form>


  );
}

export default TaskForm;