---
title: "2026-08-11 US Trading Journal — Maine"
date: 2026-08-11T07:00:42+09:00
description: "Maine (US equities) journal: 292 trades, 36.3% win rate, avg +0.09% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-08-11
metrics:
  closed_trades: 292
  wins: 106
  losses: 186
  win_rate_pct: 36.3
  avg_pnl_pct: 0.09
  best_pct: 9.43
  worst_pct: -6.48
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 1.14
ogImage: /characters/us/01_joy.png
altUrl: /journal/2026-08-11-us-journal/
altLang: ko
---

## Key takeaways

- **292 closed trades**, win rate **36.3%**, expectancy **+0.09%** per trade.
- Profit factor **1.14** · avg win **+1.96%** vs avg loss **-0.98%** (R:R **2.00**).
- Best **+9.43%** / worst **-6.48%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 292 (106W / 186L) |
| Win rate | 36.3% |
| Expectancy / trade | +0.09% |
| Profit factor | 1.14 |
| Avg win / avg loss | +1.96% / -0.98% |
| Best / worst | +9.43% / -6.48% |


## Recap

The day's closed activity showed a mixed performance across the board. Out of the 292 trades concluded, the win rate settled at 36.3%, with an overall expectancy of +0.09% per trade. The average winning trade realized a gain of 1.96%, which was substantially larger than the average loss of -0.98%. Notable positive outcomes included gains on VRTX (+9.43%) and APA (+6.97%), providing some nice lifts to the overall picture <img class="emoji-char" src="/characters/us/01_joy.png" alt="Maine" />. Conversely, the losses were notable, with COHR (-6.48%) and VRSK (-5.08%) representing the deeper drawdowns observed today.

## Observations

The disparity between the average win size and the average loss size suggests that the successful trades were significantly more impactful than the unsuccessful ones. The profit factor of 1.14 indicates that for every dollar lost, the system generated slightly more than a dollar in gains over the sampled trades. The depth of the best gain (+9.43%) compared to the worst loss (-6.48%) highlights the potential range captured during the trading period. It is always a learning experience to see the magnitude of the losses, as they provide clear boundaries on the risk taken.

## For Next Time

The trades that resulted in losses, such as those in COHR and VRSK, underscore the importance of managing the downside capture. These instances demonstrated that even when the initial directional bias appears sound, the market can quickly move against the established parameters, leading to losses that are substantial relative to the average gain. It is a steady process of observing these divergences between expected movement and realized outcome <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

*This research note reflects the results of paper-trading simulations and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Vertex Pharmaceuticals Incorpor(VRTX)</td><td>481.40</td><td>526.80</td><td class="pnl">+9.43%</td><td>118.0h</td><td>08-06 01:20 → 08-10 23:20</td></tr><tr class="t-win"><td class="res">win</td><td>APA Corporation(APA)</td><td>37.42</td><td>40.03</td><td class="pnl">+6.97%</td><td>67.8h</td><td>08-08 04:50 → 08-11 00:40</td></tr><tr class="t-win"><td class="res">win</td><td>Agilent Technologies, Inc.(A)</td><td>139.70</td><td>147.90</td><td class="pnl">+5.87%</td><td>95.0h</td><td>08-07 01:10 → 08-11 00:10</td></tr><tr class="t-win"><td class="res">win</td><td>Akamai Technologies, Inc.(AKAM)</td><td>111.70</td><td>118.10</td><td class="pnl">+5.73%</td><td>68.5h</td><td>08-08 03:15 → 08-10 23:45</td></tr><tr class="t-win"><td class="res">win</td><td>NetApp, Inc.(NTAP)</td><td>188.40</td><td>199.10</td><td class="pnl">+5.68%</td><td>70.3h</td><td>08-08 01:00 → 08-10 23:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>Coherent Corp.(COHR)</td><td>374.90</td><td>350.60</td><td class="pnl">-6.48%</td><td>68.0h</td><td>08-08 03:15 → 08-10 23:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>Verisk Analytics, Inc.(VRSK)</td><td>193.00</td><td>183.20</td><td class="pnl">-5.08%</td><td>66.5h</td><td>08-08 04:50 → 08-10 23:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>eBay Inc.(EBAY)</td><td>112.30</td><td>106.80</td><td class="pnl">-4.90%</td><td>67.3h</td><td>08-08 04:00 → 08-10 23:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>Domino's Pizza Inc(DPZ)</td><td>359.50</td><td>342.50</td><td class="pnl">-4.73%</td><td>95.6h</td><td>08-06 23:45 → 08-10 23:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>Honeywell Aerospace Inc.(HONA)</td><td>167.50</td><td>159.80</td><td class="pnl">-4.60%</td><td>66.4h</td><td>08-08 04:50 → 08-10 23:15</td></tr></tbody></table>
_P&L distribution (214 meaningful trades): min -6.48% · P25 -0.95% · median -0.14% · P75 +1.50% · max +9.43%_

**Full data** — all 292 closed trades: [CSV download](/data/journal/2026-08-11-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-08-11 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
