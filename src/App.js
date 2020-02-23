import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'

// Componente:  Bloco isolado de HTML, CSS e JS, 
//              o qual não interfere no restante da aplicação

// Propriedade: Informações que um componente PAI
//              passa para o componente FILHO ("""atributos""" de um componente)

// Estado:      Informações mantidas e manipuladas pelo componente (Lembrar: imutabilidade)

// Desinstruturação: Pegar um vetor e quebra-lo em variáveis

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">latitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45008136?s=460&v=4" alt="Maycon Carvalho" />
              <div className="user-info">
                <strong>Maycon Carvalho</strong>
                <span>ReactJs, React Native, Nodejs</span>
              </div>
            </header>
            <p>batatinha quando nasce pelo chao</p>
            <a href="https://github.com/mayconcarvalho">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45008136?s=460&v=4" alt="Maycon Carvalho" />
              <div className="user-info">
                <strong>Maycon Carvalho</strong>
                <span>ReactJs, React Native, Nodejs</span>
              </div>
            </header>
            <p>batatinha quando nasce pelo chao</p>
            <a href="https://github.com/mayconcarvalho">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45008136?s=460&v=4" alt="Maycon Carvalho" />
              <div className="user-info">
                <strong>Maycon Carvalho</strong>
                <span>ReactJs, React Native, Nodejs</span>
              </div>
            </header>
            <p>batatinha quando nasce pelo chao</p>
            <a href="https://github.com/mayconcarvalho">Acessar perfil no github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45008136?s=460&v=4" alt="Maycon Carvalho" />
              <div className="user-info">
                <strong>Maycon Carvalho</strong>
                <span>ReactJs, React Native, Nodejs</span>
              </div>
            </header>
            <p>batatinha quando nasce pelo chao</p>
            <a href="https://github.com/mayconcarvalho">Acessar perfil no github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
