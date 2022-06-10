import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoCardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;
width: 300px;
margin-bottom: 10px;
margin-top: 10px;
input {
  margin-bottom: 10px;
  margin-top: 10px;
}
button {
  margin-bottom: 10px;
  width: 100px;
  background-color: black;
  color: white;
}
button:hover{
  background-color: darkgray;
  color: black;
}
`
class App extends React.Component {
  state = {
    arrayInfosUsuario: [
      {
        nome: "Paulinha",
        foto: "https://picsum.photos/50/50",
        post: "https://picsum.photos/200/150"
      },
      {
        nome: "David",
        foto: "https://picsum.photos/50/51",
        post: "https://picsum.photos/200/151"
      },
      {
        nome: "Yuno e Yuna",
        foto: "https://picsum.photos/50/52",
        post: "https://picsum.photos/200/152"
      }
    ],
    campoNome: "",
    campoFoto: "",
    campoPost: ""
  }

  addCard = () => {
    const novoCard = {
      nome: this.state.campoNome,
      foto: this.state.campoFoto,
      post: this.state.campoPost
    };
    const novoInfosUsuario = [...this.state.arrayInfosUsuario, novoCard];
    this.setState({ arrayInfosUsuario: novoInfosUsuario });
  };

  onChangeCampoNome = (event) => {
    this.setState({ campoNome: event.target.value });
  };
  onChangeCampoFoto = (event) => {
    this.setState({ campoFoto: event.target.value });
  };
  onChangeCampoPost = (event) => {
    this.setState({ campoPost: event.target.value });
  };

  render() {
    const mapDosUsuarios = this.state.arrayInfosUsuario.map((usuario) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={usuario.nome}
            fotoUsuario={usuario.foto}
            fotoPost={usuario.post}
          />
        </MainContainer>
      )
    })
    return (
      <div>
      <MainContainer>
      <NovoCardContainer>
        <h2>Crie seu Post!</h2>
          <input
            value={this.state.campoNome}
            onChange={this.onChangeCampoNome}
            placeholder={"Seu nome"}
          />
          <input
            value={this.state.campoFoto}
            onChange={this.onChangeCampoFoto}
            placeholder={"Link foto de perfil"}
          />
          <input
            value={this.state.campoPost}
            onChange={this.onChangeCampoPost}
            placeholder={"Link foto do post"}
          />
          <button onClick={this.addCard}>Criar</button>
        </NovoCardContainer>
        </MainContainer>
        {mapDosUsuarios}
      </div>
    )
  }
}
export default App
