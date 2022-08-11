import React from 'react'

class App extends React.Component{ 

    constructor() { 
        super()
        console.log('App Constructor')
        
        this.state = {
            message: '',
            value: 0
        }
    }

    componentDidMount() {
        console.log('App - componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('App - componentDidUpdate')
    }

    sendInfo() {
        alert('Mensagem: ' + this.state.message + '\n' +
            'Valor: ' + this.state.value)
    }

    onChangeMessage(event) {
        console.log('alterou mensagem')

        const newMessage = event.target.value
        this.setState({
            message: newMessage
        })
    }

    onChangeValue(event) {
      console.log('alterou número.')
      const newValue = event.target.value
      this.setState({
        value: newValue
      })
    }

    render() { 
        console.log('App Render()')
        
        return (
            <div>
                Mensagem: <br />
                <input type="text" onChange={(event) => this.onChangeMessage(event)} />
                {this.state.message}
                <br />

                Valor: <br />
                <input type="number" min={0} max={10}
                  onChange={(event) => this.onChangeValue(event)}/>
                  {this.state.value}
                <br />
                <input type="button" value="Enviar Informações"
                    onClick={() => this.sendInfo() } />
            </div>
        )
    }
}

export default App