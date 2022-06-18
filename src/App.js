import { useState } from 'react';
import './App.css';
import Añadidor from './componentes/Añadidor';
import BarraNavegacion from './componentes/BarraNavegacion';
import Mostrador from './componentes/Mostrador';

function App() {

  const [valorp, setValorp] = useState(1);

  const tocar = evento =>{
    if(evento.target.className!=="BarraLateral"&&evento.target.id!=="botonMostrar"&&evento.target.className!=="BarraNavegacion_boton img_adjust size_adjust"&&evento.target.id!=='rt'){
      let cerrarMenu = document.getElementById('BarraL');
      cerrarMenu.style='transform: translateX(-110%)';
    }
  }

  const click = (evento) => {
    if(evento.target.id==='bsumar'||evento.target.id==='isumar'){
      let aumento = valorp + 1;
    setValorp(aumento)
    }
    if((evento.target.id==='brestar'||evento.target.id==='irestar')&&(valorp>=1)){
      let decremento = valorp - 1;
      setValorp(decremento)
    }
    

  }



  return (
    <div className="App"onClick={tocar}>
      <BarraNavegacion />
      <Mostrador />
      <Añadidor 
      click = {click}
      cantidad = {valorp}
      />
    </div>
  );
}

export default App;
