import React from 'react'
import { IoRemoveSharp, IoAdd  } from "react-icons/io5";


export const CardProduct = ({product, cart, addToCart, removeFromCart}) => {

    let agregado = cart.find((item) => parseInt(item.codigo) === parseInt(product.codigo));
    
  return (
    <div className="card">
        <div className="imagen">
            <img src={'https://farmaprontoneza.com/image/'+ parseInt(product.codigo) + '.jpg'} />
        </div>
        <div className="informacion">
            <h2>{product.nombre}</h2>
            <p className="precio-anterior">$ {product.precio.toFixed(2)}</p>
            <p className="precio-nuevo">$ {product.oferta.toFixed(2)}</p>
            {
                agregado ? 
                <div className='content-buttons'>
                    <button className='btn-control' onClick={() => removeFromCart(product)}><IoRemoveSharp /></button>
                    <span>{agregado.quantity}</span>
                    <button className='btn-control' onClick={() => addToCart(product)}><IoAdd /></button>
                </div> 
                : <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
            }
            
        </div>
    </div>
  )
}
