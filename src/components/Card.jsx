import React from 'react'

export const Card = ({codigo, nombre}) => {
    const imagenDefault = (e) =>{
        e.target.src =  'https://farmaprontoneza.com/image/predeterminada.jpg' 
    }
  return (
    <div className='card-product' data-aos="flip-left" key={codigo}>
        <div className='imagen-product'>
            <img loading="lazy" onError={imagenDefault} src={'https://farmaprontoneza.com/image/' + parseInt(codigo, 10) + '.jpg'} alt={nombre} />
        </div>
        <div className='container-info'>
            <h4>{nombre}</h4>
        </div>
    </div>
  )
}
