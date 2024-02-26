import { createContext, useContext, useState } from "react";
import {
  DisponibilidadAsientosRequest,
  inhabilitarButacaRequest,
  inhabilitarCarteleraRequest,
  obtienePeliculaPorGeneroYFechaRequest,
} from "../api/butaca";

const ButacaContext = createContext();

export const useButacas = () => {
  const context = useContext(ButacaContext);
  if (!context) {
    throw new Error("useButacas debe ser usado con ButacaProvider");
  }
  return context;
};

export const ButacaProvider = ({ children }) => {
  const [asientos, setAsientos] = useState([]);
  const [asientoInhabilitado, setAsientoInhabilitado] = useState({});
  const [clientesAfectado, setclientesAfectado] = useState([]);
  const [peliculaPorGeneroYFecha, setPeliculaPorGeneroYFecha] = useState([]);

  //Get de asientos disponibles y ocupados
  const DisponibilidadAsientos = async () => {
    try {
      const res = await DisponibilidadAsientosRequest();
      setAsientos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Devuelve asiento inhabilitado
  const inhabilitarButaca = async (id) => {
    try {
      const res = await inhabilitarButacaRequest(id);
      setAsientoInhabilitado(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Devuelve clientes afectados
  const inhabilitarCartelera = async (id) => {
    try {
      const res = await inhabilitarCarteleraRequest(id);
      setclientesAfectado(res.data[0].clientesAfectados);
    } catch (error) {
      console.log(error);
    }
  };

  //Devuelve reservas buscando por genero de pelicula y rango de fecha
  const obtienePeliculaPorGeneroYFecha = async (
    movieGenre,
    startDate,
    endDate
  ) => {
    try {
      const res = await obtienePeliculaPorGeneroYFechaRequest(
        movieGenre,
        startDate,
        endDate
      );
      setPeliculaPorGeneroYFecha(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ButacaContext.Provider
      value={{
        asientos,
        asientoInhabilitado,
        clientesAfectado,
        peliculaPorGeneroYFecha,
        DisponibilidadAsientos,
        inhabilitarButaca,
        inhabilitarCartelera,
        obtienePeliculaPorGeneroYFecha,
      }}
    >
      {children}
    </ButacaContext.Provider>
  );
};
