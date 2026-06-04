// Importa o componente usado para exibir cada profissional individualmente.
import CardProfissional from './CardProfissional'

// Cria o componente responsavel pela lista de profissionais.
function ListaProfissionais({ profissionais, favoritos, aoAlternarFavorito, areaSelecionada }) {
  // Define uma mensagem diferente quando o filtro Favoritos estiver vazio.
  const mensagemVazia =
    // Se o filtro atual for Favoritos, mostra mensagem especifica.
    areaSelecionada === 'Favoritos'
      ? 'Nenhum favorito selecionado'
      // Caso contrario, mostra mensagem comum de busca sem resultado.
      : 'Nenhum profissional encontrado'

  // Retorna a grade de cards ou a mensagem vazia.
  return (
    // Container usado para organizar os cards.
    <div className="grade-profissionais">
      {/* Se existir pelo menos um profissional, mostra os cards. */}
      {profissionais.length > 0 ? (
        // Percorre a lista de profissionais filtrados.
        profissionais.map((profissional) => (
          // Renderiza um card para cada profissional.
          // Envia dados, favorito e funcao de alternancia para cada card.
          <CardProfissional
            key={profissional.nome}
            nome={profissional.nome}
            cargo={profissional.cargo}
            empresa={profissional.empresa}
            cidade={profissional.cidade}
            foto={profissional.foto}
            habilidades={profissional.habilidades}
            bio={profissional.bio}
            favorito={favoritos.includes(profissional.nome)}
            aoAlternarFavorito={aoAlternarFavorito}
          />
        ))
      ) : (
        // Mostra uma mensagem quando nao existe resultado.
        <p className="mensagem-vazia">{mensagemVazia}</p>
      )}
    </div>
  )
}

// Exporta o componente para ser usado no App.jsx.
export default ListaProfissionais
