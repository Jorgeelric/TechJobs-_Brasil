// Importa o useState, usado para criar estados que mudam a tela.
import { useState } from 'react'
// Importa o CSS principal da aplicacao.
import './App.css'
// Importa a lista de profissionais cadastrados.
import profissionais from './data/profissionais'
// Importa o componente dos botoes de filtro.
import FiltroArea from './components/FiltroArea'
// Importa o componente do campo de busca.
import CampoBusca from './components/CampoBusca'
// Importa o componente do cabecalho.
import Cabecalho from './components/Cabecalho'
// Importa o componente que mostra os cards ou mensagem vazia.
import ListaProfissionais from './components/ListaProfissionais'
// Importa o componente de resumo com contadores.
import Resumo from './components/Resumo'
// Importa o componente de rodape.
import Rodape from './components/Rodape'

// Cria o componente principal da aplicacao.
function App() {
  // Guarda qual area esta selecionada no filtro.
  const [areaSelecionada, setAreaSelecionada] = useState('Todos')
  // Guarda o texto digitado no campo de busca.
  const [busca, setBusca] = useState('')
  // Guarda os nomes dos profissionais favoritados.
  const [favoritos, setFavoritos] = useState([])

  // Cria uma lista filtrada com base na area, busca e favoritos.
  const profissionaisFiltrados = profissionais.filter((profissional) => {
    // Verifica se o profissional passa pelo filtro de area.
    const filtroPorArea =
      // Permite todos quando o filtro selecionado for "Todos".
      areaSelecionada === 'Todos' ||
      // Permite o profissional quando a area dele for igual ao filtro.
      profissional.area === areaSelecionada ||
      // Permite somente favoritos quando o filtro selecionado for "Favoritos".
      (areaSelecionada === 'Favoritos' && favoritos.includes(profissional.nome))

    // Transforma a busca em minusculas para comparar sem diferenciar maiusculas.
    const textoBusca = busca.toLowerCase()

    // Verifica se o profissional passa pelo filtro de texto.
    const filtroPorBusca =
      // Procura o texto digitado dentro do nome do profissional.
      profissional.nome.toLowerCase().includes(textoBusca) ||
      // Procura o texto digitado dentro de pelo menos uma habilidade.
      profissional.habilidades.some((habilidade) =>
        // Compara a habilidade em minusculas com o texto buscado.
        habilidade.toLowerCase().includes(textoBusca)
      )

    // O profissional so aparece se passar no filtro de area e no filtro de busca.
    return filtroPorArea && filtroPorBusca
  })
    // Ordena os profissionais filtrados em ordem alfabetica pelo nome.
    .sort((a, b) => a.nome.localeCompare(b.nome))

  // Cria a lista de botoes de filtro, com Todos, Favoritos e as areas cadastradas.
  const areas = [
    // Primeiro botao: mostra todos os profissionais.
    'Todos',
    // Segundo botao: mostra apenas profissionais favoritados.
    'Favoritos',
    // Pega as areas dos profissionais, remove repetidas e ordena.
    ...[...new Set(profissionais.map((profissional) => profissional.area))].sort(),
  ]

  // Conta quantos profissionais aparecem depois dos filtros.
  const quantidadeResultados = profissionaisFiltrados.length
  // Monta o texto do contador no singular ou plural.
  const textoResultado =
    // Se houver apenas um resultado, usa texto no singular.
    quantidadeResultados === 1
      ? '1 profissional encontrado'
      // Caso contrario, mostra a quantidade no plural.
      : `${quantidadeResultados} profissionais encontrados`

  // Conta todos os profissionais cadastrados.
  const totalProfissionais = profissionais.length
  // Conta apenas areas reais, desconsiderando Todos e Favoritos.
  const totalAreas = areas.length - 2
  // Conta quantos profissionais foram favoritados.
  const totalFavoritos = favoritos.length

  // Cria uma funcao para limpar busca e filtro.
  function limparFiltros() {
    // Volta o filtro para Todos.
    setAreaSelecionada('Todos')
    // Limpa o texto do campo de busca.
    setBusca('')
  }

  // Cria uma funcao para adicionar ou remover um profissional dos favoritos.
  function alternarFavorito(nome) {
    // Verifica se o nome ja esta na lista de favoritos.
    if (favoritos.includes(nome)) {
      // Remove o nome da lista se ele ja estiver favoritado.
      setFavoritos(favoritos.filter((favorito) => favorito !== nome))
    } else {
      // Adiciona o nome na lista se ele ainda nao estiver favoritado.
      setFavoritos([...favoritos, nome])
    }
  }

  // Retorna a estrutura visual da pagina.
  return (
    // Container principal do aplicativo.
    <div className="app">
      {/* Mostra o titulo e subtitulo do site. */}
      <Cabecalho />

      {/* Mostra os totais principais do projeto. */}
      {/* Envia totais de profissionais, areas e favoritos para o resumo. */}
      <Resumo
        totalProfissionais={totalProfissionais}
        totalAreas={totalAreas}
        totalFavoritos={totalFavoritos}
      />

      {/* Mostra o campo de busca e envia o estado para ele. */}
      <CampoBusca busca={busca} aoMudarBusca={setBusca} />

      {/* Mostra os filtros e permite trocar a area selecionada. */}
      {/* Envia a lista de filtros, o filtro atual e a funcao de troca. */}
      <FiltroArea
        areas={areas}
        areaSelecionada={areaSelecionada}
        aoSelecionarArea={setAreaSelecionada}
      />

      {/* Mostra qual filtro esta ativo no momento. */}
      <p className="filtro-atual">Filtro atual: {areaSelecionada}</p>

      {/* Mostra quantos profissionais foram encontrados. */}
      <p className="contador-resultados">{textoResultado}</p>

      {/* Botao que limpa busca e filtro. */}
      <button className="botao-limpar" onClick={limparFiltros}>
        Limpar Filtros
      </button>

      {/* Mostra a lista de profissionais filtrados. */}
      {/* Envia a lista filtrada, favoritos e funcoes para os cards. */}
      <ListaProfissionais
        profissionais={profissionaisFiltrados}
        favoritos={favoritos}
        aoAlternarFavorito={alternarFavorito}
        areaSelecionada={areaSelecionada}
      />

      {/* Mostra o rodape da pagina. */}
      <Rodape />
    </div>
  )
}

// Exporta o App para ser usado no main.jsx.
export default App
