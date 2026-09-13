---
title: "Quorum Minutes #13 — Week of 2026-09-12"
date: 2026-09-14T08:00:48+09:00
description: "Last week 5636 trades, 44.9% win rate, avg -0.34% · OneQAZ Quorum market review (paper-trading)"
category: track-record
markets: [kr, us, crypto]
tags: [hitrate, weekly, track-record]
lang: en
draft: false
data_as_of: 2026-09-12
metrics:
  closed_trades: 5636
  wins: 2533
  losses: 3103
  win_rate_pct: 44.9
  avg_pnl_pct: -0.339
  best_pct: 185.07
  worst_pct: -29.62
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.78
ogImage: /characters/orchestrator/02_sad.png
altUrl: /track-record/2026-09-14-weekly-hitrate/
altLang: ko
---

## Key takeaways

- **5636 closed trades**, win rate **44.9%**, expectancy **-0.34%** per trade.
- Profit factor **0.78** · avg win **+2.75%** vs avg loss **-2.86%** (R:R **0.96**).
- Best **+185.07%** / worst **-29.62%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 5636 (2533W / 3103L) |
| Win rate | 44.9% |
| Expectancy / trade | -0.34% |
| Profit factor | 0.78 |
| Avg win / avg loss | +2.75% / -2.86% |
| Best / worst | +185.07% / -29.62% |

### By market

| Market | Closed | Win rate | Avg P&L |
|---|---|---|---|
| coin | 4175 | 48.0% | -0.17% |
| kr | 728 | 46.8% | -0.14% |
| us | 733 | 25.4% | -1.50% |

### Ledger integrity

Our prediction ledger is anchored by a daily SHA-256 hash chain (175 consecutive days since 2026-03-22). Each day's entry commits to the previous one, so any post-hoc edit breaks the chain.

- Latest anchor (2026-09-12): created 432 · resolved 376
- Chain hash: `dacb2027ed0fb646d554a3f81242b4aac4632aa8caed7adf98b36dea543b2bf5`

_Archive this hash — recomputing it later from the raw ledger must reproduce the same value, or the record was altered._

## Remarks by market

**Bengal:** The crypto market showed a win rate of 48.0%, which was relatively stable, but the average profit and loss figure of -0.17 suggests that the losses tended to outweigh the gains over the observed period. <img class="emoji-char" src="/characters/crypto/08_defensive.png" alt="벵갈" />

**Kosho:** Korean equities maintained a win rate of 46.8%, indicating a slight edge in winning trades, yet the negative average P&L of -0.145 points to persistent drag from losing trades. <img class="emoji-char" src="/characters/kr/08_defensive.png" alt="코숏" />

**Maine:** US equities presented the most challenging picture, with a low win rate of 25.4% and a significantly negative average P&L of -1.498, suggesting substantial losses relative to wins. <img class="emoji-char" src="/characters/us/02_sad.png" alt="멘쿤" />

## !QAZ quorum verdict

The overall performance across the tracked markets reflects a challenging period, as evidenced by the negative average profit and loss across all sectors. While the crypto and Korean equities markets showed win rates hovering near the midpoint, the magnitude of the losses, particularly in US equities, pulled the aggregate performance down. The data suggests that the frequency of losses was impactful enough to temper the positive aspects of the wins.

This research summary indicates a prevailing downward sentiment across the board, where the cost associated with incorrect trades appears to be a dominant theme. The sample size for US equities, while larger than Kosho's, is notably smaller than the crypto data set.

This analysis represents a review of historical paper-trading outcomes and should not be construed as investment advice or a predictor of future market movements. <img class="emoji-char" src="/characters/orchestrator/02_sad.png" alt="!QAZ 호랑이 지휘관" />

**Related**
- This week's journals: [2026-09-06 crypto](/journal/2026-09-06-crypto-journal-en/) · [2026-09-07 crypto](/journal/2026-09-07-crypto-journal-en/) · [2026-09-07 kr](/journal/2026-09-07-kr-journal-en/) · [2026-09-08 crypto](/journal/2026-09-08-crypto-journal-en/) · [2026-09-08 kr](/journal/2026-09-08-kr-journal-en/) · [2026-09-09 crypto](/journal/2026-09-09-crypto-journal-en/) · [2026-09-09 kr](/journal/2026-09-09-kr-journal-en/) · [2026-09-09 us](/journal/2026-09-09-us-journal-en/) · [2026-09-10 crypto](/journal/2026-09-10-crypto-journal-en/) · [2026-09-10 kr](/journal/2026-09-10-kr-journal-en/) · [2026-09-10 us](/journal/2026-09-10-us-journal-en/) · [2026-09-11 crypto](/journal/2026-09-11-crypto-journal-en/) · [2026-09-11 kr](/journal/2026-09-11-kr-journal-en/) · [2026-09-11 us](/journal/2026-09-11-us-journal-en/) · [2026-09-12 crypto](/journal/2026-09-12-crypto-journal-en/) · [2026-09-12 us](/journal/2026-09-12-us-journal-en/)
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-12 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
