---
title: "2026-09-01 US Trading Journal — Maine"
date: 2026-09-01T07:00:40+09:00
description: "Maine (US equities) journal: 224 trades, 28.1% win rate, avg -1.16% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-01
metrics:
  closed_trades: 224
  wins: 63
  losses: 161
  win_rate_pct: 28.1
  avg_pnl_pct: -1.158
  best_pct: 6.43
  worst_pct: -20.1
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.3
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-09-01-us-journal/
altLang: ko
---

## Key takeaways

- **224 closed trades**, win rate **28.1%**, expectancy **-1.16%** per trade.
- Profit factor **0.30** · avg win **+1.77%** vs avg loss **-2.30%** (R:R **0.77**).
- Best **+6.43%** / worst **-20.10%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 224 (63W / 161L) |
| Win rate | 28.1% |
| Expectancy / trade | -1.16% |
| Profit factor | 0.30 |
| Avg win / avg loss | +1.77% / -2.30% |
| Best / worst | +6.43% / -20.10% |


## Recap

The day's closed activity reflects a challenging pattern. Out of the 224 trades executed, the win rate settled at 28.1%. The average realized expectancy across these trades was negative at -1.16% per trade. The profit factor of 0.30 suggests that the magnitude of losses significantly outweighed the gains. While notable successes were recorded, such as the gains on CRWD (+6.43%) and SLB (+6.22%), these were counterbalanced by substantial drawdowns, exemplified by the losses on EIX (-20.10%) and PCG (-16.97%). The spread between the best outcome and the worst outcome was quite wide, indicating significant volatility capture on both ends <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />.

## Observations

The performance metrics highlight a structural imbalance in the outcomes. The average winning trade (+1.77%) was substantially smaller than the average losing trade (-2.30%). This disparity suggests that while positive movements were captured, the risk taken on losing trades was disproportionately large relative to the average positive capture. The depth of the losses, particularly the -20.10% outcome, suggests that exposure to specific, volatile names resulted in significant capital erosion, which is a key area for review <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />.

## For next time

The frequency of trades, combined with the negative expectancy and low profit factor, points to a need for a more disciplined approach to trade selection and sizing. The substantial losses incurred on certain names underscore the impact of deep drawdowns on overall performance. The data suggests that the risk parameters employed on the losing legs of the trades need closer examination relative to the potential upside captured on the winning legs. This is purely an analysis of the recorded results <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>CrowdStrike Holdings, Inc.(CRWD)</td><td>213.00</td><td>226.70</td><td class="pnl">+6.43%</td><td>71.9h</td><td>08-28 23:10 → 08-31 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>SLB Limited(SLB)</td><td>55.75</td><td>59.22</td><td class="pnl">+6.22%</td><td>91.1h</td><td>08-28 04:00 → 08-31 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>Halliburton Company(HAL)</td><td>35.50</td><td>37.23</td><td class="pnl">+4.87%</td><td>72.3h</td><td>08-28 22:45 → 08-31 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>Ulta Beauty, Inc.(ULTA)</td><td>510.30</td><td>530.60</td><td class="pnl">+3.98%</td><td>71.8h</td><td>08-28 23:50 → 08-31 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>APA Corporation(APA)</td><td>41.57</td><td>43.22</td><td class="pnl">+3.97%</td><td>119.8h</td><td>08-26 23:20 → 08-31 23:05</td></tr><tr class="t-loss"><td class="res">loss</td><td>Edison International(EIX)</td><td>70.14</td><td>56.04</td><td class="pnl">-20.10%</td><td>68.2h</td><td>08-29 02:45 → 08-31 22:55</td></tr><tr class="t-loss"><td class="res">loss</td><td>Pacific Gas & Electric Co.(PCG)</td><td>16.15</td><td>13.41</td><td class="pnl">-16.97%</td><td>68.5h</td><td>08-29 02:25 → 08-31 22:55</td></tr><tr class="t-loss"><td class="res">loss</td><td>Take-Two Interactive Software,(TTWO)</td><td>238.80</td><td>218.80</td><td class="pnl">-8.38%</td><td>69.2h</td><td>08-29 01:40 → 08-31 22:55</td></tr><tr class="t-loss"><td class="res">loss</td><td>Reddit, Inc.(RDDT)</td><td>157.00</td><td>147.50</td><td class="pnl">-6.05%</td><td>95.2h</td><td>08-27 23:40 → 08-31 22:55</td></tr><tr class="t-loss"><td class="res">loss</td><td>Clorox Company (The)(CLX)</td><td>105.20</td><td>99.32</td><td class="pnl">-5.59%</td><td>139.9h</td><td>08-26 03:00 → 08-31 22:55</td></tr></tbody></table>
_P&L distribution (214 meaningful trades): min -20.10% · P25 -3.18% · median -0.88% · P75 +0.23% · max +6.43%_

**Full data** — all 224 closed trades: [CSV download](/data/journal/2026-09-01-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-01 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
