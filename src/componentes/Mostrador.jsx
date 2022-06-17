import React from 'react'
import '../estilos/Mostrador.css'
import img1 from '../images/image-product-1.jpg'
import imgnext from '../images/icon-next.svg'
import  imgprev from '../images/icon-previous.svg'

const Mostrador = () => {
  return (
    <div className='Mostrador'>
       
        <img src={img1} alt="" />
        <div className="boton" id='bprev'>
            <img src={imgprev} alt="" />
        </div>
        <div className="boton" id='bnext'>
            <img src={imgnext} alt="" />
        </div>
    </div>
  )
}

export default Mostrador