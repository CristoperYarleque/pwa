import axios from "axios"

const URL = process.env.REACT_APP_API

const obtenerDatosPorPagina = async (limite,pagina) => {
    try {
        const {data} = await axios.get(`${URL}pokemon?limit=${limite}&offset=${pagina}`)
        return data
    } catch (error) {
        throw error
    }
}

export { obtenerDatosPorPagina }