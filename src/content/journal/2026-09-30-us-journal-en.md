---
title: "2026-09-30 US Trading Journal — Maine"
date: 2026-09-30T07:00:49+09:00
description: "Maine (US equities) journal: 171 trades, 29.8% win rate, avg -0.88% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-30
metrics:
  closed_trades: 171
  wins: 51
  losses: 120
  win_rate_pct: 29.8
  avg_pnl_pct: -0.879
  best_pct: 8.46
  worst_pct: -4.92
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.37
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-09-30-us-journal/
altLang: ko
---

## Key takeaways

- **171 closed trades**, win rate **29.8%**, expectancy **-0.88%** per trade.
- Profit factor **0.37** · avg win **+1.73%** vs avg loss **-1.99%** (R:R **0.87**).
- Best **+8.46%** / worst **-4.92%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 171 (51W / 120L) |
| Win rate | 29.8% |
| Expectancy / trade | -0.88% |
| Profit factor | 0.37 |
| Avg win / avg loss | +1.73% / -1.99% |
| Best / worst | +8.46% / -4.92% |


## Recap

The day's closed activity shows a mixed performance across the executed trades. The overall expectancy for the closed set was negative at -0.88% per trade, and the profit factor registered at 0.37. While there were notable positive outcomes, such as the gains observed in LITE (+8.46%) and ORCL (+6.64%), these were counterbalanced by several instances where losses exceeded the average winning size. The average win of +1.73% versus the average loss of -1.99% suggests that the magnitude of the losses tended to outweigh the gains on a per-trade basis <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />.

## Observations on Drawdowns

The trades that concluded at a loss, specifically those involving URI (-4.92%), EQT (-4.63%), and EFX (-4.46%), highlight instances where the market moved against the established positions with considerable force. These outcomes suggest that when momentum shifts sharply against the prevailing bias, the realized losses can be substantial, even when the initial conviction on the trade setup was present. It is clear that the risk taken on the downside was significant in several of these instances <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />.

## For Next Time

The data indicates that the frequency of losing trades relative to winning trades, combined with the negative expectancy, suggests that the current execution profile is challenging. The disparity between the best outcome (+8.46%) and the worst outcome (-4.92%) underscores the wide dispersion of results, which is a key characteristic to monitor. The pattern suggests that while identifying high-conviction setups remains possible, the realized risk management across the closed set needs closer examination <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

*This research note reflects a paper-trading analysis and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Lumentum Holdings Inc.(LITE)</td><td>910.40</td><td>987.40</td><td class="pnl">+8.46%</td><td>24.2h</td><td>09-28 23:25 → 09-29 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>Oracle Corporation(ORCL)</td><td>132.60</td><td>141.40</td><td class="pnl">+6.64%</td><td>23.9h</td><td>09-29 00:10 → 09-30 00:05</td></tr><tr class="t-win"><td class="res">win</td><td>Applied Materials, Inc.(AMAT)</td><td>474.80</td><td>504.90</td><td class="pnl">+6.34%</td><td>22.9h</td><td>09-29 00:10 → 09-29 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>Teradyne, Inc.(TER)</td><td>388.00</td><td>409.30</td><td class="pnl">+5.49%</td><td>23.2h</td><td>09-29 00:20 → 09-29 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>Lam Research Corporation(LRCX)</td><td>307.90</td><td>324.30</td><td class="pnl">+5.33%</td><td>23.4h</td><td>09-29 00:20 → 09-29 23:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>United Rentals, Inc.(URI)</td><td>1,041</td><td>989.80</td><td class="pnl">-4.92%</td><td>140.4h</td><td>09-24 04:10 → 09-30 00:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>EQT Corporation(EQT)</td><td>51.39</td><td>49.01</td><td class="pnl">-4.63%</td><td>143.6h</td><td>09-23 23:10 → 09-29 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Equifax, Inc.(EFX)</td><td>145.70</td><td>139.20</td><td class="pnl">-4.46%</td><td>23.8h</td><td>09-28 22:55 → 09-29 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Occidental Petroleum Corporatio(OXY)</td><td>57.50</td><td>55.02</td><td class="pnl">-4.31%</td><td>138.4h</td><td>09-24 04:20 → 09-29 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Expand Energy Corporation(EXE)</td><td>87.41</td><td>83.75</td><td class="pnl">-4.19%</td><td>164.8h</td><td>09-23 02:00 → 09-29 22:45</td></tr></tbody></table>
_P&L distribution (170 meaningful trades): min -4.92% · P25 -3.12% · median -0.80% · P75 +0.32% · max +8.46%_

**Full data** — all 171 closed trades: [CSV download](/data/journal/2026-09-30-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-30 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
