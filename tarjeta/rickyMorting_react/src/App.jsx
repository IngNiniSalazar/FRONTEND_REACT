import { useState } from 'react'
import reactLogo from './assets/react.svg'
import todaFamilia   from './assets/familia.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>MI PRIMERA TARJETA DE REACT</h1>
        <img src={todaFamilia} classname="family"/>
      <p>
       
      </p>
        
      </div>
    
    </>
  )
}

export default App
