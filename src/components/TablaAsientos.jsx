//Probando
const TablaAsientos = ({ asientos, index }) => {
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
              <tr key={index}>
                <td className="px-4 py-2 border">{index}</td>
                <td className="px-4 py-2 border">{asientos.number} </td>
                <td className="px-4 py-2 border">{asientos.rowNumber}</td>
                <td className="px-4 py-2 border">{asientos.roomName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaAsientos;
