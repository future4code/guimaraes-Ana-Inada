import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardFormacao from './components/CardFormacaoDev/CardFormacaoDev';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/3158/premium/3158332.png?token=exp=1643294669~hmac=5263900a8d9f66a9bb4d733ac9ac1879" 
          nome="Ana" 
          descricao="Oi, sou Ana Carolina. Sou professora de formação buscando transição de carreira, uma aprendiz de programação. Boa sorte para mim! hehe"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

      <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/5335/5335866.png"
          nome="email"
          descricao="kazue.inada@gmail.com"
        />
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/1787/premium/1787774.png?token=exp=1643310868~hmac=5da22409607eb4609f74eba2b68179f1"
          nome="endereço"
          descricao="rua dos bobos, n°0"
        />
        <h2>Formação</h2>
        <CardFormacao
          imagem="https://cdn-icons.flaticon.com/png/512/1882/premium/1882852.png?token=exp=1643314915~hmac=fd42c29a93e0f03ca82a035c502f1ba8"
          faculdade= "UNICAMP"
          graduacao="Ciencias Sociais"
        />
         <CardFormacao
          imagem="https://cdn-icons-png.flaticon.com/512/1142/1142893.png"
          faculdade= "LABENU"
          graduacao="Desenvolvedora Fullstack"
        />
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/3214/3214715.png" 
          nome="Dev Ana" 
          descricao="Desenvolvendo conhecimentos de deselvonvedorA fullstack" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/3074/premium/3074279.png?token=exp=1643294934~hmac=9a3db6f3c50082e7330590d3904116f4" 
          nome="Profe Ana" 
          descricao="Aprendendo a aprender para, que sabe, ensinar" 
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
