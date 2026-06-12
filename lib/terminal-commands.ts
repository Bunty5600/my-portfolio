import { projects } from '@/lib/projects'

export type Line = { type: 'input' | 'output' | 'error'; text: string }

const helpText = `Available commands:
  help          list all commands
  whoami        who is this?
  skills        print skill tree
  projects      list all projects
  experience    show work + education timeline
  contact       email, github, linkedin
  resume        open resume
  github        open github profile
  clear         clear the terminal
  secret        ???
  cat bunty.txt print bio`

const skillsTree = `bunty/
├── languages/      Java · Python · JavaScript · TypeScript
├── frameworks/     React · Node · Express · FastAPI · Three.js
├── ai-ml/          PyTorch · Scikit-learn · RAG · NLP · Graphs
├── databases/      MongoDB · Neo4j · Redis · PostgreSQL · MySQL
├── devops/         Docker · GitHub Actions · Railway · Git
└── core/           OOP · Microservices · System Design · REST`

const experienceText = `[ 2025 ] Software Dev Intern — Mahanadi Coalfields Ltd (Govt. PSU)
         Built enterprise internal systems & AI-assisted automation.
[ 2025 ] Java Developer Trainee — OCAC, Odisha (present)
         Core/Advanced Java, J2EE, OOP, SDLC, Git workflows.
[ 2023 ] B.Tech Computer Science — GITA Autonomous College (2023-2027)
         CGPA: 7.44
[ 2024 ] Smart India Hackathon — Participant`

const contactText = `email     buntybhainsa0@gmail.com
github    github.com/Bunty5600
linkedin  linkedin.com/in/bunty-bhainsa
location  Bhubaneswar, Odisha, India`

const buntyTxt = `   ___
  ( o.o )   bunty bhainsa
   > ^ <    full-stack dev / ai systems engineer
 --------   cs student @ gita (2023-2027)
 |######|   ships backends, pipelines & 3D UIs
 --------   currently: java trainee @ ocac
            fuel: coffee + curiosity`

const secretText = `> rm -rf /doubts
> sudo make me a senior engineer
  [permission granted by sheer persistence]
  > 2AM commits don't count if nobody sees the bug count. shhh.`

export function runCommand(raw: string): { lines: Line[]; clear?: boolean } {
  const cmd = raw.trim().toLowerCase()

  if (cmd === '') return { lines: [] }
  if (cmd === 'clear') return { lines: [], clear: true }

  if (cmd === 'help') return { lines: [{ type: 'output', text: helpText }] }

  if (cmd === 'whoami')
    return {
      lines: [
        {
          type: 'output',
          text: 'Full-Stack Developer. AI Engineer. CS Student. Builder.',
        },
      ],
    }

  if (cmd === 'skills')
    return { lines: [{ type: 'output', text: skillsTree }] }

  if (cmd === 'projects') {
    const text = projects
      .map((p) => `  • ${p.title} — "${p.oneLiner}" [${p.statusLabel}]`)
      .join('\n')
    return { lines: [{ type: 'output', text }] }
  }

  if (cmd === 'experience')
    return { lines: [{ type: 'output', text: experienceText }] }

  if (cmd === 'contact')
    return { lines: [{ type: 'output', text: contactText }] }

  if (cmd === 'resume') {
    if (typeof window !== 'undefined')
      window.open('https://bunty-bhainsa-resume-plus.tiiny.site', '_blank')
    return {
      lines: [{ type: 'output', text: 'Opening resume... [link opened]' }],
    }
  }

  if (cmd === 'github') {
    if (typeof window !== 'undefined')
      window.open('https://github.com/Bunty5600', '_blank')
    return {
      lines: [{ type: 'output', text: 'Opening github.com/Bunty5600 ...' }],
    }
  }

  if (cmd === 'secret')
    return { lines: [{ type: 'output', text: secretText }] }

  if (cmd === 'cat bunty.txt')
    return { lines: [{ type: 'output', text: buntyTxt }] }

  return {
    lines: [
      { type: 'error', text: `command not found: ${raw} — try 'help'` },
    ],
  }
}

export const bootLines = [
  'Initializing portfolio v2.0...',
  'Loading Bunty Bhainsa...',
  "Systems nominal. Type 'help' to begin.",
]
