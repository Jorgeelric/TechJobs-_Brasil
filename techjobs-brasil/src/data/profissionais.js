// Cria a lista de profissionais exibidos no site.
const profissionais = [
  // Primeiro profissional da lista.
  {
    // Nome exibido no card.
    nome: 'Ana Souza',
    // Cargo exibido no card.
    cargo: 'Desenvolvedora Front-end',
    // Area usada pelos filtros.
    area: 'Front-end',
    // Empresa exibida no card.
    empresa: 'Pixel Labs',
    // Cidade exibida no card.
    cidade: 'Sao Paulo, SP',
    // URL da foto do profissional.
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    // Lista de habilidades exibidas como etiquetas.
    habilidades: ['HTML', 'CSS', 'JavaScript', 'React'],
    // Bio exibida quando o usuario clica em Ver perfil.
    bio: 'Ana cria interfaces modernas e responsivas, com foco em experiencia do usuario e performance.',
  },
  // Segundo profissional da lista.
  {
    nome: 'Carlos Lima',
    cargo: 'Desenvolvedor Back-end',
    area: 'Back-end',
    empresa: 'DataCore',
    cidade: 'Recife, PE',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    habilidades: ['Node.js', 'APIs', 'Banco de Dados', 'Express'],
    bio: 'Carlos desenvolve APIs e sistemas robustos, conectando aplicacoes a bancos de dados com seguranca e eficiencia.',
  },
  // Terceiro profissional da lista.
  {
    nome: 'Marina Costa',
    cargo: 'Analista de Dados',
    area: 'Dados',
    empresa: 'Insight BI',
    cidade: 'Belo Horizonte, MG',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    habilidades: ['Python', 'SQL', 'Power BI', 'Excel'],
    bio: 'Marina transforma dados em insights estrategicos usando analise, visualizacao e ferramentas de BI.',
  },
  // Quarto profissional da lista.
  {
    nome: 'Lucas Andrade',
    cargo: 'Desenvolvedor Front-end',
    area: 'Tecnologia',
    empresa: 'NovaWeb Solutions',
    cidade: 'Curitiba, PR',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
    habilidades: ['React', 'JavaScript', 'CSS', 'TypeScript'],
    bio: 'Lucas trabalha com aplicacoes web modernas, criando experiencias rapidas e acessiveis para diferentes dispositivos.',
  },
  // Quinto profissional da lista.
  {
    nome: 'Fernanda Lima',
    cargo: 'Especialista em UX/UI',
    area: 'Design',
    empresa: 'Pixel Studio',
    cidade: 'Sao Paulo, SP',
    foto: 'https://randomuser.me/api/portraits/women/32.jpg',
    habilidades: ['Figma', 'UI Design', 'UX Research', 'Adobe XD'],
    bio: 'Fernanda pesquisa jornadas de usuario e transforma ideias em prototipos claros, funcionais e bonitos.',
  },
  // Sexto profissional da lista.
  {
    nome: 'Rafael Mendes',
    cargo: 'Engenheiro DevOps',
    area: 'Infraestrutura',
    empresa: 'CloudCore Tech',
    cidade: 'Recife, PE',
    foto: 'https://randomuser.me/api/portraits/men/61.jpg',
    habilidades: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    bio: 'Rafael automatiza ambientes, cuida de infraestrutura em nuvem e melhora processos de entrega continua.',
  },
  // Setimo profissional da lista.
  {
    nome: 'Rafael Nunes',
    cargo: 'Desenvolvedor Mobile',
    area: 'Mobile',
    empresa: 'AppWay',
    cidade: 'Curitiba, PR',
    foto: 'https://randomuser.me/api/portraits/men/75.jpg',
    habilidades: ['React Native', 'Flutter', 'APIs', 'Firebase'],
    bio: 'Rafael cria aplicativos moveis com foco em usabilidade, integracao com APIs e boa performance.',
  },
  // Oitavo profissional da lista.
  {
    nome: 'Bianca Torres',
    cargo: 'UX/UI Designer',
    area: 'UX/UI',
    empresa: 'DesignHub',
    cidade: 'Florianopolis, SC',
    foto: 'https://randomuser.me/api/portraits/women/29.jpg',
    habilidades: ['Figma', 'Prototipagem', 'Design System', 'UX Research'],
    bio: 'Bianca projeta interfaces digitais com atencao a experiencia, consistencia visual e facilidade de uso.',
  },
  // Nono profissional da lista.
  {
    nome: 'Eduardo Martins',
    cargo: 'Analista de Ciberseguranca',
    area: 'Ciberseguranca',
    empresa: 'SafeNet',
    cidade: 'Brasilia, DF',
    foto: 'https://randomuser.me/api/portraits/men/51.jpg',
    habilidades: ['Pentest', 'Redes', 'Linux', 'Resposta a Incidentes'],
    bio: 'Eduardo atua na protecao de sistemas, analise de riscos e resposta a incidentes de seguranca.',
  },
]

// Exporta a lista para ser usada no App.jsx.
export default profissionais

