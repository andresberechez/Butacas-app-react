import { useEffect } from "react";
import { useButacas } from "../context/ButacaContext";
import { Link } from "react-router-dom";
import TablaAsientos from "../components/TablaAsientos";

const AsientosPage = () => {
  const { asientos, DisponibilidadAsientos } = useButacas();

  useEffect(() => {
    DisponibilidadAsientos();
  }, []);

  //========================
  // Le agregué index porque no devolví el ID desde la API
  //========================

  const asientosDisponibles = () => {
    try {
      const disponibles = asientos[0].disponibles;

      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col mt-4">
            <div className="w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Asiento Disponible</th>
                    <th className="px-4 py-2 text-left">Fila</th>
                    <th className="px-4 py-2 text-left">Sala</th>
                  </tr>
                </thead>
                <tbody>
                  {disponibles.map((e, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border">{index}</td>
                      <td className="px-4 py-2 border">{e.number} </td>
                      <td className="px-4 py-2 border">{e.rowNumber}</td>
                      <td className="px-4 py-2 border">{e.roomName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };

  const asientosOcupados = () => {
    try {
      const ocupados = asientos[0].ocupadas;

      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col mt-4">
            <div className="w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">ID</th>
                    <th className="px-4 py-2 text-left">Asiento Disponible</th>
                    <th className="px-4 py-2 text-left">Fila</th>
                    <th className="px-4 py-2 text-left">Sala</th>
                  </tr>
                </thead>
                <tbody>
                  {ocupados.map((e, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border">{index}</td>
                      <td className="px-4 py-2 border">{e.number} </td>
                      <td className="px-4 py-2 border">{e.rowNumber}</td>
                      <td className="px-4 py-2 border">{e.roomName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const asientosDisponibles2 = () => {
  //   try {
  //     const disponibles = asientos[0].disponibles;

  //     return (
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
  //         {disponibles.map((disponibles, index) => (
  //           <TablaAsientos asientos={disponibles} key={index} />
  //           // <TablaCabecera/>
  //           // <TablaCuerpo asientos={disponibles}/>
  //         ))}
  //       </div>
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (asientos.length === 0) return <h1>Cargando asientos...</h1>;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mt-8">
        <Link
          to={"/"}
          className="bg-blue-500 hove:bg-blue-600 px-4 py-2 rounded-md mb-16"
        >
          Inicio
        </Link>
      </div>
      {asientosDisponibles()}
      {/* {asientosDisponibles2()} */}
      {asientosOcupados()}
    </div>
  );
};

export default AsientosPage;
