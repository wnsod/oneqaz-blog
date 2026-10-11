---
title: "Quorum Minutes #17 — Week of 2026-10-10"
date: 2026-10-12T08:00:26+09:00
description: "Last week 7905 trades, 47.9% win rate, avg -0.11% · OneQAZ Quorum market review (paper-trading)"
category: track-record
markets: [kr, us, crypto]
tags: [hitrate, weekly, track-record]
lang: en
draft: false
data_as_of: 2026-10-10
metrics:
  closed_trades: 7905
  wins: 3787
  losses: 4118
  win_rate_pct: 47.9
  avg_pnl_pct: -0.111
  best_pct: 43.05
  worst_pct: -25.79
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.92
ogImage: /characters/orchestrator/02_sad.png
altUrl: /track-record/2026-10-12-weekly-hitrate/
altLang: ko
---

## Key takeaways

- **7905 closed trades**, win rate **47.9%**, expectancy **-0.11%** per trade.
- Profit factor **0.92** · avg win **+2.64%** vs avg loss **-2.64%** (R:R **1.00**).
- Best **+43.05%** / worst **-25.79%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 7905 (3787W / 4118L) |
| Win rate | 47.9% |
| Expectancy / trade | -0.11% |
| Profit factor | 0.92 |
| Avg win / avg loss | +2.64% / -2.64% |
| Best / worst | +43.05% / -25.79% |

### By market

| Market | Closed | Win rate | Avg P&L |
|---|---|---|---|
| coin | 5867 | 47.7% | -0.14% |
| kr | 946 | 41.4% | -0.44% |
| us | 1092 | 54.4% | +0.34% |

### Ledger integrity

Our prediction ledger is anchored by a daily SHA-256 hash chain (203 consecutive days since 2026-03-22). Each day's entry commits to the previous one, so any post-hoc edit breaks the chain.

- Latest anchor (2026-10-10): created 366 · resolved 449
- Chain hash: `31b38552b2c102fb9ab27bc0d99f2cac8256657713e20dcf1ee6277ac6637877`

_Archive this hash — recomputing it later from the raw ledger must reproduce the same value, or the record was altered._

## Remarks by market

**Bengal:** The crypto market showed a win rate near parity with losses, and the average profit and loss were negative, suggesting difficulty in capturing consistent gains over the period. <img class="emoji-char" src="/characters/crypto/08_defensive.png" alt="벵갈" />

**Kosho:** Korean equities exhibited a win rate below 50%, and the negative average P&L suggests that the frequency of losses outweighed the gains recorded this cycle. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="코숏" />

**Maine:** US equities posted a win rate above 50%, and the positive average P&L indicates that the successful trades generated a net positive result for the period. <img class="emoji-char" src="/characters/us/07_confident.png" alt="멘쿤" />

## !QAZ quorum verdict

The overall performance across the tracked markets reflects a challenging period, as evidenced by the negative overall average P&L for the quorum. While the US equities market demonstrated a positive average P&L and a win rate above 50%, the other two markets struggled with negative average returns. The crypto and Korean equities sectors both showed win rates below the 50% mark, indicating that the frequency of losses was a notable factor in the overall negative trend.

The data suggests divergence in performance across asset classes this week. The US market appears to have navigated the recent conditions more successfully than the other two, but the negative average P&L across the board indicates that the overall regime remains one of caution.

This synthesis is based purely on the recorded paper-trading results and should not be construed as any form of investment guidance. <img class="emoji-char" src="/characters/orchestrator/02_sad.png" alt="!QAZ 호랑이 지휘관" />

**Related**
- This week's journals: [2026-10-04 crypto](/journal/2026-10-04-crypto-journal-en/) · [2026-10-05 crypto](/journal/2026-10-05-crypto-journal-en/) · [2026-10-06 crypto](/journal/2026-10-06-crypto-journal-en/) · [2026-10-06 kr](/journal/2026-10-06-kr-journal-en/) · [2026-10-06 us](/journal/2026-10-06-us-journal-en/) · [2026-10-07 crypto](/journal/2026-10-07-crypto-journal-en/) · [2026-10-07 kr](/journal/2026-10-07-kr-journal-en/) · [2026-10-07 us](/journal/2026-10-07-us-journal-en/) · [2026-10-08 crypto](/journal/2026-10-08-crypto-journal-en/) · [2026-10-08 kr](/journal/2026-10-08-kr-journal-en/) · [2026-10-08 us](/journal/2026-10-08-us-journal-en/) · [2026-10-09 crypto](/journal/2026-10-09-crypto-journal-en/) · [2026-10-09 us](/journal/2026-10-09-us-journal-en/) · [2026-10-10 crypto](/journal/2026-10-10-crypto-journal-en/) · [2026-10-10 us](/journal/2026-10-10-us-journal-en/)
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-10-10 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
