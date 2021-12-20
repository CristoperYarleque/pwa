import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDatos } from "../services/Services"

export default function Search() {
  const [poke1, setPoke1] = useState([]);
  const { busqueda } = useParams();

  const getData1 = async () => {
    try {
      const dato1 = await obtenerDatos(busqueda)
      setPoke1(dato1);
    } catch (error) {
      throw error;
    }
  }
  
  useEffect(() => {
    getData1();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-10 col-lg-8">
          {poke1.name == busqueda ? (
              <div>
              <h1 className="text-center text-black">Pokemon Encontrado:</h1>
            <div className="card my-4 text-center text-white bg-dark">
              <div className="card-header ">
                <span className="fw-bold">Normal:</span>
                <img src={poke1.sprites.front_default} alt={poke1.name} />
                <span className="fw-bold">Shiny:</span>
                <img src={poke1.sprites.front_shiny} alt={poke1.name} />
              </div>
              <div className="cad-body bg-white text-dark">
                <h3 className="fw-bold">
                  {poke1.id}. {poke1.name.toUpperCase()}
                </h3>
              </div>
              <div className="card-footer">
                <h6 className="fw-bold">
                  Tipo:{" "}
                  {poke1.types.map((tipo, i) => (
                    <span key={i}>{tipo.type.name}</span>
                  ))}{" "}
                </h6>
                <h6 className="fw-bold">
                  Experiencia Base: {poke1.base_experience}
                </h6>
                <h6 className="fw-bold">Altura: {poke1.height}m</h6>
                <h6 className="fw-bold">Peso: {poke1.weight}kg</h6>
              </div>
            </div>
            </div>
          ) : (
              <div>
            <h1 className="text-center text-danger">POKEMON NO EXISTE</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
