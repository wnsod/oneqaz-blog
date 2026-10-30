---
title: "2026-10-30 Crypto Trading Journal — Bengal"
date: 2026-10-30T21:00:43+09:00
description: "Bengal (crypto) journal: 1276 trades, 34.7% win rate, avg -1.27% (paper-trading)"
category: journal
markets: [crypto]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-10-30
metrics:
  closed_trades: 1276
  wins: 443
  losses: 833
  win_rate_pct: 34.7
  avg_pnl_pct: -1.27
  best_pct: 14.79
  worst_pct: -15.38
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.43
ogImage: /characters/crypto/02_sad.png
altUrl: /journal/2026-10-30-crypto-journal/
altLang: ko
---

## Key takeaways

- **1276 closed trades**, win rate **34.7%**, expectancy **-1.27%** per trade.
- Profit factor **0.43** · avg win **+2.79%** vs avg loss **-3.43%** (R:R **0.81**).
- Best **+14.79%** / worst **-15.38%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 1276 (443W / 833L) |
| Win rate | 34.7% |
| Expectancy / trade | -1.27% |
| Profit factor | 0.43 |
| Avg win / avg loss | +2.79% / -3.43% |
| Best / worst | +14.79% / -15.38% |


## Recap

The day's closed activity reflects a mixed outcome. Out of 1276 trades, the win rate settled at 34.7%. The average realized gain (+2.79%) was significantly outweighed by the average loss (-3.43%), resulting in a negative expectancy of -1.27% per trade. The profit factor of 0.43 suggests that the magnitude of losses has been a notable drag on overall performance. The best recorded gain was +14.79% on AIOZ, while the largest drawdown observed was -15.38%. The notable wins, such as those on AIOZ and TOWNS, provided positive deviations, but these were insufficient to offset the cumulative losses seen on trades like MAV and PARTI. <img class="emoji-char" src="/characters/crypto/10_suspicious.png" alt="Bengal" />

## Observations from Drawdowns

The consistent pattern in the losing trades—MAV, PARTI, PROM—suggests that the market structure encountered during those specific entries was unfavorable relative to the exit points. The depth of the losses, particularly the -15.38% worst case, indicates that the risk taken on those specific assets exceeded the expected decay rate for the prevailing market conditions. The negative expectancy, driven by the asymmetry between average wins and average losses, points to a structural imbalance in the realized P&L profile for the session. <img class="emoji-char" src="/characters/crypto/11_thinking.png" alt="Bengal" />

## For Next Time

The data highlights that the frequency of smaller wins is not compensating for the size of the losses. The disparity between the average win and average loss suggests that the risk management applied to the losing trades needs closer examination relative to the potential upside captured in the winning trades. The overall profile indicates that the current execution framework is operating in a regime where downside capture is proving more impactful than upside capture. <img class="emoji-char" src="/characters/crypto/02_sad.png" alt="Bengal" />

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>AIOZ Network(AIOZ)</td><td>127.10</td><td>145.90</td><td class="pnl">+14.79%</td><td>81.0h</td><td>10-26 15:15 → 10-30 00:15</td></tr><tr class="t-win"><td class="res">win</td><td>타운즈(TOWNS)</td><td>1.94</td><td>2.21</td><td class="pnl">+14.04%</td><td>16.5h</td><td>10-29 12:00 → 10-30 04:30</td></tr><tr class="t-win"><td class="res">win</td><td>CONX(XPLA)</td><td>6.37</td><td>6.89</td><td class="pnl">+8.15%</td><td>12.8h</td><td>10-29 11:15 → 10-30 00:00</td></tr><tr class="t-win"><td class="res">win</td><td>피크(PEAQ)</td><td>45.45</td><td>49.09</td><td class="pnl">+8.01%</td><td>24.0h</td><td>10-29 00:00 → 10-30 00:00</td></tr><tr class="t-win"><td class="res">win</td><td>Lisk(LSK)</td><td>232.20</td><td>250.70</td><td class="pnl">+7.97%</td><td>2.5h</td><td>10-29 20:45 → 10-29 23:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>Maverick Protocol(MAV)</td><td>12.64</td><td>11.99</td><td class="pnl">-5.14%</td><td>18.8h</td><td>10-29 11:00 → 10-30 05:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Particle Network(PARTI)</td><td>51.93</td><td>49.27</td><td class="pnl">-5.12%</td><td>42.8h</td><td>10-28 03:45 → 10-29 22:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>프롬(PROM)</td><td>7,447</td><td>7,078</td><td class="pnl">-4.96%</td><td>59.2h</td><td>10-27 22:00 → 10-30 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>OFFICIAL TRUMP(TRUMP)</td><td>2,233</td><td>2,125</td><td class="pnl">-4.84%</td><td>17.5h</td><td>10-29 12:00 → 10-30 05:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>Superform(UP)</td><td>81.87</td><td>77.94</td><td class="pnl">-4.80%</td><td>14.0h</td><td>10-29 16:45 → 10-30 06:45</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -5.14% · P25 -3.49% · median +0.06% · P75 +2.84% · max +14.79%_

**Full data** — all 1276 closed trades: [CSV download](/data/journal/2026-10-30-crypto.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-10-30 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
