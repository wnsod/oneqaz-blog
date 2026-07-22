---
title: "2026-07-23 US Trading Journal — Maine"
date: 2026-07-23T07:00:44+09:00
description: "Maine (US equities) journal: 212 trades, 17.9% win rate, avg -0.26% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-07-23
metrics:
  closed_trades: 212
  wins: 38
  losses: 174
  win_rate_pct: 17.9
  avg_pnl_pct: -0.264
  best_pct: 3.51
  worst_pct: -3.82
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.35
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-07-23-us-journal/
altLang: ko
---

## Key takeaways

- **212 closed trades**, win rate **17.9%**, expectancy **-0.26%** per trade.
- Profit factor **0.35** · avg win **+0.80%** vs avg loss **-0.50%** (R:R **1.60**).
- Best **+3.51%** / worst **-3.82%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 212 (38W / 174L) |
| Win rate | 17.9% |
| Expectancy / trade | -0.26% |
| Profit factor | 0.35 |
| Avg win / avg loss | +0.80% / -0.50% |
| Best / worst | +3.51% / -3.82% |


## Recap

The day's closed activity showed a mixed outcome across the portfolio. Out of the 212 trades closed, the overall win rate was 17.9%. The average expected return per trade was negative at -0.26%, suggesting that the losses tended to outweigh the gains on a per-trade basis. The profit factor registered at 0.35, indicating that the total gross profit was less than one-third of the total gross loss. Notable positive returns were seen in NFLX (+3.51%), BF-B (+3.14%), and FSLR (+3.02%). Conversely, the largest losses were recorded in AXON (-3.82%), CSGP (-3.46%), and NOW (-3.37%).

## Observations

The performance metrics suggest that while some individual trades captured meaningful upside, the frequency and magnitude of the losses pulled the aggregate results downward. The average winning trade (+0.80%) was substantially smaller in magnitude than the average losing trade (-0.50%), which contributed to the negative expectancy. The depth of the drawdowns, exemplified by the -3.82% loss in AXON, indicates that exposure to certain names resulted in significant capital erosion today <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />.

## For next time

The trades that resulted in the largest losses, such as those in AXON, CSGP, and NOW, highlight instances where the downside risk materialized significantly. These outcomes suggest that the underlying market conditions or sector-specific pressures were strong enough to overcome the initial directional bias established for those names. The pattern observed is that when the market sentiment shifts sharply against a held position, the rate of decline can be substantial, leading to a notable drag on overall performance <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

***

*This research note reflects a paper-trading simulation and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Netflix, Inc.(NFLX)</td><td>67.79</td><td>70.17</td><td class="pnl">+3.51%</td><td>19.9h</td><td>07-22 04:10 → 07-23 00:05</td></tr><tr class="t-win"><td class="res">win</td><td>Brown Forman Inc(BF-B)</td><td>25.82</td><td>26.63</td><td class="pnl">+3.14%</td><td>115.2h</td><td>07-18 03:20 → 07-22 22:35</td></tr><tr class="t-win"><td class="res">win</td><td>First Solar, Inc.(FSLR)</td><td>205.30</td><td>211.50</td><td class="pnl">+3.02%</td><td>20.2h</td><td>07-22 05:00 → 07-23 01:10</td></tr><tr class="t-win"><td class="res">win</td><td>CoStar Group, Inc.(CSGP)</td><td>27.69</td><td>28.13</td><td class="pnl">+1.59%</td><td>3.2h</td><td>07-22 23:45 → 07-23 02:55</td></tr><tr class="t-win"><td class="res">win</td><td>Charter Communications, Inc.(CHTR)</td><td>126.50</td><td>128.50</td><td class="pnl">+1.58%</td><td>0.9h</td><td>07-22 23:55 → 07-23 00:50</td></tr><tr class="t-loss"><td class="res">loss</td><td>Axon Enterprise, Inc.(AXON)</td><td>521.60</td><td>501.70</td><td class="pnl">-3.82%</td><td>22.2h</td><td>07-22 00:55 → 07-22 23:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>CoStar Group, Inc.(CSGP)</td><td>28.62</td><td>27.63</td><td class="pnl">-3.46%</td><td>20.6h</td><td>07-22 03:00 → 07-22 23:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>ServiceNow, Inc.(NOW)</td><td>102.10</td><td>98.66</td><td class="pnl">-3.37%</td><td>17.8h</td><td>07-22 04:45 → 07-22 22:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Uber Technologies, Inc.(UBER)</td><td>72.67</td><td>70.36</td><td class="pnl">-3.18%</td><td>117.0h</td><td>07-18 02:35 → 07-22 23:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Palantir Technologies Inc.(PLTR)</td><td>133.10</td><td>128.90</td><td class="pnl">-3.16%</td><td>18.0h</td><td>07-22 04:35 → 07-22 22:35</td></tr></tbody></table>
_P&L distribution (107 meaningful trades): min -3.82% · P25 -0.73% · median -0.25% · P75 +0.14% · max +3.51%_

**Full data** — all 212 closed trades: [CSV download](/data/journal/2026-07-23-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-07-23 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
