import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    nameInput: "",
    emailInput: ""
  }
  
  render() {

    const newUserName = (event) => {
      this.setState({nameInput: event.target.value})
    }
    const newUserEmail = (event) => {
      this.setState({emailInput: event.target.value})
    }
  
    const createNewUser = () => {
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          Authorization: "david-alves-silva"
        },
        body: {
          name: this.state.nameInput,
        email: this.state.emailInput
        }
      }
      ).then(()=>alert('Criado com sucesso')).catch(resposta=>alert(resposta))
    }

    return (
      <div>
        <input placeholder='Nome' value={this.state.nameInput} onChange={newUserName}/>
        <input placeholder='E-mail' value={this.state.emailInput} onChange={newUserEmail}/>
        <button onClick={createNewUser}>Criar usuario</button>        
      </div>
    )
  }
}
