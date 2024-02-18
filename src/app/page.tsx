import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

import React from "react";
// import axios from "axios"; // se puede hacer las peticiones directamente con axios tambien
// Como estamos en un componente del servidor se puede ejecutar:
// http
// query database

// *Asi seria con axios.
// async function loadTasks() {
//   const res = await axios.get("http://localhost:3000/api/tasks");
//   console.log(res);
// }

// *con Prisma
async function loadTasks() {
  //   const tasks = await prisma.task.findMany();
  //   console.log(tasks);
  //   return tasks;

  return await prisma.task.findMany(); //!Resumimos las tres lineas anteriores obteniendo el mismo resultado.
}

export const dinamic = "force-dinamic"; //*Esto hace que  en produccion recarge la informacion en la pagina al modificarse.

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
