import React from 'react'
import '../estilos/TareasCarrito.css'
import idelete from '../images/icon-delete.svg';
import mini1 from '../images/mini1.jpg'

const TareasCarrito = (props) => {
  return (
    <>
    <div id='TareasCarrito' className='cCarritoFlotante'>
        <div id='imagenTarea'className='cCarritoFlotante'>
            <img src={mini1} alt="" className='cCarritoFlotante'/>
        </div>
        <div id="infoTarea" className='cCarritoFlotante'>
            <h2 className='cCarritoFlotante'>Zapatos prueba</h2>
            <p className='cCarritoFlotante'>$125.00 x {props.cantidadTotal}   <strong>${125.00*props.cantidadTotal}</strong></p>
        </div>
        <div id='borrarTarea' className='cCarritoFlotante' >
            <img src={idelete} alt=""  className='cCarritoFlotante'id='ibTarea'/>
        </div>
    </div>
    <div id='Comprar'>Comprar</div>
    </>
    
  )
}

export default TareasCarrito