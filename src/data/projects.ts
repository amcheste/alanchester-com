// Two orthogonal axes, kept as two fields so neither is overloaded:
//
//   category — what kind of project it is. Stable classification.
//   status   — how active / mature it is. Changes over a project's life.
//
// A project is exactly one category and exactly one status, e.g. a
// `research` project that is `active`, or an `application` that is an
// `experiment`.
export type ProjectCategory = 'research' | 'tooling' | 'application';
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

export const projects: Project[] = [
  {
    name: 'pokemon-red-ai',
    stack: ['Python', 'RL', 'Gymnasium'],
    category: 'research',
    status: 'active',
    description:
      'Reinforcement learning toolkit for training AI agents to play Pokémon Red. Built on PyBoy, Stable-Baselines3, and Gymnasium. Three observation treatments (pixel, symbolic, hybrid), 833 tests, statistical analysis following Agarwal et al. 2021.',
    href: 'https://github.com/amcheste/pokemon-red-ai',
    featured: true,
  },
  {
    name: 'claude-teams-operator',
    stack: ['Kubernetes', 'Go', 'AI'],
    category: 'research',
    status: 'active',
    description:
      'Kubernetes operator that runs Claude Code Agent Teams as distributed pods. Explores multi-agent coordination patterns at the infrastructure layer.',
    href: 'https://github.com/amcheste/claude-teams-operator',
    featured: true,
  },
  {
    name: 'ea-agent',
    stack: ['Python', 'AI', 'Obsidian'],
    category: 'application',
    status: 'active',
    description:
      'AI-powered personal executive assistant built around Obsidian. Automates triage, synthesis, and knowledge management workflows.',
    href: 'https://github.com/amcheste/ea-agent',
    featured: true,
  },
  {
    name: 'paper-skills',
    stack: ['Python', 'AI', 'Research'],
    category: 'tooling',
    status: 'experiment',
    description:
      'Claude Code skills for academic paper triage and Obsidian integration. Reduces time-to-insight on dense technical literature.',
    href: 'https://github.com/amcheste/paper-skills',
    featured: false,
  },
  {
    name: 'golf-coach-agent',
    stack: ['Python', 'Vision LLM'],
    category: 'application',
    status: 'experiment',
    description:
      'AI golf coach using Vision LLMs for swing analysis. A focused experiment in applying multimodal models to physical performance feedback.',
    href: 'https://github.com/amcheste/golf-coach-agent',
    featured: false,
  },
  {
    name: 'mac-dev-setup',
    stack: ['Shell', 'macOS'],
    category: 'tooling',
    status: 'active',
    description:
      'One command to go from zero to fully productive on macOS. Opinionated dotfiles and toolchain setup for engineers who care about their environment.',
    href: 'https://github.com/amcheste/mac-dev-setup',
    featured: false,
  },
];
