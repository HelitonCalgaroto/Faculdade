import React from "react";

class App extends React.Component
{

    constructor() {
      super()
      this.state = {
        sistolica: null,
        diastolica: null
      }
    }

    onChangeSistolica(event) {
        this.setState({
          sistolica: event.target.value
        })
    }

    onChangeDiastolica(event) {
        this.setState({
          diastolica: event.target.value
        })
    }

    onChangeInput(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    showResult() {
      if(this.state.result !== ''){
        return "Seu diagnóstico é: " + this.state.result
      } else {
        return null
      }
    }

  verificarPressao() {
    let resultadoPressao;
    const sistolica = this.state.sistolica
    const diastolica = this.state.diastolica

    if (sistolica < 130 && diastolica < 85) {
      resultadoPressao = "Normal."
    } else if (sistolica < 140 && diastolica < 90){
      resultadoPressao = "Normal - Limítrofe."
    } else if (sistolica < 160 && diastolica < 100){
      resultadoPressao = "Hipertensão Leve."
    } else if (sistolica < 180 && diastolica < 110){
      resultadoPressao = "Hipertensão Moderada."
    } else {
      resultadoPressao = "Hipertensão Grave."
    }

    this.setState({
      result: resultadoPressao
    })

  }
  
  render() {
    return(
      <div>

        <h1> Controle de Pressão Arterial</h1>

        Pressão Sistólica: <br/>
        <input type="number" name="sistolica" onChange={(event) => this.onChangeInput(event)}/> <br/> <br/>

        Pressão diastólica: <br/>
        <input type="number" name="diastolica" onChange={(event) => this.onChangeInput(event)}/> <br/> <br/>

        <input type="button" onClick={() => this.verificarPressao()} value = "Verificar" />

        <br/> <br/>

        {this.showResult()}

      </div>
    )
  }
}

export default App;
