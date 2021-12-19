import React from 'react'

export default function Card({prod}) {
    return (
        <div className='col-sm-10 col-md-10 col-lg-4'>
            <div className='card my-4 text-center text-white bg-dark'>
            <div className='card-header '>
                <span className='fw-bold'>Normal:</span>
                <img src={prod.sprites.front_default} alt={prod.name} />
                <span className='fw-bold'>Shiny:</span>
                <img src={prod.sprites.front_shiny} alt={prod.name} />
            </div>
            <div className='cad-body bg-white text-dark'>
                <h3 className='fw-bold'>{prod.id}. {prod.name.toUpperCase()}</h3>
            </div>
            <div className='card-footer'>
                <h6 className='fw-bold'>Tipo: {prod.types.map((tipo,i) => (<span key={i}>{tipo.type.name}</span>))} </h6>
                <h6 className='fw-bold'>Experiencia Base: {prod.base_experience}</h6>
                <h6 className='fw-bold'>Altura: {prod.height}m</h6>
                <h6 className='fw-bold'>Peso: {prod.weight}kg</h6>
            </div>
            </div>
        </div>
        
    )
}

