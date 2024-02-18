import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <h3 className="text-2xl font-bold">
        Crud con Nextjs, Typescript, Prisma SQL.
      </h3>
      <ul>
        <li>
          <Link href="/" className="text-slate-200 hover:text-slate-400">
            Tareas
          </Link>
        </li>
        <li>
          <Link href="/new" className="text-slate-200 hover:text-slate-400">
            Nuevo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
