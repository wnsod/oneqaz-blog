---
title: "Quorum Minutes #12 — Week of 2026-09-05"
date: 2026-09-07T08:00:49+09:00
description: "Last week 6168 trades, 47.6% win rate, avg -0.15% · OneQAZ Quorum market review (paper-trading)"
category: track-record
markets: [kr, us, crypto]
tags: [hitrate, weekly, track-record]
lang: en
draft: false
data_as_of: 2026-09-05
metrics:
  closed_trades: 6168
  wins: 2933
  losses: 3235
  win_rate_pct: 47.6
  avg_pnl_pct: -0.155
  best_pct: 28.92
  worst_pct: -50.31
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.89
ogImage: /characters/orchestrator/02_sad.png
altUrl: /track-record/2026-09-07-weekly-hitrate/
altLang: ko
---

## Key takeaways

- **6168 closed trades**, win rate **47.6%**, expectancy **-0.15%** per trade.
- Profit factor **0.89** · avg win **+2.76%** vs avg loss **-2.79%** (R:R **0.99**).
- Best **+28.92%** / worst **-50.31%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 6168 (2933W / 3235L) |
| Win rate | 47.6% |
| Expectancy / trade | -0.15% |
| Profit factor | 0.89 |
| Avg win / avg loss | +2.76% / -2.79% |
| Best / worst | +28.92% / -50.31% |

### By market

| Market | Closed | Win rate | Avg P&L |
|---|---|---|---|
| coin | 4266 | 51.0% | +0.11% |
| kr | 924 | 43.4% | -0.80% |
| us | 978 | 36.4% | -0.70% |

### Ledger integrity

Our prediction ledger is anchored by a daily SHA-256 hash chain (168 consecutive days since 2026-03-22). Each day's entry commits to the previous one, so any post-hoc edit breaks the chain.

- Latest anchor (2026-09-05): created 216 · resolved 291
- Chain hash: `28f744229300a3a2ac63ec9bd75b3f92554c52f7eed12be542660b0b68e11cf7`

_Archive this hash — recomputing it later from the raw ledger must reproduce the same value, or the record was altered._

## Remarks by market

**Bengal:** The crypto market maintained a win rate above 50% this period, which is positive, though the average profit and loss figures suggest that the magnitude of losses was significant enough to temper overall performance. <img class="emoji-char" src="/characters/crypto/01_joy.png" alt="벵갈" />

**Kosho:** Korean equities showed a win rate below 50%, and the average profit and loss was negative, indicating that the frequency of losses outweighed the gains recorded during this period. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="코숏" />

**Maine:** US equities registered the lowest win rate among the three markets, and the average profit and loss was also negative, suggesting that the selling pressure was notable relative to the winning trades. <img class="emoji-char" src="/characters/us/02_sad.png" alt="멘쿤" />

## !QAZ quorum verdict

The overall performance across the analyzed markets suggests a challenging environment, reflected in the negative average profit and loss across the board. While the crypto market demonstrated a higher win rate, both Korean and US equities showed metrics pointing toward caution. The overall pattern suggests that while some areas captured gains, the losses incurred were substantial enough to pull the aggregate performance into negative territory.

This review is based purely on historical paper-trading results and does not constitute any form of investment advice or prediction regarding future market movements. The analysis reflects what has transpired in the simulated trading records.

<img class="emoji-char" src="/characters/orchestrator/02_sad.png" alt="!QAZ 호랑이 지휘관" />

**Related**
- This week's journals: [2026-08-30 crypto](/journal/2026-08-30-crypto-journal-en/) · [2026-08-31 crypto](/journal/2026-08-31-crypto-journal-en/) · [2026-08-31 kr](/journal/2026-08-31-kr-journal-en/) · [2026-09-01 crypto](/journal/2026-09-01-crypto-journal-en/) · [2026-09-01 kr](/journal/2026-09-01-kr-journal-en/) · [2026-09-01 us](/journal/2026-09-01-us-journal-en/) · [2026-09-02 crypto](/journal/2026-09-02-crypto-journal-en/) · [2026-09-02 kr](/journal/2026-09-02-kr-journal-en/) · [2026-09-02 us](/journal/2026-09-02-us-journal-en/) · [2026-09-03 crypto](/journal/2026-09-03-crypto-journal-en/) · [2026-09-03 kr](/journal/2026-09-03-kr-journal-en/) · [2026-09-03 us](/journal/2026-09-03-us-journal-en/) · [2026-09-04 crypto](/journal/2026-09-04-crypto-journal-en/) · [2026-09-04 kr](/journal/2026-09-04-kr-journal-en/) · [2026-09-04 us](/journal/2026-09-04-us-journal-en/) · [2026-09-05 crypto](/journal/2026-09-05-crypto-journal-en/) · [2026-09-05 us](/journal/2026-09-05-us-journal-en/)
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-05 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
