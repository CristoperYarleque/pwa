import { useState } from "react"

export default function App() {
  const [contador,setContador] = useState(0)

  return (
    <div>
      <h1>Empezando En PWA</h1>
      <h3>{contador}</h3>
      <button onClick={() => {
        setContador(contador + 1)
      }}>aumentar</button>
      <button onClick={() => {
        setContador(contador - 1)
      }}>disminuir</button>      
    </div>
  )
}

