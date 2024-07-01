//import { useState } from 'react'
//import reactLogo from './assets/react.svg'

//import './App.css'
import React from 'react';
import Titulo from './component/Titulo';
import Image from './component/Imagen';
import Details from './component/Descripcion';
import Artista   from './assets/shaki.jpg'


//function App() {
 // const [count, setCount] = useState(0)

 // return (
   // <>
   //   <div>
   //   <h1>MI PRIMERA TARJETA DE REACT</h1>
   //     <img src={todaFamilia} classname="family"/>
   //   <p>
       
   //   </p>
        
    //  </div>
    
   // </>
  //)
//}

function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div>
      {/* Titulo de el artista/personaje */}
      <Titulo title={'SHAKIRA'} />
      {/* Imagen de el artista/personaje */}
      <Image
        url={Artista} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'POP'} 
        status={'ARTISTA DEL MOMENTO'} 
      />
    </div>
  );
}


export default App
