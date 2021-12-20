import axios from "axios"

const URL = process.env.REACT_APP_API

const obtenerDatos = async (busqueda) => {
    try {
        const {data} = await axios.get(`${URL}pokemon/${busqueda}`)
        return data
    } catch (error) {
        throw error
    }
}

const obtenerDatosPorPagina = async (limite,pagina) => {
    try {
        const {data} = await axios.get(`${URL}pokemon?limit=${limite}&offset=${pagina}`)
        return data
    } catch (error) {
        throw error
    }
}

export { obtenerDatos,obtenerDatosPorPagina }