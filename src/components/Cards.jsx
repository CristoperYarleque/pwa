import { obtenerDatosPorPagina } from "../services/Services";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

export default function Cards() {
  const [poke, setPoke] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [limite, setLimite] = useState(9);

  const getData = async () => {
    try {
      const obtDatos = await obtenerDatosPorPagina(limite, pagina);
      for (let i = 0; i < obtDatos.results.length; i++) {
        const data = await axios.get(obtDatos.results[i].url);
        setPoke((prevArray) => [...prevArray, data.data]);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, [pagina]);

  return (
    <div className="container-fluid">
      <div className="row">
        {poke.map((prod, i) => (
          <Card prod={prod} key={i} />
        ))}
        <div className="text-center mb-5">
          <button
            className="btn btn-secondary mb-5"
            onClick={() => setPagina(pagina + limite)}
          >
            SIGUIENTE
          </button>
        </div>
      </div>
    </div>
  );
}
