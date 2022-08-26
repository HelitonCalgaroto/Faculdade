import React from "react";

class App extends React.Component
{

    constructor() {
      super()
      this.state = {
        temperatura: null,
        opcao: "F",
        scalaResultado: null
      }
    }

    onChangeInput(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    showResult() {
      if(this.state.scalaResultado !== ''){
        return this.state.scalaResultado
      } else {
        return null
      }
    }

  converterTemperatura() {
    let temperaturaConvertida;
    const temperatura = this.state.temperatura
    let tipoTemperatura = ""

    if(this.state.opcao === "C"){
      temperaturaConvertida = (temperatura - 32) / 1.8
      tipoTemperatura = "Cº"
    } else {
      temperaturaConvertida = (temperatura * 1.8) + 32
      tipoTemperatura = "Fº"
    }

    this.setState({
      scalaResultado: "A temperatura é de "+ temperaturaConvertida + tipoTemperatura
    })

  }
  
  render() {
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
}

export default App;
