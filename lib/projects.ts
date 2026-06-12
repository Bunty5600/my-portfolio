export type ProjectStatus = 'Shipped' | 'Ongoing' | 'Active'
export type Category = 'AI/ML' | 'Full-Stack' | 'Systems' | 'Ongoing'

export type Project = {
  title: string
  status: ProjectStatus
  statusLabel: string
  oneLiner: string
  description: string
  stack: string[]
  categories: Category[]
  github?: string
  live?: string
  deploy?:string
}

export const projects: Project[] = [
  {
    title: 'CodeLens AI',
    status: 'Shipped',
    statusLabel: 'Shipped',
    oneLiner: 'Your codebase has secrets. CodeLens reads them.',
    description:
      'Real-time repository intelligence analyzing 10+ maintainability metrics — Cyclomatic Complexity, Halstead Metrics, Maintainability Index.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'GitHub API'],
    categories: ['AI/ML', 'Full-Stack'],
    github: 'https://github.com/Bunty5600/Codelens',
    deploy:''
  },
  {
    title: 'SemanticPDF',
    status: 'Shipped',
    statusLabel: 'Shipped',
    oneLiner: 'Ask your documents anything. Get answers that actually make sense.',
    description:
      'Scalable RAG pipeline with ~60% faster retrieval using semantic chunking, Pinecone vector search, and Google Gemini embeddings.',
    stack: ['React', 'Express.js', 'Pinecone', 'Google Gemini', 'Node.js'],
    categories: ['AI/ML'],
    github: 'https://github.com/Bunty5600/semanticpdf',
    deploy:'https://semanticpdf-eight.vercel.app/'
  },
  {
    title: 'NotePilot — AI Meeting Intelligence',
    status: 'Ongoing',
    statusLabel: 'Ongoing',
    oneLiner: 'Every meeting. Perfectly remembered. Automatically.',
    description:
      'Low-latency AI meeting platform with ~95% transcription accuracy, real-time speaker diarization, WebSocket streaming, and automated MOM generation.',
    stack: ['React', 'Node.js', 'Socket.IO', 'Whisper', 'Python'],
    categories: ['AI/ML', 'Full-Stack', 'Ongoing'],
    github: 'https://github.com/Bunty5600',
  },
  {
    title: 'YouTube Gaming Creator Ecosystem Analyzer',
    status: 'Ongoing',
    statusLabel: 'Ongoing',
    oneLiner: 'The gaming creator economy — visualized, analyzed, predicted.',
    description:
      'Full-stack data platform with ML-powered community detection (Louvain), trend forecasting (Prophet/ARIMA), and PageRank influence scoring.',
    stack: ['MongoDB', 'Neo4j', 'Redis', 'React', 'Three.js', 'Python', 'XGBoost'],
    categories: ['Systems', 'AI/ML', 'Ongoing'],
    github: 'https://github.com/Bunty5600/youtube_connect/tree/main0',
  },
  {
    title: 'DSA With Development',
    status: 'Active',
    statusLabel: 'Active',
    oneLiner: "DSA isn't just interview prep. It's how backends actually think.",
    description:
      'GitHub knowledge base connecting DSA problems to real backend engineering context — structured README docs per problem.',
    stack: ['Python', 'Markdown', 'GitHub'],
    categories: ['Systems'],
    github: 'https://github.com/Bunty5600/DSA-With-Development-',
  },
]
