---
title: "Why AI Is Shockingly Expensive to Run"
subtitle: "The economics of inference, explained without euphemism."
date: 2026-05-01
description: "The economics of inference, explained without euphemism."
draft: false
---

The pitch decks talk about training costs. The invoices are about inference.

A model is trained once and run a billion times. The cost shape of those two
activities is wildly different, and most of the public discussion conflates
them. Training is a capital expense with a clear end. Inference is an
operating expense that scales with every user, every token, every retry.

## The number that matters

For any production deployment, the number that matters is **cost per useful
response**. Not cost per token. Not cost per request. Not GPU utilization.
Useful means the response actually advanced the user&rsquo;s task. Everything
else is overhead disguised as throughput.

When you measure that way, three costs dominate:

1. **Input tokens you didn&rsquo;t need to send.** Every irrelevant document in
   the context window is paid for at full price, every time.
2. **Output tokens you re-roll.** Each retry is a full inference pass.
3. **Tool calls that don&rsquo;t terminate.** Agents that loop are inference
   without bound.

## Where the bill comes from

Inference is bound by memory bandwidth, not compute. A single decoded token
requires the entire model&rsquo;s weights to be moved from HBM through the
GPU&rsquo;s arithmetic units. The bigger the model, the more bytes per token,
the more dollars per token. Batching helps the provider but not the
individual request. Latency-sensitive workloads can&rsquo;t batch much.

This is why prompt caching matters more than it sounds. A cache hit skips the
input-token charge for the prefix you&rsquo;ve already paid for. On long
system prompts, that&rsquo;s often the difference between a viable product
and a money pit.

## The mental model

> Treat inference like a database query. You wouldn&rsquo;t scan a billion
> rows to answer one question. Don&rsquo;t feed a model a megabyte of context
> to answer one question either.

The frame that helps: every token is a line item on a bill someone is going
to read.

---

This is the first in a short series on the operational economics of AI
products. Future posts will cover caching strategies, the real cost of
tool-using agents, and how to instrument a production deployment so the
finance team and the engineering team are looking at the same numbers.
