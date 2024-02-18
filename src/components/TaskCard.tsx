"use client";

import React from "react";
import { Task } from "@prisma/client";
import { useRouter } from "next/navigation";

// interface Props { // esto aplica cuando no hemos importado @prisma/client. El cual ya soporta o trae los tipos desde la bd
//   task: any;
// }

interface Props {
  //  ya soporta o trae los tipos para typeScript desde la bd.
  task: Task;
}

function TaskCard({ task }: Props) {
  const router = useRouter();

  return (
    <div
      key={task.id}
      className="bg-gray-900 p-3 hover:bg-gray-800 hover:cursor-pointer"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h3 className="font-bold text-xl">{task.title}</h3>
      <p className="text-slate-300">{task.description}</p>
    </div>
  );
}

export default TaskCard;
