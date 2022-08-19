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

  verificarPressao() {
    let resultadoPressao;
    const sistolica = this.state.sistolica
    const diastolica = this.state.diastolica

    if (sistolica < 130 && diastolica < 85) {
      resultadoPressao = "Sua pressão está normal."
    } else if (sistolica < 140 && diastolica < 90){
      resultadoPressao = "Sua pressão está normal - Limítrofe."
    } else if (sistolica < 160 && diastolica < 100){
      resultadoPressao = "Você possui Hipertensão Leve."
    } else if (sistolica < 180 && diastolica < 110){
      resultadoPressao = "Você possui Hipertensão Moderada."
    } else {
      resultadoPressao = "Você possui Hipertensão Grave, vai se tratar mizeravel."
    }

    this.setState({
      result: resultadoPressao
    })
  }


  render()
  {
    return(
      <div>

        <h1> Controle de Pressão Arterial</h1>

        Pressão Sistólica: <br/>
        <input type="number" onChange={(event) => this.onChangeSistolica(event)}/> <br/> <br/>

        Pressão diastólica: <br/>
        <input type="number" onChange={(event) => this.onChangeDiastolica(event)}/> <br/> <br/>

        <input type="button" onClick={() => this.verificarPressao()} value = "Verificar" />

        <br/> <br/>

        {this.state.result}
      </div>
    )
  }
}

export default App;
