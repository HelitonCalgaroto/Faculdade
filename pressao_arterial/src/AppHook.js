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

    localStorage.setItem('consulta_pressao_arterial', JSON.stringify(newConsulta))
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
          <thead>
            <td><h4> Data </h4></td>
            <td><h4> Sistolica </h4></td>
            <td><h4> Diastolica </h4></td>
            <td><h4> Resultado </h4></td>
          </thead>
        </tr>
        <tbody>
          <tr width={"80%"}>
            {
            consulta.map( (consulta, index) => (
              <td key={index}>{consulta.data}</td>
            ))
            }
            {
            consulta.map( (consulta, index) => (
              <td key={index}>{consulta.sistolica}</td>
            ))
            }
            {
            consulta.map( (consulta, index) => (
              <td key={index}>{consulta.diastolica}</td>
            ))
            }
            {
            consulta.map( (consulta, index) => (
              <td key={index}>{consulta.resultado}</td>
            ))
            }
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default AppHook;