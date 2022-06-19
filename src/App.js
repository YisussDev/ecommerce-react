import { useState } from 'react';
import './App.css';
import Añadidor from './componentes/Añadidor';
import BarraNavegacion from './componentes/BarraNavegacion';
import Mostrador from './componentes/Mostrador';

function App() {

  const [valorp, setValorp] = useState(1);
  const [contCarrito, setContCarrito] = useState(0);
  const [imgActual, setImgActual] = useState(0)


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
        setImgActual(3);
      }else {
        let imagenAnterior = imgActual - 1;
        setImgActual(imagenAnterior);
      }
    }
    if(evento.target.id==='bnext'||evento.target.id==='bnextt'){
      if(imgActual===3){
        setImgActual(0);
      }else {
        let imagenAnterior = imgActual + 1;
        setImgActual(imagenAnterior);
      }
    }
    
    console.log(imgActual)
  }



  return (
    <div className="App"onClick={click}>
      <BarraNavegacion 
      contCarrito = {contCarrito}
      click = {click}
      />
      <Mostrador 
      click = {click}
      imgMostrador = {imgActual}
      />
      <Añadidor 
      click = {click}
      cantidad = {valorp}
      />
    </div>
  );
}

export default App;
