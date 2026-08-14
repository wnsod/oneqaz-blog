---
title: "2026-08-15 US Trading Journal — Maine"
date: 2026-08-15T07:00:43+09:00
description: "Maine (US equities) journal: 199 trades, 49.7% win rate, avg +0.33% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-08-15
metrics:
  closed_trades: 199
  wins: 99
  losses: 100
  win_rate_pct: 49.7
  avg_pnl_pct: 0.333
  best_pct: 6.6
  worst_pct: -4.67
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 1.7
ogImage: /characters/us/01_joy.png
altUrl: /journal/2026-08-15-us-journal/
altLang: ko
---

## Key takeaways

- **199 closed trades**, win rate **49.7%**, expectancy **+0.33%** per trade.
- Profit factor **1.70** · avg win **+1.63%** vs avg loss **-0.95%** (R:R **1.72**).
- Best **+6.60%** / worst **-4.67%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 199 (99W / 100L) |
| Win rate | 49.7% |
| Expectancy / trade | +0.33% |
| Profit factor | 1.70 |
| Avg win / avg loss | +1.63% / -0.95% |
| Best / worst | +6.60% / -4.67% |


## Recap

The day's closed activity shows a mixed bag of outcomes. Out of the 199 trades concluded, the win rate settled at 49.7%, which is close to parity. The overall expectancy remained positive at +0.33% per trade, supported by an average win size of +1.63% compared to an average loss of -0.95%. The profit factor of 1.70 suggests that winning trades generally outweighed the magnitude of the losing trades. Notable positive returns were observed in names like Copart, Inc. (CPRT) and Valero Energy Corporation (VLO) <img class="emoji-char" src="/characters/us/01_joy.png" alt="Maine" />.

## Lessons from the Edges

The notable losses, such as those in Broadcom Inc. (AVGO) and Ciena Corporation (CIEN), highlight instances where the market moved against the established directional bias, resulting in declines exceeding the average loss threshold. These instances underscore that even when the overall expectancy is positive, the variance in outcomes—the difference between the best +6.60% and the worst -4.67%—remains substantial. It is clear that the market can exhibit sharp, temporary reversals that require careful observation.

## Observations

The performance metrics suggest that while the system captured several profitable opportunities, the depth of the drawdowns in the losing trades indicates areas where conviction or timing may have been challenged by underlying volatility. The positive expectancy, despite the notable negative outliers, suggests the underlying structure of the trades executed held value over the sample period. <img class="emoji-char" src="/characters/us/12_relieved.png" alt="Maine" />

***

*This research note reflects a backtest of historical trading data and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Copart, Inc.(CPRT)</td><td>29.53</td><td>31.48</td><td class="pnl">+6.60%</td><td>76.1h</td><td>08-12 00:05 → 08-15 04:10</td></tr><tr class="t-win"><td class="res">win</td><td>Valero Energy Corporation(VLO)</td><td>322.70</td><td>343.90</td><td class="pnl">+6.57%</td><td>67.1h</td><td>08-12 04:25 → 08-14 23:30</td></tr><tr class="t-win"><td class="res">win</td><td>Fiserv, Inc.(FISV)</td><td>51.65</td><td>54.58</td><td class="pnl">+5.67%</td><td>165.6h</td><td>08-08 01:50 → 08-14 23:25</td></tr><tr class="t-win"><td class="res">win</td><td>Fox Corporation(FOX)</td><td>57.63</td><td>60.66</td><td class="pnl">+5.26%</td><td>19.6h</td><td>08-14 04:15 → 08-14 23:50</td></tr><tr class="t-win"><td class="res">win</td><td>FedEx Freight Holding Company,(FDXF)</td><td>141.00</td><td>148.10</td><td class="pnl">+5.04%</td><td>69.6h</td><td>08-12 01:55 → 08-14 23:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>Broadcom Inc.(AVGO)</td><td>419.30</td><td>399.70</td><td class="pnl">-4.67%</td><td>44.7h</td><td>08-13 02:50 → 08-14 23:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>Ciena Corporation(CIEN)</td><td>443.40</td><td>425.50</td><td class="pnl">-4.04%</td><td>1.7h</td><td>08-14 23:30 → 08-15 01:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>Ralph Lauren Corporation(RL)</td><td>397.70</td><td>383.90</td><td class="pnl">-3.47%</td><td>162.7h</td><td>08-08 04:50 → 08-14 23:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>Old Dominion Freight Line, Inc.(ODFL)</td><td>217.50</td><td>210.00</td><td class="pnl">-3.45%</td><td>27.0h</td><td>08-14 01:30 → 08-15 04:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>F5, Inc.(FFIV)</td><td>418.70</td><td>404.50</td><td class="pnl">-3.39%</td><td>25.5h</td><td>08-14 02:50 → 08-15 04:20</td></tr></tbody></table>
_P&L distribution (191 meaningful trades): min -4.67% · P25 -0.50% · median +0.04% · P75 +1.39% · max +6.60%_

**Full data** — all 199 closed trades: [CSV download](/data/journal/2026-08-15-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-08-15 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
