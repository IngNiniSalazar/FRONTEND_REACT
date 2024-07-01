import {useState, useEffect} from 'react'
import Artista   from './assets/s1.jpg'
import Artista2   from './assets/s2.jpg'
import Artista4   from './assets/s4.jpg'
import Card from './component/card'
import './App.css'


function App() {
 const[saldo, setSaldo]=useState(1000)
useEffect(()=>{
  console.log('se actualizo el saldo')
}, [saldo])


  return (
    <>
   
      <Card Titulo ="primera imagen" imagen={Artista}/>
      <Card/>
      <Card Titulo ="tercera imagen" imagen={Artista2}/>
      <Card Titulo ="cuarta imagen" imagen={Artista4}/>
      <p>TU SALDO ES :{saldo}</p>
      <button onClick={() => setSaldo(saldo +100)}>Agregar Saldo</button>
    </>
  );
}


export default App
