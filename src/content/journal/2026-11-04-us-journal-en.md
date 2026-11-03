---
title: "2026-11-04 US Trading Journal — Maine"
date: 2026-11-04T08:30:42+09:00
description: "Maine (US equities) journal: 317 trades, 43.5% win rate, avg -0.16% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-11-04
metrics:
  closed_trades: 317
  wins: 138
  losses: 179
  win_rate_pct: 43.5
  avg_pnl_pct: -0.162
  best_pct: 10.41
  worst_pct: -20.26
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.84
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-11-04-us-journal/
altLang: ko
---

## Key takeaways

- **317 closed trades**, win rate **43.5%**, expectancy **-0.16%** per trade.
- Profit factor **0.84** · avg win **+1.89%** vs avg loss **-1.74%** (R:R **1.09**).
- Best **+10.41%** / worst **-20.26%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 317 (138W / 179L) |
| Win rate | 43.5% |
| Expectancy / trade | -0.16% |
| Profit factor | 0.84 |
| Avg win / avg loss | +1.89% / -1.74% |
| Best / worst | +10.41% / -20.26% |


## Recap

The day's closed activity shows a mixed outcome across the executed trades. Out of the 317 closed positions, the win rate settled at 43.5%. The average profitability per trade was negative at -0.16%, with a profit factor below parity at 0.84. The performance was characterized by a notable divergence between average gains (+1.89%) and average losses (-1.74%). The range of outcomes was wide, highlighted by the best single gain at +10.41% (RVTY) and the worst loss at -20.26% (IT). The notable winners, such as RVTY and FISV, provided positive anchors, but these gains were offset by significant drawdowns seen in names like IT and ZBRA. <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />

## Observations from Losses

The losses incurred, particularly the deep drawdowns observed in IT and ZBRA, suggest sensitivity to specific market conditions or sector rotations that were not fully accounted for in the trade selection. The magnitude of the worst loss relative to the best gain indicates that risk management parameters, while capturing some significant upside, were also exposed to substantial downside volatility. The negative expectancy suggests that the aggregate cost of the losses outweighed the gains realized across the sample set. <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />

## For Next Time

The data suggests that while capturing large positive moves is possible, the frequency and depth of the losses are pulling the overall performance profile downward. The structure of the results points toward a need to reassess the risk/reward profile across the spectrum of trades executed. The pattern observed is one of inconsistent directional conviction across the sampled names. <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Revvity, Inc.(RVTY)</td><td>152.70</td><td>168.60</td><td class="pnl">+10.41%</td><td>22.7h</td><td>11-03 01:00 → 11-03 23:40</td></tr><tr class="t-win"><td class="res">win</td><td>Fiserv, Inc.(FISV)</td><td>51.55</td><td>56.19</td><td class="pnl">+9.00%</td><td>20.9h</td><td>11-03 02:45 → 11-03 23:40</td></tr><tr class="t-win"><td class="res">win</td><td>DuPont de Nemours, Inc.(DD)</td><td>141.60</td><td>153.20</td><td class="pnl">+8.19%</td><td>20.6h</td><td>11-03 03:05 → 11-03 23:40</td></tr><tr class="t-win"><td class="res">win</td><td>Bloom Energy Corporation(BE)</td><td>199.70</td><td>213.60</td><td class="pnl">+6.96%</td><td>19.6h</td><td>11-03 04:10 → 11-03 23:45</td></tr><tr class="t-win"><td class="res">win</td><td>Clorox Company (The)(CLX)</td><td>88.35</td><td>93.69</td><td class="pnl">+6.04%</td><td>118.7h</td><td>10-30 01:05 → 11-03 23:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Gartner, Inc.(IT)</td><td>235.90</td><td>188.10</td><td class="pnl">-20.26%</td><td>19.1h</td><td>11-03 04:35 → 11-03 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Zebra Technologies Corporation(ZBRA)</td><td>365.40</td><td>314.40</td><td class="pnl">-13.96%</td><td>19.2h</td><td>11-03 04:25 → 11-03 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Apollo Global Management, Inc.(APO)</td><td>122.50</td><td>112.10</td><td class="pnl">-8.49%</td><td>20.9h</td><td>11-03 02:45 → 11-03 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Sysco Corporation(SYY)</td><td>82.14</td><td>77.31</td><td class="pnl">-5.88%</td><td>118.5h</td><td>10-30 01:10 → 11-03 23:40</td></tr><tr class="t-loss"><td class="res">loss</td><td>Apple Inc.(AAPL)</td><td>345.20</td><td>327.50</td><td class="pnl">-5.13%</td><td>90.7h</td><td>10-31 05:00 → 11-03 23:40</td></tr></tbody></table>
_P&L distribution (254 meaningful trades): min -20.26% · P25 -1.74% · median -0.26% · P75 +1.53% · max +10.41%_

**Full data** — all 317 closed trades: [CSV download](/data/journal/2026-11-04-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-11-04 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
