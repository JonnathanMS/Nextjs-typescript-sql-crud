import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient(); // esta es la configuracion que hicimos de prisma, estamos exportando el objeto que instanciamos de la clase.

// prisma.task.findMany().then((tasks) => {

// })
