import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
p{
  font-size: 1.2rem;
  margin: 0 0 0 0;
}
`

const ChatContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
margin-bottom: 1%;
flex-direction: column;
overflow: hidden;
justify-content: flex-end;
margin-left: 1%;
`

const ContainerDosInputs = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 5%;
margin-bottom: 1%;
`
const InputNome = styled.input`
width: 8%;
border: none;
background-color: black;
color: white;

`
const InputMensagem = styled.input`
width: 68%;
border: none;
background-color: black;
color: white;
`

const BotaoDeEnviar = styled.button`
width: 18%;
border: none;
background-color: black;
color: white;
`

export default class Chat extends Component {
  state = {
    campos: [],
    inputUsuario: "",
    inputTexto: "",
    mensagemApagada: ""
  }
  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.inputUsuario,
      texto: this.state.inputTexto
    }
    const novosCampos = [...this.state.campos, novaMensagem]
    this.setState({ campos: novosCampos, inputTexto: "" })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }
  onChangeInputTexto = (event) => {
    this.setState({ inputTexto: event.target.value })
  }

  render() {
    const mensagemEnviada = this.state.campos.map((elemento) => {    
      return (
        <p>
          <b>{elemento.usuario}:</b> {elemento.texto}
        </p>
      );
    });

    return (
      <MainContainer>
        <ChatContainer>{mensagemEnviada}</ChatContainer>
        <ContainerDosInputs>
          <InputNome
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <InputMensagem
            value={this.state.inputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Mensagem"}
          />
          <BotaoDeEnviar onClick={this.enviarMensagem}>Enviar</BotaoDeEnviar>
        </ContainerDosInputs>
      </MainContainer>
    )
  }
}
