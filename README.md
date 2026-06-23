# forge-minions-demo 🤖

A live sandbox that proves out [**Forge minions**](https://github.com/salehaiftikharr/agent-forge) — autonomous agents that pick up a GitHub issue, write a fix, run the test suite, and open a pull request **on their own**.

> **Every pull request in this repo was opened by an agent, not a human.**
> Browse them here → [**Pull Requests**](https://github.com/salehaiftikharr/forge-minions-demo/pulls?q=is%3Apr)

---

## How a minion works

```
  GitHub issue
       │
       ▼
  ┌─────────────────────────────────────────────┐
  │  Forge minion                                │
  │  1. reads the issue and the codebase         │
  │  2. writes a fix on a fresh branch           │
  │  3. runs `npm test`                          │
  │  4. opens a PR — only if the tests pass      │
  │     and nothing else regressed               │
  └─────────────────────────────────────────────┘
       │
       ▼
  Verified pull request  ✅   (or it declines)
```

The key idea is the **verification gate**: a minion never opens a PR on vibes. It has to make the suite green and avoid regressing existing behavior first. Across a labeled eval set in [agent-forge](https://github.com/salehaiftikharr/agent-forge), the minions recorded **zero unsafe ships** — they never shipped work they should have declined.

## What's in here

A deliberately tiny JavaScript utility library (`src/utils.js`) with a test suite (`test/`). It is small on purpose: the interesting part is not the code, it is *who wrote it*. New issues become new PRs, opened autonomously.

```bash
npm test   # node --test
```

## Sample of autonomous work

A minion has opened PRs adding helpers like `clamp(n, min, max)`, `truncate(str, max)`, `capitalize(str)`, and `unique(array)`, plus a failing-test-first PR for edge cases in `slugify`. One slugify fix has already been **merged**.

Each PR includes the agent's reasoning and a passing test run.

## Built with

- [**agent-forge**](https://github.com/salehaiftikharr/agent-forge) — the system that builds, tests, and dispatches the minions
- Node.js, GitHub API, dispatched from a Slack bot

---

Part of [Saleha Iftikhar's](https://saleha.live) work on autonomous, *trustworthy* coding agents.
