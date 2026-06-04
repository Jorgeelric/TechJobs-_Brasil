// Importa o StrictMode, que ajuda a identificar problemas durante o desenvolvimento.
import { StrictMode } from 'react'
// Importa a funcao que conecta o React ao HTML.
import { createRoot } from 'react-dom/client'
// Importa os estilos globais da aplicacao.
import './index.css'
// Importa o componente principal do projeto.
import App from './App.jsx'

// Procura no HTML o elemento com id "root" e cria a raiz do React nele.
createRoot(document.getElementById('root')).render(
  // Ativa verificacoes extras do React durante o desenvolvimento.
  <StrictMode>
    {/* Renderiza o componente principal da aplicacao. */}
    <App />
  </StrictMode>,
)

