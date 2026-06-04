// Cria o componente que mostra os numeros principais do projeto.
function Resumo({ totalProfissionais, totalAreas, totalFavoritos }) {
  // Define o texto de favoritos no singular ou plural.
  const textoFavoritos = totalFavoritos === 1 ? 'favorito' : 'favoritos'

  // Retorna os blocos de resumo.
  return (
    // Container dos cards de resumo.
    <div className="resumo">
      {/* Bloco com o total de profissionais. */}
      <div>
        {/* Numero em destaque. */}
        <strong>{totalProfissionais}</strong>
        {/* Legenda do numero. */}
        <span>profissionais cadastrados</span>
      </div>

      {/* Bloco com o total de areas. */}
      <div>
        {/* Numero em destaque. */}
        <strong>{totalAreas}</strong>
        {/* Legenda do numero. */}
        <span>areas disponiveis</span>
      </div>

      {/* Bloco com o total de favoritos. */}
      <div>
        {/* Numero em destaque. */}
        <strong>{totalFavoritos}</strong>
        {/* Legenda ajustada para singular ou plural. */}
        <span>{textoFavoritos}</span>
      </div>
    </div>
  )
}

// Exporta o componente para ser usado no App.jsx.
export default Resumo

