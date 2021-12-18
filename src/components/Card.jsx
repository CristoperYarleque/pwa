import React from 'react'

export default function Card({prod}) {
    return (
        <div className='card m-4 text-center text-white bg-dark'>
            <div className='card-header d-flex justify-content-center'>
                {/* <h4>{prod.id}</h4> */}
                <span className='fw-bold'>Normal:</span>
                <img src={prod.sprites.front_default} alt={prod.name} />
                <span className='fw-bold'>Shiny:</span>
                <img src={prod.sprites.front_shiny} alt={prod.name} />
            </div>
            <div className='cad-body bg-white text-dark'>
                <h3 className='fw-bold'>{prod.id}. {prod.name.toUpperCase()}</h3>
            </div>
            <div className='card-footer'>
                <h6 className='fw-bold'>Tipo: {prod.types.map((tipo,i) => (<>{tipo.type.name} </>))} </h6>
                <h6 className='fw-bold'>Experiencia Base: {prod.base_experience}</h6>
                <h6 className='fw-bold'>Altura: {prod.height}m</h6>
                <h6 className='fw-bold'>Peso: {prod.weight}kg</h6>
            </div>
        </div>
    )
}

