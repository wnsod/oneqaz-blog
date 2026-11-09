---
title: "2026-11-09 Korea Trading Journal — Kosho"
date: 2026-11-09T17:00:41+09:00
description: "Kosho (Korean equities) journal: 591 trades, 44.2% win rate, avg -0.39% (paper-trading)"
category: journal
markets: [kr]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-11-09
metrics:
  closed_trades: 591
  wins: 261
  losses: 330
  win_rate_pct: 44.2
  avg_pnl_pct: -0.394
  best_pct: 12.48
  worst_pct: -16.49
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.74
ogImage: /characters/kr/02_sad.png
altUrl: /journal/2026-11-09-kr-journal/
altLang: ko
---

## Key takeaways

- **591 closed trades**, win rate **44.2%**, expectancy **-0.39%** per trade.
- Profit factor **0.74** · avg win **+2.49%** vs avg loss **-2.67%** (R:R **0.93**).
- Best **+12.48%** / worst **-16.49%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 591 (261W / 330L) |
| Win rate | 44.2% |
| Expectancy / trade | -0.39% |
| Profit factor | 0.74 |
| Avg win / avg loss | +2.49% / -2.67% |
| Best / worst | +12.48% / -16.49% |


## Recap

The day's closed trading activity showed a mixed outcome. Out of the 591 trades closed, the win rate registered at 44.2%. The average expectation per trade was negative at -0.39%, which suggests that the magnitude of losses slightly outweighed the gains across the executed set of trades. The profit factor of 0.74 indicates that the total gross profit was less than the total gross loss. Notable positive returns were observed in stocks such as 한진칼 and 큐리옥스바이오시스템즈, which provided significant positive deviations. Conversely, the notable losses in 씨젠 and 성광벤드 represented substantial drawdowns for the day's activity. <img class="emoji-char" src="/characters/kr/10_suspicious.png" alt="Kosho" />

## Observations on Performance

The disparity between the average winning return (+2.49%) and the average losing return (-2.67%) suggests that the average size of the losing trades was marginally larger than the average size of the winning trades. The best single-day gain (+12.48%) was significantly larger than the worst loss (-16.49%), but the overall negative expectancy points to a systemic drag from the losing side of the trades. <img class="emoji-char" src="/characters/kr/11_thinking.png" alt="Kosho" />

## For Next Time

The performance highlights the sensitivity of the overall result to the magnitude of the largest losses. The trades that resulted in the largest drawdowns, such as those in 씨젠 and 성광벤드, contributed disproportionately to the negative expectancy. This suggests that managing the tail risk associated with the losing trades is a key area of focus when reviewing the day's execution. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="Kosho" />

*This research note reflects a paper-trading simulation and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>한진칼(180640)</td><td>195,595</td><td>211,288</td><td class="pnl">+8.02%</td><td>66.2h</td><td>11-06 15:10 → 11-09 09:25</td></tr><tr class="t-win"><td class="res">win</td><td>큐리옥스바이오시스템즈(445680)</td><td>45,796</td><td>49,450</td><td class="pnl">+7.98%</td><td>69.9h</td><td>11-06 11:30 → 11-09 09:25</td></tr><tr class="t-win"><td class="res">win</td><td>테크윙(089030)</td><td>28,278</td><td>30,120</td><td class="pnl">+6.51%</td><td>66.7h</td><td>11-06 15:25 → 11-09 10:05</td></tr><tr class="t-win"><td class="res">win</td><td>동화기업(025900)</td><td>5,045</td><td>5,325</td><td class="pnl">+5.55%</td><td>0.1h</td><td>11-09 09:15 → 11-09 09:20</td></tr><tr class="t-win"><td class="res">win</td><td>케이엠더블유(032500)</td><td>15,816</td><td>16,693</td><td class="pnl">+5.55%</td><td>66.8h</td><td>11-06 15:25 → 11-09 10:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>씨젠(096530)</td><td>31,281</td><td>26,124</td><td class="pnl">-16.49%</td><td>70.2h</td><td>11-06 11:00 → 11-09 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>성광벤드(014620)</td><td>22,022</td><td>19,181</td><td class="pnl">-12.90%</td><td>66.3h</td><td>11-06 14:55 → 11-09 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>한국콜마(161890)</td><td>110,911</td><td>100,100</td><td class="pnl">-9.75%</td><td>66.6h</td><td>11-06 14:40 → 11-09 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>알테오젠(196170)</td><td>201,201</td><td>185,314</td><td class="pnl">-7.90%</td><td>67.6h</td><td>11-06 13:40 → 11-09 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>삼현(437730)</td><td>37,838</td><td>34,915</td><td class="pnl">-7.73%</td><td>68.3h</td><td>11-06 12:55 → 11-09 09:15</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -16.49% · P25 -3.41% · median -2.10% · P75 +2.69% · max +8.02%_

**Full data** — all 591 closed trades: [CSV download](/data/journal/2026-11-09-kr.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-11-09 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
