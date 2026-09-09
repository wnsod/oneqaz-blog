---
title: "2026-09-10 US Trading Journal — Maine"
date: 2026-09-10T07:00:44+09:00
description: "Maine (US equities) journal: 194 trades, 20.1% win rate, avg -2.02% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-10
metrics:
  closed_trades: 194
  wins: 39
  losses: 155
  win_rate_pct: 20.1
  avg_pnl_pct: -2.018
  best_pct: 4.89
  worst_pct: -17.17
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.15
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-09-10-us-journal/
altLang: ko
---

## Key takeaways

- **194 closed trades**, win rate **20.1%**, expectancy **-2.02%** per trade.
- Profit factor **0.15** · avg win **+1.76%** vs avg loss **-2.97%** (R:R **0.59**).
- Best **+4.89%** / worst **-17.17%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 194 (39W / 155L) |
| Win rate | 20.1% |
| Expectancy / trade | -2.02% |
| Profit factor | 0.15 |
| Avg win / avg loss | +1.76% / -2.97% |
| Best / worst | +4.89% / -17.17% |


## Recap

The day's closed activity reflects a challenging risk profile. Out of the 194 trades closed, the win rate settled at 20.1%. The average expectancy per trade was negative at -2.02%, which is a notable drag on overall performance. The profit factor of 0.15 suggests that the magnitude of losses significantly outweighed the gains realized. Notable positive outcomes included gains in AKAM (+4.89%), META (+4.38%), and HCA (+3.81%). Conversely, the losses were substantial, highlighted by the -17.17% decline in CASY and the -7.20% move in BKNG. The disparity between the average win (+1.76%) and the average loss (-2.97%) indicates that the downside captures were disproportionately larger than the upside captures <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />.

## Observations

The depth of the losses observed, particularly the -17.17% result, points to instances where the market moved against the established directional bias with considerable force. These outcomes suggest that the underlying market structure or sector-specific resistance levels were not fully accounted for in the execution parameters. The data indicates that while some profitable trades were recorded, the overall negative expectancy suggests that the risk taken on the losing side was too large relative to the expected return on the winning side <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

## For Next Time

The performance review of the closed trades emphasizes the need for a more disciplined approach to managing the size of adverse movements. The significant negative skew between average win and average loss suggests that the risk parameters need recalibration to better absorb volatility without incurring such large drawdowns. The observed results are purely historical data points from paper trading and do not constitute any form of investment guidance.

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Akamai Technologies, Inc.(AKAM)</td><td>104.40</td><td>109.50</td><td class="pnl">+4.89%</td><td>143.8h</td><td>09-03 23:45 → 09-09 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>Meta Platforms, Inc.(META)</td><td>613.90</td><td>640.80</td><td class="pnl">+4.38%</td><td>141.0h</td><td>09-04 02:35 → 09-09 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>HCA Healthcare, Inc.(HCA)</td><td>409.00</td><td>424.60</td><td class="pnl">+3.81%</td><td>149.5h</td><td>09-03 22:50 → 09-10 04:20</td></tr><tr class="t-win"><td class="res">win</td><td>Universal Health Services, Inc.(UHS)</td><td>170.20</td><td>176.00</td><td class="pnl">+3.41%</td><td>5.2h</td><td>09-09 23:05 → 09-10 04:20</td></tr><tr class="t-win"><td class="res">win</td><td>Caseys General Stores, Inc.(CASY)</td><td>602.90</td><td>622.90</td><td class="pnl">+3.32%</td><td>2.1h</td><td>09-09 23:15 → 09-10 01:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>Caseys General Stores, Inc.(CASY)</td><td>736.20</td><td>609.80</td><td class="pnl">-17.17%</td><td>18.9h</td><td>09-09 03:50 → 09-09 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Booking Holdings Inc. Common St(BKNG)</td><td>184.60</td><td>171.30</td><td class="pnl">-7.20%</td><td>23.2h</td><td>09-08 23:35 → 09-09 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Kimberly-Clark Corporation(KMB)</td><td>105.70</td><td>99.67</td><td class="pnl">-5.70%</td><td>113.8h</td><td>09-05 04:55 → 09-09 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Clorox Company (The)(CLX)</td><td>94.65</td><td>89.61</td><td class="pnl">-5.32%</td><td>140.0h</td><td>09-04 02:45 → 09-09 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Axon Enterprise, Inc.(AXON)</td><td>517.50</td><td>490.80</td><td class="pnl">-5.16%</td><td>119.1h</td><td>09-04 23:40 → 09-09 22:45</td></tr></tbody></table>
_P&L distribution (190 meaningful trades): min -17.17% · P25 -3.44% · median -3.15% · P75 -0.54% · max +4.89%_

**Full data** — all 194 closed trades: [CSV download](/data/journal/2026-09-10-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-10 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
