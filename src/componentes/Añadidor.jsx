import React from 'react'
import '../estilos/Añadidor.css'
import bres from '../images/icon-minus.svg'
import bsum from '../images/icon-plus.svg'
import carrito from '../images/icon-cart.svg'


const Añadidor = (props) => {


  return (
    <div className='Añadidor'>
        <h3><strong>SNEAKER COMPANY</strong></h3>
        <h2><strong>Fall Limited Edition Sneakers</strong></h2>
        <p>These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='Añadidor_valores'>
            <h2><strong>$125.00</strong></h2>
            <span className='Añadidor_valores_descuento'>50%</span>
            <span className='Añadidor_valores_original'>$250.00</span>
        </div>
        <div className='Añadidor_aumentador'>
            <div className='boton2' id='brestar' onClick={props.click}>
                <img src={bres} alt="" id='irestar'/>
            </div>
            <p id='cantidad'>{props.cantidad}</p>
            <div className='boton2' id='bsumar' onClick={props.click}>
                <img src={bsum} alt="" id='isumar'/>
            </div>

        </div>
        <div className='Añadidor_carrito'>
            <span>
                <img src={carrito} alt="" />
            </span>
            <strong>Add to Cart</strong>
        </div>

    </div>
  )
}

export default Añadidor