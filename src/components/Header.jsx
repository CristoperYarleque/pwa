// import { useRef, useContext, useState } from "react"

export default function Header() {
  // const [input,setInput] = useState("")
  // const buscar = useRef()
  // const navigate = useNavigate()

  // const eventoClick = () => {
  // 	navigate(`/search/${buscar.current.value}`)
  // 	setInput("")
  // }

  // const eventoEnter = (e) => {
  // 	if(e.key === "Enter"){
  // 	navigate(`/search/${buscar.current.value}`)
  // 	setInput("")
  // }
  // }

  // const totalCarrito = carrito.reduce((total, prod) => {
  //     return total + prod.cantidad;
  // }, 0);

  // const cambios = () => {
  // 	setInput(buscar.current.value)
  // }

  return (
    <div className="sticky-top">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar pokemon..."
          />
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
