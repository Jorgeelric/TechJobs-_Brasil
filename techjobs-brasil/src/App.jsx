import { useState } from 'react'
import './App.css'
import profissionais from './data/profissionais'
import CardProfissional from './components/CardProfissional'

function App() {
  const [areaSelecionada, setAreaSelecionada] = useState('Todos')
  const [busca, setBusca] = useState(' .')

  const profissionaisFiltrados = 
    areaSelecionada === 'Todos'
      ? profissionais
      : profissionais.filter((profissional) => profissional.area === areaSelecionada)

  const areas = ['Todos', 'Front-end', 'Back-end', 'Dados','Tecnologia','Design','Infraestrutura','Mobile', 'UX/UI', 'Cibersegurança']    

  return (
    <div className='app' >
      <h1>TechJobs Brasil</h1>
      <p>Conectando talentos de tecnologia às mehores oportunidades.</p>

      <div className='filtros' >
        {areas.map((area) => (
          <button 
          key={area}
          className={areaSelecionada === area ? 'ativo' : ''}
          onClick={() => setAreaSelecionada(area)}
          >
            {area}
          </button>
        ))}
      </div>

      <div className='grade-profissionais' >
        {profissionaisFiltrados.map((profissional) => (
          <CardProfissional
          key={profissional.nome}
          nome={profissional.nome}
          cargo={profissional.cargo}
          empresa={profissional.empresa}
          cidade={profissional.cidade}
          foto={profissional.foto}
          habilidades={profissional.habilidades}
          />
        ) )}
      </div>
    </div>
  )
}

export default App