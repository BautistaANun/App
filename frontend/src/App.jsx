import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//Importo los componentes TaskList y TaskForm para usarlos en el componente App

function App() {
  const [tasks, setTasks] = useState([]); //Estado para almacenar las tareas obtenidas del backend
  const [description, setDescription] = useState(""); //Estado para almacenar la descripción de una nueva tarea, aunque en este caso no se está utilizando en el formulario

  const fetchTasks = () => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
  }; //La función fetchTasks hace una solicitud GET al backend para obtener las tareas y actualizar el estado

  useEffect(() => {
    fetchTasks(); 
  }, []); //El hook useEffect se utiliza para llamar a fetchTasks cuando el componente se monta por primera vez, 
  // asegurando que las tareas se carguen al iniciar la aplicación

  const handleAdd = (task) => { 
    //La función handleAdd se encarga de agregar una nueva tarea al backend mediante una solicitud POST
     console.log("ENVIANDO:", task);
    fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task), //El cuerpo de la solicitud se convierte a JSON utilizando JSON.stringify, enviando el título y la descripción de la nueva tarea
    }).then((res) => res.json())
      .then(() => fetchTasks())
    .catch((err) => console.error("ERROR:", err));
   
  };

  const handleDelete = (id) => { //La función handleDelete se encarga de eliminar una tarea del backend mediante una solicitud DELETE, utilizando el ID de la tarea para identificarla
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    }).then(fetchTasks);
  };

  const handleToggle = (task) => { //La función handleToggle se encarga de cambiar el estado de completado de una tarea mediante una solicitud PUT, 
  //utilizando el ID de la tarea para identificarla y enviando el nuevo estado en el cuerpo de la solicitud
    fetch(`http://localhost:3000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task.title,
        completed: !task.completed,
      }),
    }).then(fetchTasks);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>

      <TaskForm onAdd={handleAdd}/*El componente se renderiza para solicitar la adición de nuevas tareas*//>

      <TaskList //El componente TaskList se renderiza y se le pasan las tareas, así como las funciones handleDelete y handleToggle para que pueda eliminar y cambiar el estado de las tareas respectivamente
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;