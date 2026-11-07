---
title: "2026-11-07 Crypto Trading Journal — Bengal"
date: 2026-11-07T21:00:45+09:00
description: "Bengal (crypto) journal: 624 trades, 47.4% win rate, avg -0.07% (paper-trading)"
category: journal
markets: [crypto]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-11-07
metrics:
  closed_trades: 624
  wins: 296
  losses: 328
  win_rate_pct: 47.4
  avg_pnl_pct: -0.073
  best_pct: 13.06
  worst_pct: -6.74
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.94
ogImage: /characters/crypto/06_neutral.png
altUrl: /journal/2026-11-07-crypto-journal/
altLang: ko
---

## Key takeaways

- **624 closed trades**, win rate **47.4%**, expectancy **-0.07%** per trade.
- Profit factor **0.94** · avg win **+2.37%** vs avg loss **-2.28%** (R:R **1.04**).
- Best **+13.06%** / worst **-6.74%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 624 (296W / 328L) |
| Win rate | 47.4% |
| Expectancy / trade | -0.07% |
| Profit factor | 0.94 |
| Avg win / avg loss | +2.37% / -2.28% |
| Best / worst | +13.06% / -6.74% |


## Recap

The session saw a moderate number of closed trades, totaling 624 executions. The overall win rate settled at 47.4%, indicating a slight edge to the losing trades relative to the winning ones. The average profit realized on winning trades was +2.37%, while the average loss incurred was -2.28%. The profit factor registered at 0.94, suggesting that the total amount lost slightly exceeded the total amount gained across the recorded trades. Notable positive outcomes included gains on NEXO (+12.24%), CSPR (+10.11%), and another NEXO instance (+9.63%). Conversely, the largest recorded drawdown was on PROVE (-6.74%), followed by losses on CONX (XPLA) (-6.00%) and HPP (-4.73%).

## Observations

The disparity between the average win size and the average loss size is relatively narrow, though the negative expectancy of -0.07% per trade suggests that the aggregate results were slightly negative. The performance metrics indicate that while significant gains were achieved on specific assets, these were not sufficient to overcome the cumulative losses from the trades that closed at a loss. The range between the best performance (+13.06%) and the worst (-6.74%) shows a considerable spread in outcomes across the sampled trades. <img class="emoji-char" src="/characters/crypto/11_thinking.png" alt="Bengal" />

## For next time

The trades resulting in losses, particularly those involving PROVE and CONX (XPLA), highlight instances where the initial directional conviction did not hold through to the exit point. These specific closures suggest that market resistance or unexpected counter-momentum can quickly erode gains, even when initial entry signals appeared favorable. The data points to a need for closer examination of trade management during periods of high volatility, rather than focusing solely on entry signals. <img class="emoji-char" src="/characters/crypto/10_suspicious.png" alt="Bengal" />

*This research note reflects a paper-trading analysis of historical trade closures and does not constitute financial advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>넥소(NEXO)</td><td>997.00</td><td>1,119</td><td class="pnl">+12.24%</td><td>8.8h</td><td>11-06 22:30 → 11-07 07:15</td></tr><tr class="t-win"><td class="res">win</td><td>Casper(CSPR)</td><td>2.85</td><td>3.14</td><td class="pnl">+10.11%</td><td>2.2h</td><td>11-06 23:00 → 11-07 01:15</td></tr><tr class="t-win"><td class="res">win</td><td>넥소(NEXO)</td><td>997.00</td><td>1,093</td><td class="pnl">+9.63%</td><td>3.2h</td><td>11-06 18:45 → 11-06 22:00</td></tr><tr class="t-win"><td class="res">win</td><td>ELYSIA(EL)</td><td>1.81</td><td>1.96</td><td class="pnl">+8.29%</td><td>35.8h</td><td>11-06 05:30 → 11-07 17:15</td></tr><tr class="t-win"><td class="res">win</td><td>Spacecoin(SPACE)</td><td>4.34</td><td>4.61</td><td class="pnl">+6.01%</td><td>16.2h</td><td>11-06 08:15 → 11-07 00:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>Succinct(PROVE)</td><td>243.20</td><td>226.80</td><td class="pnl">-6.74%</td><td>40.8h</td><td>11-06 01:15 → 11-07 18:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>CONX(XPLA)</td><td>6.68</td><td>6.28</td><td class="pnl">-6.00%</td><td>2.5h</td><td>11-06 21:30 → 11-07 00:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>House Party Protocol(HPP)</td><td>6.45</td><td>6.14</td><td class="pnl">-4.73%</td><td>13.8h</td><td>11-06 21:45 → 11-07 11:30</td></tr><tr class="t-loss"><td class="res">loss</td><td>DAO Maker(DAO)</td><td>27.42</td><td>26.13</td><td class="pnl">-4.70%</td><td>15.8h</td><td>11-06 21:15 → 11-07 13:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>Wayfinder(PROMPT)</td><td>25.08</td><td>23.91</td><td class="pnl">-4.67%</td><td>0.5h</td><td>11-07 00:15 → 11-07 00:45</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -6.74% · P25 -3.15% · median +0.34% · P75 +2.71% · max +12.24%_

**Full data** — all 624 closed trades: [CSV download](/data/journal/2026-11-07-crypto.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-11-07 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
