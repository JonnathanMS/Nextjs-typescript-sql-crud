import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

// export function GET(request:Request,{params}:{params:{id:string}}) { OTRA FORMA DE HACERLO
export async function GET(request: Request, { params }: Params) {
  const task = await prisma.task.findFirst({
    where: {
      id: Number(params.id), // asi evitamos el error de typescritp de que string no es asignable a número.
    },
  });
  //   return NextResponse.json(
  //     "Obteniendo tarea con parametro de url " + params.id
  //   );
  return NextResponse.json(task); // enviamos una unica tarea con el id que se buscaba
}
export async function PUT(request: Request, { params }: Params) {
  const data = await request.json();
  await prisma.task.update({
    where: {
      id: Number(params.id), // se le pasa el id para especificar el elemento a editar
    },
    data: data, // aqui pasamos los datos a modificar en la bd
  });
  //   return NextResponse.json("Actualizando tarea " + params.id);
  return NextResponse.json(data);
}
export async function DELETE(request: Request, { params }: Params) {
  const task = await prisma.task.delete({
    where: {
      id: Number(params.id), // asi evitamos el error de typescritp de que string no es asignable a número.
    },
  });
  return NextResponse.json(task); // enviamos una unica tarea con el id que se buscaba para eliminar
}
