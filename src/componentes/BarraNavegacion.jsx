import React from 'react';
import '../estilos/BarraNavegacion.css';
import imenu from '../images/icon-menu.svg';
import logo from '../images/logo.svg';
import carrito from '../images/icon-cart.svg'
import imguser from '../images/image-avatar.png'

const BarraNavegacion = () => {
    const mostrarMenu = () =>{
        let mostrarM = document.getElementById('BarraL');
        mostrarM.style='transform: translateX(0%)';
    }

  return (
    <>
    <div className='BarraNavegacion'>
        <div className='BarraNavegacion_boton img_adjust size_adjust' onClick={mostrarMenu}>
            <img src={imenu} alt="" id='rt'/>
        </div>
        <div className='BarraNavegacion_logo'>
            <img src={logo} alt="" />
        </div>
        <div className='BarraNavegacion_carrito img_adjust size_adjust'>
            <img src={carrito} alt="" />
        </div>
        <div className='BarraNavegacion_perfil img_adjust size_adjust'>
            <img src={imguser} alt="" />
        </div>

    </div>
    <div className='BarraLateral' id='BarraL'>
        <ul>
            <li>Collections</li>
            <li>Mens</li>
            <li>Womens</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    </>
    
  )
}

export default BarraNavegacion