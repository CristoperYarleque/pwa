import { obtenerDatosPorPagina } from "../services/Services"
import { useState,useEffect } from "react"
import Card from "./Card"
import axios from "axios"

export default function Cards() {
    const [poke,setPoke] = useState([])
    const [pagina,setPagina] = useState(0)
    const [limite,setLimite] = useState(9)
    
    const getData = async () => {
        try {
            const obtDatos = await obtenerDatosPorPagina(limite,pagina)
            for(let i=0;i<obtDatos.results.length;i++){
                const data = await axios.get(obtDatos.results[i].url)
                setPoke(prevArray => [...prevArray,data.data])
            } 
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getData()
    },[pagina])

    return (
        <div className="row d-flex justify-content-center">
            {poke.map((prod,i) => (
                <div className="col-sm-10 col-md-6 col-lg-4" key={i}>
                <Card prod={prod}/>
                </div>
            ))}
            <div className="text-center mb-4">
            <button className="btn btn-secondary" onClick={() => setPagina(pagina + limite)}>SIGUIENTE</button>
            </div>
        </div>
    )
}
