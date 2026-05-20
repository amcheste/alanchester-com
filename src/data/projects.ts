// Two orthogonal axes, kept as two fields so neither is overloaded:
//
//   category — what the project is about. Mirrors the groupings on the
//              GitHub profile README's "What I build" section.
//   status   — how active / mature it is. Changes over a project's life.
export type ProjectCategory =
  | 'reinforcement-learning'
  | 'agentic-systems'
  | 'research-tooling'
  | 'applied-experiments'
  | 'identity-tooling';

export type ProjectStatus = 'active' | 'experiment';

export interface Project {
  name: string;
  stack: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  href: string;
  featured: boolean;
}

// Display order + labels for the grouped projects page. Order matches the
// GitHub profile README.
export const categoryOrder: { id: ProjectCategory; label: string }[] = [
  { id: 'reinforcement-learning', label: 'Reinforcement learning' },
  { id: 'agentic-systems', label: 'Agentic systems' },
  { id: 'research-tooling', label: 'Research tooling' },
  { id: 'applied-experiments', label: 'Applied experiments' },
  { id: 'identity-tooling', label: 'Identity and tooling' },
];

export const projects: Project[] = [
  {
    name: 'pokemon-red-ai',
    stack: ['Python', 'RL', 'Gymnasium'],
    category: 'reinforcement-learning',
    status: 'active',
    description:
      'Reinforcement learning research on observation representations in Pokémon Red. Pixel, symbolic, and hybrid conditions under capacity-matched encoders. RecurrentPPO via SB3-Contrib.',
    href: 'https://github.com/amcheste/pokemon-red-ai',
    featured: true,
  },
  {
    name: 'claude-teams-operator',
    stack: ['Kubernetes', 'Go', 'AI'],
    category: 'agentic-systems',
    status: 'active',
    description:
      'Kubernetes operator that runs Claude Code agent teams as distributed pods.',
    href: 'https://github.com/amcheste/claude-teams-operator',
    featured: true,
  },
  {
    name: 'ea-agent',
    stack: ['Python', 'AI', 'Obsidian'],
    category: 'agentic-systems',
    status: 'active',
    description:
      'AI personal executive assistant built around Obsidian.',
    href: 'https://github.com/amcheste/ea-agent',
    featured: true,
  },
  {
    name: 'overleaf-mcp',
    stack: ['Python', 'MCP', 'LaTeX'],
    category: 'research-tooling',
    status: 'active',
    description:
      'MCP server for editing Overleaf LaTeX projects from Claude. Published to PyPI. Single-user by design, auditable, built for academic researchers.',
    href: 'https://github.com/amcheste/overleaf-mcp',
    featured: false,
  },
  {
    name: 'golf-coach-agent',
    stack: ['Python', 'Vision LLM'],
    category: 'applied-experiments',
    status: 'experiment',
    description:
      'Vision LLM applied to golf swing analysis.',
    href: 'https://github.com/amcheste/golf-coach-agent',
    featured: false,
  },
  {
    name: 'alanchester-brand',
    stack: ['Design', 'CSS', 'Tokens'],
    category: 'identity-tooling',
    status: 'active',
    description:
      'Personal brand system, expressed as code. Tokens, components, the equation as identity.',
    href: 'https://github.com/amcheste/alanchester-brand',
    featured: false,
  },
  {
    name: 'engineering-handbook',
    stack: ['Markdown', 'Docs'],
    category: 'identity-tooling',
    status: 'active',
    description:
      'Personal engineering handbook. Philosophies, workflows, and tooling for how I build software. Versioned with semver.',
    href: 'https://github.com/amcheste/engineering-handbook',
    featured: false,
  },
  {
    name: 'mac-dev-setup',
    stack: ['Shell', 'macOS'],
    category: 'identity-tooling',
    status: 'active',
    description:
      'One command from zero to productive on macOS.',
    href: 'https://github.com/amcheste/mac-dev-setup',
    featured: false,
  },
];
