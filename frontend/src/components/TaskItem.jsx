function TaskItem({ task, onDelete, onToggle }) {
  return (
      <li>
      <strong>{task.title}</strong> <br />
     {task.description} <br />
      Estado: {task.completed ? "Completo" : "Incompleto"} <br />
      Creado: {new Date(task.createdAt).toLocaleString()}

      <br />

      <button onClick={() => onDelete(task.id)}>Eliminar</button>

      <button onClick={() => onToggle(task)}>
       {task.completed ? "Marcar como incompleto" : "Marcar como completo"}
      </button>
      </li>

  );
}

export default TaskItem;