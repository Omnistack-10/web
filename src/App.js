import React from 'react';

import './global.css';

// Componente:  Bloco isolado de HTML, CSS e JS, 
//              o qual não interfere no restante da aplicação

// Propriedade: Informações que um componente PAI
//              passa para o componente FILHO ("""atributos""" de um componente)

// Estado:      Informações mantidas e manipuladas pelo componente (Lembrar: imutabilidade)

// Desinstruturação: Pegar um vetor e quebra-lo em variáveis

function App()  {
  return (
    <div id="app">
      <aside></aside>
      <main></main>
    </div>
  );
}

export default App;
