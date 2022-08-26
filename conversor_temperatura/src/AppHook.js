import { useState } from "react"

const AppHook = () => {
    const [temperatura, setTemperatura] = useState('')
    const [opcao, setOpcao] = useState('')
    const [resultado, setResultado] = useState('')

    const converterTemperatura = () => {
        let temperaturaConvertida;
        let tipoTemperatura = ""
    
        if(opcao === "C"){
          temperaturaConvertida = (temperatura - 32) / 1.8
          tipoTemperatura = "Cº"
        } else {
          temperaturaConvertida = (temperatura * 1.8) + 32
          tipoTemperatura = "Fº"
        }
        setResultado(temperaturaConvertida + tipoTemperatura)
      }

    return(
    <div>

        <h1> Conversor de temperatura</h1>

        Informe a temperatura: <br/>
        <input type="number" name="temperatura" onChange={(event) => this.onChangeInput(event)}/>

        <input type="radio" name="opcao" value = "F"
                checked={this.state.opcao === "F"} 
                onChange={event => this.onInputChanged(event)}/> Fahrenheint Fº

        <input type="radio" name="opcao" value = "C" 
                checked={this.state.opcao === "C"} 
                onChange={event => this.onChangeInput(event)}/> Celsius Cº

        <br/> <br/>

        <input type="button" onClick={() => this.converterTemperatura()} value = "Converter" />

        <br/> <br/>

        {this.showResult()}

    </div>
    )
}

export default AppHook;