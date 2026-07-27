---
title: "2026-07-28 US Trading Journal — Maine"
date: 2026-07-28T07:00:42+09:00
description: "Maine (US equities) journal: 132 trades, 27.3% win rate, avg -0.52% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-07-28
metrics:
  closed_trades: 132
  wins: 36
  losses: 96
  win_rate_pct: 27.3
  avg_pnl_pct: -0.517
  best_pct: 5.6
  worst_pct: -8.54
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.47
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-07-28-us-journal/
altLang: ko
---

## Key takeaways

- **132 closed trades**, win rate **27.3%**, expectancy **-0.52%** per trade.
- Profit factor **0.47** · avg win **+1.69%** vs avg loss **-1.34%** (R:R **1.26**).
- Best **+5.60%** / worst **-8.54%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 132 (36W / 96L) |
| Win rate | 27.3% |
| Expectancy / trade | -0.52% |
| Profit factor | 0.47 |
| Avg win / avg loss | +1.69% / -1.34% |
| Best / worst | +5.60% / -8.54% |


## Recap

The recent closed trades show a mixed performance profile. Out of the 132 transactions reviewed, the win rate settled at 27.3%. The average profit realized on winning trades was +1.69%, while the average loss incurred on losing trades was -1.34%. This structure resulted in a negative expectancy of -0.52% per trade and a profit factor of 0.47. Notable positive outcomes included gains in CHTR (+5.60%) and AXON (+5.55%), alongside FFIV (+4.60%). Conversely, the losses were significant, highlighted by SNDK (-8.54%) and AMAT (-6.64%). <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />

## Observations

The disparity between the best recorded gain (+5.60%) and the worst loss (-8.54%) suggests that while some directional calls captured substantial upside, the magnitude of the drawdowns on the losing side weighed heavily on the overall expected return. The negative expectancy, despite capturing several notable gains, indicates that the frequency and size of the losses are currently outweighing the gains. <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />

## For Next Time

The trades involving AMAT and SNDK, which represented the largest losses, suggest sensitivity to specific sector or index movements that were not fully accounted for in the execution parameters. The negative expectancy points toward a need to re-evaluate the risk-reward balance across the executed set of trades. <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />

***
*This research note reflects a back-test simulation of historical trade data and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Charter Communications, Inc.(CHTR)</td><td>123.20</td><td>130.10</td><td class="pnl">+5.60%</td><td>71.3h</td><td>07-25 04:30 → 07-28 03:50</td></tr><tr class="t-win"><td class="res">win</td><td>Axon Enterprise, Inc.(AXON)</td><td>490.30</td><td>517.50</td><td class="pnl">+5.55%</td><td>91.5h</td><td>07-24 04:25 → 07-27 23:55</td></tr><tr class="t-win"><td class="res">win</td><td>F5, Inc.(FFIV)</td><td>389.10</td><td>407.00</td><td class="pnl">+4.60%</td><td>71.8h</td><td>07-25 04:50 → 07-28 04:40</td></tr><tr class="t-win"><td class="res">win</td><td>Booking Holdings Inc. Common St(BKNG)</td><td>177.30</td><td>183.70</td><td class="pnl">+3.61%</td><td>67.1h</td><td>07-25 04:50 → 07-27 23:55</td></tr><tr class="t-win"><td class="res">win</td><td>Skyworks Solutions, Inc.(SWKS)</td><td>60.04</td><td>62.18</td><td class="pnl">+3.56%</td><td>94.6h</td><td>07-24 03:50 → 07-28 02:25</td></tr><tr class="t-loss"><td class="res">loss</td><td>Sandisk Corporation(SNDK)</td><td>1,428</td><td>1,306</td><td class="pnl">-8.54%</td><td>67.6h</td><td>07-25 04:05 → 07-27 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Applied Materials, Inc.(AMAT)</td><td>543.30</td><td>507.20</td><td class="pnl">-6.64%</td><td>68.2h</td><td>07-25 03:30 → 07-27 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Coherent Corp.(COHR)</td><td>284.70</td><td>265.90</td><td class="pnl">-6.60%</td><td>67.8h</td><td>07-25 03:55 → 07-27 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Corning Incorporated(GLW)</td><td>149.30</td><td>139.50</td><td class="pnl">-6.56%</td><td>68.2h</td><td>07-25 03:30 → 07-27 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Paramount Skydance Corporation(PSKY)</td><td>8.54</td><td>8.07</td><td class="pnl">-5.47%</td><td>91.3h</td><td>07-24 04:20 → 07-27 23:40</td></tr></tbody></table>
_P&L distribution (92 meaningful trades): min -8.54% · P25 -1.48% · median -0.40% · P75 +0.59% · max +5.60%_

**Full data** — all 132 closed trades: [CSV download](/data/journal/2026-07-28-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-07-28 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
