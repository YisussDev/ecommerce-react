import React from 'react'
import '../estilos/Mostrador.css'
import imgnext from '../images/icon-next.svg'
import  imgprev from '../images/icon-previous.svg'


const Mostrador = (props) => {
const imagesPrueba = require.context('../images', true)


  return (
    <div className="contenedor_mostrador">
      <div className='Mostrador' >
        
       
        <img src = {imagesPrueba(`./image-product-${props.imgMostrador}.jpg`)} alt="" id='mostradorImg'/>
        <div className="control">
            <div className="boton" id='bprev' onClick={props.click}>
                <img src={imgprev} alt="" id='bprevv'/>
            </div>
            
            <div className="boton" id='bnext' onClick={props.click}>
                <img src={imgnext} alt="" id='bnextt'/>
            </div>
            
        </div>
      </div>
        <div id='preloader'></div>
      <div className="barrafotos_pc">
        
        <img src={imagesPrueba(`./image-product-0.jpg`)} id='imag_11' className='imag_pc' alt="" onClick={props.click}/>
        <img src={imagesPrueba(`./image-product-1.jpg`)} id='imag_22' className='imag_pc' alt="" onClick={props.click}/>
        <img src={imagesPrueba(`./image-product-2.jpg`)} id='imag_33' className='imag_pc' alt="" onClick={props.click}/>
        <img src={imagesPrueba(`./image-product-3.jpg`)} id='imag_44' className='imag_pc' alt="" onClick={props.click}/>
      </div>
    </div>
    
  )
}

export default Mostrador