import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [input,setInput] = useState("")
  const buscar = useRef()
  const navigate = useNavigate()

  const eventoClick = () => {
  	navigate(`/${buscar.current.value}`)
		setInput("")
  }

  const eventoEnter = (e) => {
  	if(e.key === "Enter"){
      navigate(`/${buscar.current.value}`)
      setInput("")
  }
  }

  const cambios = () => {
  	setInput(buscar.current.value)
  }

  return (
    <div className="sticky-top">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-black p-4">
          <input
            onKeyUp={eventoEnter}
            onChange={cambios}
            value={input}
            ref={buscar}
            type="text"
            className="form-control"
            placeholder="Buscar pokemon..."
          />
          <button onClick={eventoClick}>search</button>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-black">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <h1
          className="text-primary"
          style={{ position: "absolute", left: "40%" }}
        >
          POKEDEX
        </h1>
      </nav>

      {/* <header className="sticky-top row"> */}
      {/* <nav className="nav row"> */}
      {/* <input type="text" onKeyUp={eventoEnter} value={input} onChange={cambios} ref={buscar} className="form-control ms-2" placeholder="Buscar juego..."/> */}
      {/* <i onClick={eventoClick} className="bi bi-search lupa mt-2 ml-3"/> */}
      {/* </nav> */}
      {/* </header> */}
    </div>
  );
}
