import React from "react";
import { Link } from "react-router-dom";

const InicioPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-5">Intuito S.A.</h1>
      <div className="flex flex-col gap-4  mx-auto">
        <Link
          to="/disponibilidad-asientos"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl font-semibold">Asientos disponibles</h2>
          <p className="text-sm mt-2">
            Obtiene asientos disponibles y ocupados
          </p>
        </Link>
        <Link
          to="/inhabilitar-butaca"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl font-semibold">Inhabilitar asiento</h2>
          <p className="text-sm mt-2">Envía ID y devuelve asiento modificado</p>
        </Link>
        <Link
          to="/inhabilitar-cartelera"
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl font-semibold">Inhabilitar cartelera</h2>
          <p className="text-sm mt-2">Envía ID y devuelve clientes afectados</p>
        </Link>
        <Link
          to="/pelicula-genero-fecha"
          className="bg-zinc-500 hover:bg-zinc-600 px-4 py-2 rounded-md flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl font-semibold">Pelicula por genero</h2>
          <p className="text-sm mt-2">
            Devuelve reservas que coincidan con el genero y rango de fechas que
            seleccione
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InicioPage;
