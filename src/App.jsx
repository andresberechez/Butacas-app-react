import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButacaProvider } from "./context/ButacaContext";
import AsientosPage from "./pages/AsientosPage";
import AsientoInhabilitadoPage from "./pages/AsientoInhabilitadoPage";
import CarteleraInhabilitadaPage from "./pages/CarteleraInhabilitadaPage";
import PeliculaPorGeneroYFecha from "./pages/PeliculaPorGeneroYFecha";
import InicioPage from "./pages/InicioPage";

const App = () => {
  return (
    <ButacaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route
            path="/pelicula-genero-fecha"
            element={<PeliculaPorGeneroYFecha />}
          />
          <Route path="/disponibilidad-asientos" element={<AsientosPage />} />
          <Route
            path="/inhabilitar-butaca"
            element={<AsientoInhabilitadoPage />}
          />
          <Route
            path="/inhabilitar-cartelera"
            element={<CarteleraInhabilitadaPage />}
          />
        </Routes>
      </BrowserRouter>
    </ButacaProvider>
  );
};

export default App;
