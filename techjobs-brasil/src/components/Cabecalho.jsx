// Cria o componente responsavel pelo cabecalho do site.
function Cabecalho() {
  // Retorna o conteudo visual do cabecalho.
  return (
    // Tag semantica usada para representar o topo da pagina.
    <header className="cabecalho">
      {/* Titulo principal do projeto. */}
      <h1>TechJobs Brasil</h1>
      {/* Frase de apoio abaixo do titulo. */}
      <p>Conectando talentos de tecnologia as melhores oportunidades</p>
    </header>
  )
}

// Exporta o componente para ser usado no App.jsx.
export default Cabecalho

