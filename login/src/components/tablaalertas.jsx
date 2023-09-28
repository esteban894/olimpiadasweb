const GridComponent = () => {
  const data = [
    {
      fecha: "26/09/2023",
      origen: "Sala de emergencias",
      hora: "09:00 AM",
      atendidaPor: " Victor Aramayo",
    },
    { fecha: "12/05/2023", origen: "Entrada", hora: "10:30 AM", atendidaPor: "Agustim Flores" },
    {
      fecha: "09/04/2023",
      origen: " Estacionamiento",
      hora: "11:45 AM",
      atendidaPor: "Maria Guzman",
    },
    { fecha: "10/07/2023", origen: "Salida", hora: "02:15 PM", atendidaPor: "Hugo Estrada" },
    {
      fecha: "10/07/2023",
      origen: "sala de intenos",
      hora: "17:15 PM",
      atendidaPor: "Matias Olivera",
    },

    // Agrega más datos según sea necesario
  ];

  return (
    <div className="center-container">
      <h1> Registro de alertas</h1>
      <table className="grid-container">
        <thead>
          <tr className="grid-header">
            <th>Fecha</th>
            <th>Lugar de Origen</th>
            <th>Hora</th>
            <th>Atendida Por</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="grid-row" key={index}>
              <td>{item.fecha}</td>
              <td>{item.origen}</td>
              <td>{item.hora}</td>
              <td>{item.atendidaPor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridComponent;
