"use client";
import React from "react";
// import { register } from "module";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NewPage = ({ params }: { params: { id: String } }) => {
  useForm();
  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter(); // permite redireccionar
  console.log(params);

  //!como el useEffect no permite usar await si no es dentro de una funcion se usa then en este caso:
  useEffect(() => {
    if (params.id) {
      // axios.get(`/api/tasks/${params.id}`).then(res => console.log(res.data));
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        ////Este axios esta llamando no a la ruta tasks/edit del front sino a la api tasks y recibiendo la respuesta
        setValue("title", res.data.title); // con los set value colocamos en el form de la libreria hook form los valores que traia la tarea con ese id
        setValue("description", res.data.description);
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      //   const res = await axios.post("/api/tasks", data); // En este caso como estamos en un componente del front nos completa la url pero un componenete del back no lo hace.
      //   console.log(res);
      //   return res;

      await axios.post("/api/tasks", data);
    }
    router.push("/");
    router.refresh(); // Refresca la pantalla para que aparezcan los datos nuevos o editados
  });
  return (
    <section className="h-[calc(100vh-7rem)] flex items-center justify-center bg-gray-700">
      <form onSubmit={onSubmit} className="w-1/4">
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea:
        </label>
        <input
          type="text"
          placeholder="Escriba el título"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-q focus:ring-sky-500 focus:border-sky-500 text-black block mb-2 w-full"
          {...register("title")}
        />
        <label htmlFor="textarea">Descripción de la tarea:</label>
        <textarea
          placeholder="Escriba la descripción"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm
            focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-black block w-full"
          {...register("description")}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 px-3 py-1 rounded-md text-white mt-2"
          >
            {params.id ? "Actualizar" : "Generar"}
          </button>
          <button
            type="button"
            className="bg-red-500 px-3 py-1 rounded-md text-white mt-2"
            onClick={async () => {
              if (confirm("Do yo want to delete this task?")) {
                await axios.delete(`/api/tasks/${params.id}`);
                router.push("/");
                router.refresh();
              }
            }}
          >
            Eliminar
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewPage;
