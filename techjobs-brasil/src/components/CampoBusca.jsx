// Cria o componente do campo de busca.
function CampoBusca({ busca, aoMudarBusca }) {
  // Retorna o input de pesquisa.
  return (
    // Campo onde o usuario digita o texto da busca.
    // Ele recebe o valor atual e avisa o App.jsx quando o texto muda.
    <input
      className="campo-busca"
      type="text"
      placeholder="Buscar por nome ou habilidade"
      value={busca}
      onChange={(evento) => aoMudarBusca(evento.target.value)}
    />
  )
}

// Exporta o componente para ser usado no App.jsx.
export default CampoBusca
