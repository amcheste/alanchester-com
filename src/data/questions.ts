export interface ResearchQuestion {
  topic: string;
  question: string;
  method: string;
}

// The three current research questions, framed as on the X pinned post
// and the GitHub profile README. The wording is deliberately compressed
// and the structure (topic. question? method.) is the recurring shape.
export const researchQuestions: ResearchQuestion[] = [
  {
    topic: 'On reinforcement learning',
    question:
      'How does observation representation affect sample efficiency in long-horizon RL?',
    method:
      'Pixel vs. symbolic vs. hybrid observations under capacity-matched encoders.',
  },
  {
    topic: 'On team architecture',
    question:
      'How does the unit of work change when teams include autonomous agents?',
    method:
      'What structures support variable-elasticity teams.',
  },
  {
    topic: 'On multi-agent security',
    question:
      'How does trust topology affect security in multi-agent LLM systems?',
    method: 'Centralized orchestrator vs. peer-authenticated trust.',
  },
];
