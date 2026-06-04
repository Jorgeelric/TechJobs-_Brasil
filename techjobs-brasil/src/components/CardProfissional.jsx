// Importa o useState para controlar a abertura da bio no card.
import { useState } from 'react'

// Cria o componente que representa um profissional.
function CardProfissional({ nome, cargo, empresa, cidade, foto, habilidades, bio, favorito, aoAlternarFavorito }) {
  // Guarda se a bio do perfil esta aberta ou fechada.
  const [perfilAberto, setPerfilAberto] = useState(false)

  // Retorna o visual do card.
  return (
    // Card principal; ganha a classe favoritado quando favorito for true.
    <div className={`card-profissional ${favorito ? 'favoritado' : ''}`}>
      {/* Foto do profissional. */}
      <img className="card-foto" src={foto} alt={`Foto de ${nome}`} />

      {/* Botao de favorito. */}
      {/* Recebe o clique e avisa o App.jsx para alternar o favorito. */}
      <button
        className="botao-favorito"
        onClick={() => aoAlternarFavorito(nome)}
        aria-label={favorito ? `Remover ${nome} dos favoritos` : `Adicionar ${nome} aos favoritos`}
        title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {/* Mostra estrela cheia quando favorito, vazia quando nao favorito. */}
        {favorito ? '★' : '☆'}
      </button>

      {/* Nome do profissional. */}
      <h2>{nome}</h2>

      {/* Cargo do profissional. */}
      <p className="card-cargo">{cargo}</p>
      {/* Empresa do profissional. */}
      <p className="card-info">{empresa}</p>
      {/* Cidade do profissional. */}
      <p className="card-info">{cidade}</p>

      {/* Area que agrupa as habilidades. */}
      <div className="card-habilidades">
        {/* Percorre as habilidades e cria uma etiqueta para cada uma. */}
        {habilidades.map((habilidade) => (
          // Etiqueta visual de habilidade.
          <span key={habilidade}>{habilidade}</span>
        ))}
      </div>

      {/* Botao que abre ou fecha a bio. */}
      {/* Ao clicar, inverte o estado perfilAberto. */}
      <button
        className="botao-perfil"
        onClick={() => setPerfilAberto(!perfilAberto)}
      >
        {/* Muda o texto dependendo do estado atual. */}
        {perfilAberto ? 'Ocultar perfil' : 'Ver perfil'}
      </button>

      {/* Mostra a bio apenas quando perfilAberto for true. */}
      {perfilAberto && (
        // Texto da bio do profissional.
        <p className="detalhe-perfil">
          {/* Conteudo da bio recebido por props. */}
          {bio}
        </p>
      )}
    </div>
  )
}

// Exporta o componente para ser usado na lista de profissionais.
export default CardProfissional
