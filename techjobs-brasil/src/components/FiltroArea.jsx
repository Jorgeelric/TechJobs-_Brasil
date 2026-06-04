// Cria o componente dos botoes de filtro.
function FiltroArea({ areas, areaSelecionada, aoSelecionarArea }) {
  // Retorna a area visual dos filtros.
  return (
    // Container que agrupa todos os botoes.
    <div className="filtros">
      {/* Percorre a lista de areas e cria um botao para cada uma. */}
      {areas.map((area) => (
        // Botao individual de filtro.
        <button
          key={area}
          className={areaSelecionada === area ? 'ativo' : ''}
          onClick={() => aoSelecionarArea(area)}
        >
          {/* Mostra o nome da area dentro do botao. */}
          {area}
        </button>
      ))}
    </div>
  )
}

// Exporta o componente para ser usado no App.jsx.
export default FiltroArea
