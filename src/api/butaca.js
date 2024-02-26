import axios from "./axios";

//Devuelve reservas buscando por genero de pelicula y rango de fecha
export const obtienePeliculaPorGeneroYFechaRequest = (
  movie,
  startDate,
  endDate
) => axios.get(`/butaca/${movie}/${startDate}/${endDate}`);
//trae asientos disponibles y ocupados
export const DisponibilidadAsientosRequest = () =>
  axios.get("/butaca/disponibilidad");
//inhabilita butaca y cancela reserva b1
export const inhabilitarButacaRequest = (id) =>
  axios.get(`/billboard/inhabilitar/${id}`);
//inhabilita cartelera
export const inhabilitarCarteleraRequest = (id) =>
  axios.get(`/billboard/inhabilitar-cartelera/${id}`);
