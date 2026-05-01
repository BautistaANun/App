# App

- Aplicación de lista de tareas (CRUD) desarrollada como challenge técnico.

- Permite crear, visualizar, actualizar y eliminar tareas mediante una API REST y una interfaz web.

---

## Tecnologías utilizadas

### Backend
- Node.js
- Express

### Frontend
- React (Vite)
- JavaScript
- Fetch API

---

## Estructura del proyecto

- app/
- | backend/
- | frontend/
- | README.md



---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/BautistaANun/App.git
cd app 
```

### 2. Ejecutar backend

```bash
cd backend
npm install
npm run dev
```

```bash 
El servidor va a correr en:
http://localhost:3000
```
### 3. Ejecutar frontend

```bash
cd frontend
npm install
npm run dev
```
```bash
Aplicación disponible en:
http://localhost:5173
```

## API Endpoints
- GET /api/tasks: -> obtener tareas
- POST /api/tasks -> crear tarea
- PUT /api/tasks/:id -> actualizar tarea
- DELETE /api/tasks/:id -> eliminar tarea


## Funcionalidades
- Crear tareas
- Listar tareas
- Marcar como completas / incompletas
- Eliminar tareas


## Consideraciones
- Los datos se almacenan en memoria (se pierden al reiniciar el servidor)
- No hay base de datos persistente


## Screenshots

### App funcionando en frontend
![App](./screenshot1.png)

### App funcionando en backend
![App](./screenshot2.png)

### Inputs llenos para agregar tareas
![Crear](./screenshot3.png)

### Cambios de estado (Completo/Incompleto)
![Estado](./screenshot4.png)

### Vista desde el backend luego de interactuar con las tareas
![Backend](./screenshot5.png)

### Tareas eliminadas mediante el botón "Eliminar"
![Eliminar](./screenshot6.png)

### Actualización del backend luego de eliminar tareas
![Backend](./screenshot7.png)
