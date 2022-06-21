import { useState } from 'react';
import './App.css';
import Añadidor from './componentes/Añadidor';
import BarraNavegacion from './componentes/BarraNavegacion';
import Mostrador from './componentes/Mostrador';
import MostradorFlotante from './componentes/MostradorFlotante';

function App() {

  const [valorp, setValorp] = useState(1);
  const [contCarrito, setContCarrito] = useState(0);
  const [imgActual, setImgActual] = useState(0)
  const [flotante, setFlotante] = useState(false)

  const iniciarPreloader = () => {
    let mostrador = document.getElementById('mostradorImg')
    mostrador.style = 'display:none'
    let preloader =document.getElementById('preloader')
    preloader.style = 'display:flex';
  }
  const terminarPreloader = () => {
    let preloader2 = document.getElementById('preloader')
    preloader2.style = 'display:none';
    let mostrador2 = document.getElementById('mostradorImg')
    mostrador2.style = 'display:block'
  }
  const iniciarPreloaderflot = () => {
    let mostradorflot = document.getElementById('mostradorImgflot')
    mostradorflot.style = 'display:none';
    let preloaderflot =document.getElementById('preloader_flotante')
    preloaderflot.style = 'display:flex';
  }
  const terminarPreloaderflot = () => {
    let preloaderflot2 = document.getElementById('preloader_flotante')
    preloaderflot2.style = 'display:none';
    let mostradorflot2 = document.getElementById('mostradorImgflot')
    mostradorflot2.style = 'display:block'
  }
  const click = (evento) => {
    if(evento.target.className!=="BarraLateral"&&evento.target.id!=="botonMostrar"&&evento.target.className!=="BarraNavegacion_boton img_adjust size_adjust"&&evento.target.id!=='rt'){
      let cerrarMenu = document.getElementById('BarraL');
      cerrarMenu.style='transform: translateX(-110%)';
    }
    if(evento.target.id==='bsumar'||evento.target.id==='isumar'){
      let aumento = valorp + 1;
    setValorp(aumento)
    }
    if((evento.target.id==='brestar'||evento.target.id==='irestar')&&(valorp>1)){
      let decremento = valorp - 1;
      setValorp(decremento)
    }
    if(evento.target.id==='añadirCarrito'||evento.target.className==='ccarrito'){
      let addCarrito = valorp + contCarrito;
      setContCarrito(addCarrito);
      setValorp(1);
    }
    if(evento.target.id==='botonCarrito'||evento.target.id==='botonCarritoo'){
      let mostrarCarrito = document.getElementById('carritoFlotante');
      mostrarCarrito.style = 'transform: translateY(0%)'
    }
    if(evento.target.id!=='botonCarrito'&&evento.target.id!=='botonCarritoo'&&evento.target.id!=='carritoFlotante'&&evento.target.className!=='cCarritoFlotante'){
      let cerrarCarrito = document.getElementById('carritoFlotante');
      cerrarCarrito.style = 'transform: translateY(-150%)';
    }
    if(evento.target.id==='borrarTarea'||evento.target.id==='ibTarea'){
      setContCarrito(0);
    }
    if(evento.target.id==='bprev'||evento.target.id==='bprevv'){
      
      if(imgActual===0){
        iniciarPreloader();
        setImgActual(3);
        setTimeout(()=>terminarPreloader(),500);
      }else {
        iniciarPreloader();
        let imagenAnterior = imgActual - 1;
        setImgActual(imagenAnterior);
        setTimeout(()=>terminarPreloader(),500)
      }
    }
    if(evento.target.id==='bnext'||evento.target.id==='bnextt'){
      if(imgActual===3){
        iniciarPreloader();
        setImgActual(0);
        setTimeout(()=>terminarPreloader(),500)
      }else {
        iniciarPreloader();
        let imagenAnterior = imgActual + 1;
        setImgActual(imagenAnterior);
        setTimeout(()=>terminarPreloader(),500)
      }
      
    }
    if(evento.target.className==='imag_pc'){
      setFlotante(true);
    }
    if(evento.target.className==="mostrador_flotante_fondo"){
      setFlotante(false)
    }
    if(evento.target.className==="bprev_flotante"){
      
      if(imgActual===0){
        iniciarPreloaderflot();
        setImgActual(3);
        setTimeout(()=>terminarPreloaderflot(),500);
      }else {
        iniciarPreloaderflot();
        let imagenAnterior = imgActual - 1;
        setImgActual(imagenAnterior);
        setTimeout(()=>terminarPreloaderflot(),500)
      }
    }
    if(evento.target.className==='bnext_flotante'){
      if(imgActual===3){
        iniciarPreloaderflot();
        setImgActual(0);
        setTimeout(()=>terminarPreloaderflot(),500)
      }else {
        iniciarPreloaderflot();
        let imagenAnterior = imgActual + 1;
        setImgActual(imagenAnterior);
        setTimeout(()=>terminarPreloaderflot(),500)
      }
    }
    if(evento.target.className==='imag_pc'){
      if(evento.target.id==='imag_1'||evento.target.id==='imag_11'){
        console.log('ok')
        setImgActual(0)
      }
      if(evento.target.id==='imag_2'||evento.target.id==='imag_22'){
        
        setImgActual(1)
      }
      if(evento.target.id==='imag_3'||evento.target.id==='imag_33'){

        setImgActual(2)

        
      }
      if(evento.target.id==='imag_4'||evento.target.id==='imag_44'){

        setImgActual(3)
      }
    }
    console.log(evento.target.id)
  }



  return (
    <div className="App"onClick={click}>
      {
        flotante?(<MostradorFlotante 
      click = {click}
      imgMostrador = {imgActual}/>):(null)
      }
      <BarraNavegacion 
      contCarrito = {contCarrito}
      click = {click}
      />
      <div className='Contenedor_muestras'>
          <Mostrador 
      click = {click}
      imgMostrador = {imgActual}
      />
      
      <Añadidor 
      click = {click}
      cantidad = {valorp}
      />
      </div>
      
    </div>
  );
}

export default App;
