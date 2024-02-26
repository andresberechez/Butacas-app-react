import { useButacas } from "../context/ButacaContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const PeliculaPorGeneroYFecha = () => {
  const { peliculaPorGeneroYFecha, obtienePeliculaPorGeneroYFecha } =
    useButacas();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const { movieGenre, startDate, endDate } = data;
    obtienePeliculaPorGeneroYFecha(movieGenre, startDate, endDate);
  });
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-4">
          <Link
            to={"/"}
            className="bg-blue-500 hove:bg-blue-600 px-4 py-2 rounded-md mb-16"
          >
            Inicio
          </Link>
        </div>
      </div>
      <div className="flex h-[calc(100vh-500px)] items-center justify-center">
        <div className=" max-w-md w-full p-10 rounded-md border-4 border-blue-500 border-solid border-l-0 border-r-0">
          <h1 className="text-2xl font-bold my-2 text-center">
            Buscar pelicula por genero
          </h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("movieGenre", { required: true })}
              className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2"
              placeholder="Ingrese genero de pelicula"
            />
            {errors.id && <p className="text-red-500">Id es requerido</p>}
            <input
              type="date"
              {...register("startDate", { required: true })}
              className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2"
              placeholder="Ingrese fecha de inicio"
            />
            {errors.id && <p className="text-red-500">Id es requerido</p>}
            <input
              type="date"
              {...register("endDate", { required: true })}
              className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2"
              placeholder="Ingrese fecha de fin"
            />
            {errors.id && <p className="text-red-500">Id es requerido</p>}
            <button
              type="submit"
              className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <h1 className="text-2xl font-bold my-2 text-center">
        Reservas filtradas
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col mt-2">
          <div className="w-full overflow-x-auto min-width-[600px]">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">ID Cliente</th>
                  <th className="px-4 py-2 text-left">Cliente</th>
                  <th className="px-4 py-2 text-left">ID Asiento</th>
                  <th className="px-4 py-2 text-left">Asiento</th>
                  <th className="px-4 py-2 text-left">ID Cartelera</th>
                  <th className="px-4 py-2 text-left">Cartelera</th>
                  <th className="px-4 py-2 text-left">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {peliculaPorGeneroYFecha.map((e) => (
                  <tr key={e.id}>
                    <td className="px-4 py-2 border">{e.customerId}</td>
                    <td className="px-4 py-2 border">{e.customer}</td>
                    <td className="px-4 py-2 border">{e.seatId}</td>
                    <td className="px-4 py-2 border">{e.seat}</td>
                    <td className="px-4 py-2 border">{e.billboardId}</td>
                    <td className="px-4 py-2 border">{e.billboard}</td>
                    <td className="px-4 py-2 border">{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeliculaPorGeneroYFecha;
