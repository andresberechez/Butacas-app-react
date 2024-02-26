import { useButacas } from "../context/ButacaContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AsientoInhabilitadoPage = () => {
  const { asientoInhabilitado, inhabilitarButaca } = useButacas();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    inhabilitarButaca(data.id);
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
        <div className="max-w-md w-full p-10 rounded-md border-4 border-blue-500 border-solid border-l-0 border-r-0">
          <h1 className="text-2xl font-bold my-2 text-center">
            Inhabilitar asiento por ID
          </h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("id", { required: true })}
              className="w-full bg-zinc-300 text-black px-4 py-2 rounded-md my-2"
              placeholder="Ingrese ID"
            />
            {errors.id && <p className="text-red-500">Id es requerido</p>}
            <button
              type="submit"
              className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
            >
              Inhabilitar
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col mt-2">
          <div className="w-full overflow-x-auto min-width-[600px]">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">No. Asiento</th>
                  <th className="px-4 py-2 text-left">No. Sala</th>
                  <th className="px-4 py-2 text-left">No. Fila</th>
                </tr>
              </thead>
              <tbody>
                {asientoInhabilitado && (
                  <tr key={asientoInhabilitado.id}>
                    <td className="px-4 py-2 border">
                      {asientoInhabilitado.number}
                    </td>
                    <td className="px-4 py-2 border">
                      {asientoInhabilitado.roomName}
                    </td>
                    <td className="px-4 py-2 border">
                      {asientoInhabilitado.rowNumber}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsientoInhabilitadoPage;
