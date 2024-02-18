import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"; // esta es la configuracion que hicimos de prisma, estamos trayendo el objeto que instanciamos de la clase.

export async function GET() {
  const tasks = await prisma.task.findMany(); // findMany busca muchas ocurrencias,
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  const newTask = await prisma.task.create({
    // data: data,
    data, // cuando los dos son iguales como arriba se puede dejar así
  });
  return NextResponse.json(newTask);
}
