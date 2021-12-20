import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [input,setInput] = useState()
  const buscar = useRef()
  const navigate = useNavigate()

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
    </div>
  );
}
