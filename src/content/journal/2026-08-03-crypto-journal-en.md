---
title: "2026-08-03 Crypto Trading Journal — Bengal"
date: 2026-08-03T21:00:41+09:00
description: "Bengal (crypto) journal: 863 trades, 31.1% win rate, avg -0.95% (paper-trading)"
category: journal
markets: [crypto]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-08-03
metrics:
  closed_trades: 863
  wins: 268
  losses: 595
  win_rate_pct: 31.1
  avg_pnl_pct: -0.951
  best_pct: 19.98
  worst_pct: -19.25
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.45
ogImage: /characters/crypto/02_sad.png
altUrl: /journal/2026-08-03-crypto-journal/
altLang: ko
---

## Key takeaways

- **863 closed trades**, win rate **31.1%**, expectancy **-0.95%** per trade.
- Profit factor **0.45** · avg win **+2.52%** vs avg loss **-2.52%** (R:R **1.00**).
- Best **+19.98%** / worst **-19.25%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 863 (268W / 595L) |
| Win rate | 31.1% |
| Expectancy / trade | -0.95% |
| Profit factor | 0.45 |
| Avg win / avg loss | +2.52% / -2.52% |
| Best / worst | +19.98% / -19.25% |


## Recap

The day's closed activity showed a mixed outcome. Out of 863 trades, the win rate settled at 31.1%, with an overall expectancy of -0.95% per trade. The profit factor of 0.45 indicates that realized gains were significantly outweighed by realized losses. Notable positive returns were seen in RSS3 (+19.07%), META [Old](META) (+17.10%), and WAX(WAXP) (+8.69%). Conversely, significant drawdowns occurred on HFT (-19.25%), ACX (-17.11%), and GPS (-7.99%). The average win size (+2.52%) was mirrored by an average loss size (-2.52%), suggesting a degree of symmetry in the realized risk profile today <img class="emoji-char" src="/characters/crypto/10_suspicious.png" alt="Bengal" />.

## Lessons from Drawdowns

The sequence of losses, particularly the deep declines on HFT and ACX, highlights the difficulty in maintaining positive expected value when the frequency of negative outcomes is high. The magnitude of the losses relative to the wins suggests that the downside capture was substantial across several instances. The performance metrics confirm that the realized risk profile today was heavily skewed toward negative expectation <img class="emoji-char" src="/characters/crypto/11_thinking.png" alt="Bengal" />.

## Observations

The trading session concluded with a net negative expectancy, despite achieving some substantial gains. The disparity between the best recorded gain (+19.98%) and the worst loss (-19.25%) underscores the volatility encountered across the sampled assets. The overall picture suggests that while high-magnitude moves are possible, the current execution environment resulted in a net negative statistical outcome <img class="emoji-char" src="/characters/crypto/02_sad.png" alt="Bengal" />.

***

*This research note reflects a backtest of closed paper trades and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>알에스에스쓰리(RSS3)</td><td>6.99</td><td>8.32</td><td class="pnl">+19.07%</td><td>8.8h</td><td>08-02 15:15 → 08-03 00:00</td></tr><tr class="t-win"><td class="res">win</td><td>META [Old](META)</td><td>9.95</td><td>11.65</td><td class="pnl">+17.10%</td><td>53.8h</td><td>08-01 01:15 → 08-03 07:00</td></tr><tr class="t-win"><td class="res">win</td><td>WAX(WAXP)</td><td>5.29</td><td>5.75</td><td class="pnl">+8.69%</td><td>18.0h</td><td>08-02 19:15 → 08-03 13:15</td></tr><tr class="t-win"><td class="res">win</td><td>Fusionist(ACE)</td><td>93.81</td><td>101.90</td><td class="pnl">+8.62%</td><td>19.8h</td><td>08-02 20:45 → 08-03 16:30</td></tr><tr class="t-win"><td class="res">win</td><td>블라스트(BLAST)</td><td>0.3465</td><td>0.3657</td><td class="pnl">+5.54%</td><td>16.2h</td><td>08-02 20:30 → 08-03 12:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Hashflow(HFT)</td><td>12.57</td><td>10.15</td><td class="pnl">-19.25%</td><td>46.2h</td><td>08-01 14:30 → 08-03 12:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Across Protocol(ACX)</td><td>58.28</td><td>48.31</td><td class="pnl">-17.11%</td><td>37.0h</td><td>08-01 23:45 → 08-03 12:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>GoPlus Security(GPS)</td><td>13.52</td><td>12.44</td><td class="pnl">-7.99%</td><td>34.5h</td><td>08-02 05:30 → 08-03 16:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>Casper Network(CSPR)</td><td>2.69</td><td>2.53</td><td class="pnl">-6.02%</td><td>2.8h</td><td>08-02 19:30 → 08-02 22:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>플룸(PLUME)</td><td>15.80</td><td>14.98</td><td class="pnl">-5.19%</td><td>18.5h</td><td>08-02 14:30 → 08-03 09:00</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -19.25% · P25 -3.42% · median -3.11% · P75 +0.22% · max +19.07%_

**Full data** — all 863 closed trades: [CSV download](/data/journal/2026-08-03-crypto.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-08-03 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
