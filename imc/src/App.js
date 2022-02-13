import './app.css'
import { useState } from 'react'

export default function App(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  function calcularImc(){
    const alt = altura / 100
    const imc = peso / (alt * alt)
    if(imc < 18.6){
      setMensagem(`você está abaixo do peso! ${imc.toFixed(2)}`)
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem(`Parabéns, peso ideal! ${imc.toFixed(2)}`)
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem(`você está levemente acima do peso! ${imc.toFixed(2)}`)
    }else if(imc > 34.9){
      setMensagem(`você está ACIMA do peso! ${imc.toFixed(2)}`)
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>vamos calcular seu IMC</span>

      <div className="area-input">
        <input type="text"
        placeholder="peso em (kg)"
        value={peso}
        onChange={(event) => setPeso(event.target.value)}
        />
        
        <input type="text"
        placeholder="altura em (cm)"
        value={altura}
        onChange={(event) => setAltura(event.target.value)}
        />

        <button onClick={calcularImc}>
          calcular
        </button>
      </div>
      <h3>{mensagem}</h3>
    </div>
  )
}