import { React, useState } from "react";

const AppHook = () => {

  const [data, setData] = useState('');
  const [sistolica, setSistolica] = useState('');
  const [diastolica, setDiastolica] = useState('');
  const [resultado, setResultado] = useState('');
  const [consulta, setConsulta] = useState([])

  const verificarPressao = () => {
    let resultadoPressao = ''

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
    setResultado(resultadoPressao)
    addConsulta()
  }

  const addConsulta = () => {
    const consultas = {
      data, sistolica, diastolica, resultado
    }

    const newConsulta = [...consulta, consultas]

    setConsulta(newConsulta)

    localStorage.setItem('shopping_list', JSON.stringify(newItens))
  }

  return(
    <div>

      <h1> Controle de Pressão Arterial</h1>

      Data: <br/>
      <input type="text" value={data}
             onChange={(event) => setData(event.target.value)}/> <br/> <br/>

      Pressão Sistólica: <br/>
      <input type="number" value={sistolica}
             onChange={(event) => setSistolica(event.target.value)}/> <br/> <br/>

      Pressão diastólica: <br/>
      <input type="number" value={diastolica}
             onChange={(event) => setDiastolica(event.target.value)}/> <br/> <br/>

      <input type="button" 
             onClick={verificarPressao} value = "Verificar" />

      <br/> <br/>

      <table border={1} width="80%" cellPadding={-5} cellSpacing={-1}>

        <tr>
          <td><h4> Data </h4></td>
          {
          consulta.map( (consulta, index) => (
            <tr key={index}>
              <td>{consulta.data}</td>
            </tr>
          ))
          }

          <td><h4> Sistolica </h4></td>
          {
          consulta.map( (consulta, index) => (
            <tr key={index}>
              <td>{consulta.sistolica}</td>
            </tr>
          ))
          }

          <td><h4> Diastolica </h4></td>
          {
          consulta.map( (consulta, index) => (
            <tr key={index}>
              <td>{consulta.diastolica}</td>
            </tr>
          ))
         }

          <td><h4> Resultado </h4></td>
          {
          consulta.map( (consulta, index) => (
            <tr key={index}>
              <td>{consulta.resultado}</td>
            </tr>
          ))
          }
        </tr>

      </table>

    </div>
  )
}

export default AppHook;