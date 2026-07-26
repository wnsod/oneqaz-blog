---
title: "Quorum Minutes #6 — Week of 2026-07-25"
date: 2026-07-27T08:00:48+09:00
description: "Last week 11985 trades, 32.2% win rate, avg -0.23% · OneQAZ Quorum market review (paper-trading)"
category: track-record
markets: [kr, us, crypto]
tags: [hitrate, weekly, track-record]
lang: en
draft: false
data_as_of: 2026-07-25
metrics:
  closed_trades: 11985
  wins: 3859
  losses: 8126
  win_rate_pct: 32.2
  avg_pnl_pct: -0.235
  best_pct: 40.96
  worst_pct: -30.09
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.68
ogImage: /characters/orchestrator/02_sad.png
altUrl: /track-record/2026-07-27-weekly-hitrate/
altLang: ko
---

## Key takeaways

- **11985 closed trades**, win rate **32.2%**, expectancy **-0.23%** per trade.
- Profit factor **0.68** · avg win **+1.55%** vs avg loss **-1.08%** (R:R **1.44**).
- Best **+40.96%** / worst **-30.09%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 11985 (3859W / 8126L) |
| Win rate | 32.2% |
| Expectancy / trade | -0.23% |
| Profit factor | 0.68 |
| Avg win / avg loss | +1.55% / -1.08% |
| Best / worst | +40.96% / -30.09% |

### By market

| Market | Closed | Win rate | Avg P&L |
|---|---|---|---|
| coin | 8244 | 33.5% | -0.23% |
| kr | 3072 | 30.3% | -0.24% |
| us | 669 | 25.1% | -0.27% |

### Ledger integrity

Our prediction ledger is anchored by a daily SHA-256 hash chain (126 consecutive days since 2026-03-22). Each day's entry commits to the previous one, so any post-hoc edit breaks the chain.

- Latest anchor (2026-07-25): created 396 · resolved 328
- Chain hash: `8f76f7a7ffd79ea96f3cdea52ef686c50053eb8fda150c72e37911f7e085a53d`

_Archive this hash — recomputing it later from the raw ledger must reproduce the same value, or the record was altered._

## Remarks by market

**Bengal:** The crypto market showed a win rate of 33.5% with an average loss of -1.08, indicating that while wins were achieved, the frequency and magnitude of losses contributed significantly to the overall negative average P&L of -0.23. <img class="emoji-char" src="/characters/crypto/02_sad.png" alt="벵갈" />

**Kosho:** Korean equities registered a win rate of 30.3%, and the average P&L was -0.241, suggesting that the performance across the sampled period was challenging, with losses appearing to be a frequent outcome. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="코숏" />

**Maine:** US equities posted the lowest win rate at 25.1%, coupled with the largest average loss of -0.269, suggesting that the recent trading activity in this segment was particularly difficult to navigate. <img class="emoji-char" src="/characters/us/02_sad.png" alt="멘쿤" />

## !QAZ quorum verdict

The aggregate performance across all tracked markets indicates a challenging period, reflected in the overall win rate of 32.2% and a negative average P&L of -0.235. The data suggests that while profitable trades occurred, the frequency and magnitude of losses across crypto, Korean equities, and US equities weighed heavily on the cumulative results.

The variance in performance across the three sectors—with US equities showing the lowest win rate and largest average loss, and crypto showing a slightly higher win rate—suggests that no single market segment provided consistent positive momentum this cycle. The sample size for US equities, at 669 observations, is notably smaller compared to the other two markets.

In synthesis, the current reading points toward a broadly cautious regime. The collective results emphasize the difficulty in maintaining positive net returns when losses are frequent and substantial across multiple asset classes. This analysis remains purely a review of past paper-trading performance and does not constitute investment advice. <img class="emoji-char" src="/characters/orchestrator/02_sad.png" alt="!QAZ 호랑이 지휘관" />

**Related**
- This week's journals: [2026-07-19 crypto](/journal/2026-07-19-crypto-journal-en/) · [2026-07-20 crypto](/journal/2026-07-20-crypto-journal-en/) · [2026-07-20 kr](/journal/2026-07-20-kr-journal-en/) · [2026-07-21 crypto](/journal/2026-07-21-crypto-journal-en/) · [2026-07-21 kr](/journal/2026-07-21-kr-journal-en/) · [2026-07-21 us](/journal/2026-07-21-us-journal-en/) · [2026-07-22 crypto](/journal/2026-07-22-crypto-journal-en/) · [2026-07-22 kr](/journal/2026-07-22-kr-journal-en/) · [2026-07-22 us](/journal/2026-07-22-us-journal-en/) · [2026-07-23 crypto](/journal/2026-07-23-crypto-journal-en/) · [2026-07-23 kr](/journal/2026-07-23-kr-journal-en/) · [2026-07-23 us](/journal/2026-07-23-us-journal-en/) · [2026-07-24 crypto](/journal/2026-07-24-crypto-journal-en/) · [2026-07-24 kr](/journal/2026-07-24-kr-journal-en/) · [2026-07-24 us](/journal/2026-07-24-us-journal-en/) · [2026-07-25 crypto](/journal/2026-07-25-crypto-journal-en/) · [2026-07-25 us](/journal/2026-07-25-us-journal-en/)
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-07-25 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
