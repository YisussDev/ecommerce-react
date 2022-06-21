import React from 'react'
import imgnext from '../images/icon-next.svg'
import  imgprev from '../images/icon-previous.svg'
import '../estilos/MostradorFlotante.css'

const MostradorFlotante = (props) => {

    const imagesPrueba = require.context('../images', true)


  return (
    <>
        <div className='mostrador_flotante_fondo' >
        </div>
        <div className="contenedor_mostrador_flotante">
      <div className='Mostrador_flotante' >
        
       
        <img src = {imagesPrueba(`./image-product-${props.imgMostrador}.jpg`)} alt="" id='mostradorImgflot'/>
        <div className="control_flotante">
            <div id="boton_flotantep" className='bprev_flotante' onClick={props.click}>
                <img src={imgprev} alt="" className='bprev_flotante'/>
            </div>
            
            <div id="boton_flotanten" className='bnext_flotante' onClick={props.click}>
                <img src={imgnext} alt="" className='bnext_flotante'/>
            </div>
            
        </div>
      </div>
        <div id='preloader_flotante'></div>
      <div className="barrafotos_pc_flotante">
        
        <img src={imagesPrueba(`./image-product-0.jpg`)} id='imag_1' className='imag_pc' alt="" />
        <img src={imagesPrueba(`./image-product-1.jpg`)} id='imag_2' className='imag_pc' alt="" />
        <img src={imagesPrueba(`./image-product-2.jpg`)} id='imag_3' className='imag_pc' alt="" />
        <img src={imagesPrueba(`./image-product-3.jpg`)} id='imag_4' className='imag_pc' alt="" />
      </div>
        </div>
        
    </>
    
    
  )
}

export default MostradorFlotante