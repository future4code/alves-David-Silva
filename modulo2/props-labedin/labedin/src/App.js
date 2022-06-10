import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import ImagemButton from './components/ImagemButton';
import AvatarDavid from './img/avatar-dd.png'
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={AvatarDavid} 
          nome="David Henrique" 
          descricao="Olá, eu sou David Henrique, um estudante de programação e estou aprendendo react na Labenu."
          hobbies="Meus hobbies são: assistir anime, jogos online e brincar com meus gatos"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/107/107272.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/4213/4213922.png"
        dado="E-mail:"
        info="blabla@bla.com.br"
      />

<CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/1295/1295181.png"
        dado="Endereço:"
        info="Bairro bla, rua bla, número 0."
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante full stack em andamento, atualmente aprendendo React." 
        />
        
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Autônomo" 
          descricao="Muitas experiências em bicos diferentes fazendo de tudo um pouco nessa vida." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
