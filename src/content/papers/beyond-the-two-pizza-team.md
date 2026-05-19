---
title: "Beyond the Two-Pizza Team"
subtitle: "An Agentic Pod framework for human-AI organizational design."
date: 2026-04-15
type: paper
description: "An Agentic Pod framework for human-AI organizational design."
draft: false
---

## Abstract

The two-pizza team was a useful heuristic for an era in which the unit of
work was a human-authored commit. With autonomous agents now producing
sustained throughput across the SDLC, the constraint has shifted from
&ldquo;how many humans can coordinate on one codebase&rdquo; to &ldquo;how
many agents can a human direct without losing the thread.&rdquo; This paper
introduces the **Agentic Pod**: a variable-elasticity team structure in which
a small number of human operators direct a larger, scheduled, observable set
of agent workers. We argue the pod, not the two-pizza team, is the right
primitive for the next decade.

## 1. Background

The two-pizza team was never about pizza. It was about coordination overhead.
Brooks (1975) gave us the upper bound: communication paths grow as `n(n-1)/2`.
Bezos&rsquo;s heuristic was an empirical answer: keep `n` small enough that
the overhead doesn&rsquo;t swamp the throughput.

That heuristic assumed humans were the units. When the units include agents,
the math changes. Agents have communication cost too, but it is bounded,
explicit, and measurable. The pathology isn&rsquo;t coordination collapse.
It&rsquo;s **direction collapse**: the operator loses track of which agent
is doing what, on whose behalf, against which goal.

## 2. The Agentic Pod

A pod is defined by three things:

1. **A small operator cohort.** One to three humans who own the direction
   layer: goal setting, prioritization, review, and merge.
2. **An elastic agent layer.** Zero to *N* agents, where *N* is bounded by
   the cohort&rsquo;s ability to direct, not the budget&rsquo;s ability to
   pay.
3. **A shared spine.** A single source of truth for goals, work, and audit.
   In our reference implementation, this is a combination of a versioned
   handbook, a kanban that agents read and write, and an immutable activity
   log.

The pod scales by adding agents, not by adding pods. Adding a pod adds
communication paths between operators; adding agents to an existing pod adds
direction load to one operator, which is a function the operator can shed by
delegating direction itself.

## 3. Variable elasticity

The key property of a pod is that the agent count can change by orders of
magnitude over the course of a single day. A pod might run with two agents
during deep review and forty agents during a refactor sweep. Traditional team
structures cannot do this; payroll, onboarding, and trust costs make the
ramp impractical.

Pods can because the agents don&rsquo;t need onboarding in the human sense.
They need:

- **A goal**, expressed in writing.
- **Permission**, expressed in code.
- **A reference**, expressed in a handbook.

All three are version-controlled artifacts. They cost nothing to duplicate.

## 4. Open questions

This is a position paper, not an empirical one. The open questions we are
currently studying:

- **Direction load.** What is the empirical upper bound on agents per
  operator before quality degrades?
- **Trust topology.** When agents direct other agents, what authentication
  and audit structures preserve human accountability?
- **Failure modes.** What does a pod failure look like? Is it different from
  a team failure in ways that matter for org design?

## 5. Closing

The two-pizza team was a good answer to its question. Its question is no
longer the question. The pod is a candidate primitive for the new one.

---

*This is a working draft. Comments, criticisms, and counterexamples are
welcomed at amcheste@gmail.com.*
