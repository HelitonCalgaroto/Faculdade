import { useState } from "react"

const AppHook = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');

    const login = () => {
        if(userName === 'admin' && password === '123') {
          setResult('login válido!')
        } else {
          setResult('login inválido!')
        }
      }

    return (
        <div>
          usuário: <br />
          <input type="text"
          onChange={(event) => setUserName(event.target.value)}/>

          <br />

          senha: <br />
          <input type="password"
          onChange={(event) => setPassword(event.target.value)}/>

          <br />

          <input type="button" value="Entrar" onClick={login}/>

          <br />

        {result}

        </div>
    )
}

export default AppHook;