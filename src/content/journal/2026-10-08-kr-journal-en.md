---
title: "2026-10-08 Korea Trading Journal — Kosho"
date: 2026-10-08T17:00:45+09:00
description: "Kosho (Korean equities) journal: 323 trades, 27.6% win rate, avg -1.73% (paper-trading)"
category: journal
markets: [kr]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-10-08
metrics:
  closed_trades: 323
  wins: 89
  losses: 234
  win_rate_pct: 27.6
  avg_pnl_pct: -1.734
  best_pct: 8.09
  worst_pct: -25.79
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.28
ogImage: /characters/kr/02_sad.png
altUrl: /journal/2026-10-08-kr-journal/
altLang: ko
---

## Key takeaways

- **323 closed trades**, win rate **27.6%**, expectancy **-1.73%** per trade.
- Profit factor **0.28** · avg win **+2.51%** vs avg loss **-3.35%** (R:R **0.75**).
- Best **+8.09%** / worst **-25.79%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 323 (89W / 234L) |
| Win rate | 27.6% |
| Expectancy / trade | -1.73% |
| Profit factor | 0.28 |
| Avg win / avg loss | +2.51% / -3.35% |
| Best / worst | +8.09% / -25.79% |


## Recap

The trading activity today resulted in a net negative expectancy, with the overall win rate at 27.6%. The performance metrics indicate that the average loss magnitude (-3.35%) significantly outweighs the average win size (+2.51%), contributing to the negative expectancy per trade. Notable instances include the significant gain observed in 올릭스 (226950) at +8.09%, alongside gains in 유진로봇 (056080) and 선익시스템 (171090). Conversely, the day featured substantial drawdowns, most notably the -25.79% recorded on 펩트론 (087010), and other notable losses on 삼천당제약 (000250) and a second instance of 올릭스 (226950) at -8.97%. <img class="emoji-char" src="/characters/kr/10_suspicious.png" alt="Kosho" />

## Lessons from Outcomes

The disparity between the average win and average loss suggests that the risk management profile across the closed set was heavily skewed toward larger, unmitigated downside exposures. The depth of the worst recorded loss (-25.79%) relative to the best gain (+8.09%) highlights the impact of single, large negative deviations on the overall performance factor. <img class="emoji-char" src="/characters/kr/11_thinking.png" alt="Kosho" />

## For Next Time

The observed pattern suggests that while profitable trades occurred, the frequency and magnitude of losses were disproportionately impactful on the cumulative result. The data points to a need for a more balanced approach to position sizing relative to observed volatility ranges.

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>올릭스(226950)</td><td>113,313</td><td>122,477</td><td class="pnl">+8.09%</td><td>0.5h</td><td>10-08 09:20 → 10-08 09:50</td></tr><tr class="t-win"><td class="res">win</td><td>유진로봇(056080)</td><td>11,772</td><td>12,617</td><td class="pnl">+7.18%</td><td>3.9h</td><td>10-08 09:20 → 10-08 13:15</td></tr><tr class="t-win"><td class="res">win</td><td>선익시스템(171090)</td><td>72,673</td><td>76,923</td><td class="pnl">+5.85%</td><td>22.4h</td><td>10-07 11:30 → 10-08 09:55</td></tr><tr class="t-win"><td class="res">win</td><td>한미사이언스(008930)</td><td>57,157</td><td>60,140</td><td class="pnl">+5.22%</td><td>22.3h</td><td>10-07 11:00 → 10-08 09:20</td></tr><tr class="t-win"><td class="res">win</td><td>제이앤티씨(204270)</td><td>26,076</td><td>27,423</td><td class="pnl">+5.17%</td><td>23.1h</td><td>10-07 11:15 → 10-08 10:20</td></tr><tr class="t-loss"><td class="res">loss</td><td>펩트론(087010)</td><td>132,733</td><td>98,501</td><td class="pnl">-25.79%</td><td>20.9h</td><td>10-07 12:20 → 10-08 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>삼천당제약(000250)</td><td>243,743</td><td>221,278</td><td class="pnl">-9.22%</td><td>18.9h</td><td>10-07 14:20 → 10-08 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>올릭스(226950)</td><td>124,224</td><td>113,087</td><td class="pnl">-8.97%</td><td>47.5h</td><td>10-06 09:45 → 10-08 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>알테오젠(196170)</td><td>258,258</td><td>235,264</td><td class="pnl">-8.90%</td><td>142.6h</td><td>10-02 10:40 → 10-08 09:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>위메이드맥스(101730)</td><td>5,335</td><td>4,895</td><td class="pnl">-8.25%</td><td>18.1h</td><td>10-07 15:10 → 10-08 09:15</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -25.79% · P25 -3.71% · median -3.17% · P75 +0.42% · max +8.09%_

**Full data** — all 323 closed trades: [CSV download](/data/journal/2026-10-08-kr.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-10-08 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
