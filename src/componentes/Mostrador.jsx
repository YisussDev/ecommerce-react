import React from 'react'
import '../estilos/Mostrador.css'
import imgnext from '../images/icon-next.svg'
import  imgprev from '../images/icon-previous.svg'


const Mostrador = (props) => {
const imagesPrueba = require.context('../images', true)


  return (
    <div className='Mostrador' >
      <div id='preloader'></div>
       
        <img src = {imagesPrueba(`./image-product-${props.imgMostrador}.jpg`)} alt="" id='mostradorImg'/>
        <div className="boton" id='bprev' onClick={props.click}>
            <img src={imgprev} alt="" id='bprevv'/>
        </div>
        <div className="boton" id='bnext' onClick={props.click}>
            <img src={imgnext} alt="" id='bnextt'/>
        </div>
    </div>
  )
}

export default Mostrador