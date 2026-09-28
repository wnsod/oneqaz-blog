---
title: "2026-09-29 US Trading Journal — Maine"
date: 2026-09-29T07:00:43+09:00
description: "Maine (US equities) journal: 94 trades, 31.9% win rate, avg -1.34% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-29
metrics:
  closed_trades: 94
  wins: 30
  losses: 64
  win_rate_pct: 31.9
  avg_pnl_pct: -1.337
  best_pct: 4.24
  worst_pct: -7.03
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.3
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-09-29-us-journal/
altLang: ko
---

## Key takeaways

- **94 closed trades**, win rate **31.9%**, expectancy **-1.34%** per trade.
- Profit factor **0.30** · avg win **+1.78%** vs avg loss **-2.80%** (R:R **0.64**).
- Best **+4.24%** / worst **-7.03%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 94 (30W / 64L) |
| Win rate | 31.9% |
| Expectancy / trade | -1.34% |
| Profit factor | 0.30 |
| Avg win / avg loss | +1.78% / -2.80% |
| Best / worst | +4.24% / -7.03% |


## Recap

The recent set of closed trades reflects a period of mixed outcomes. The positive returns were anchored by notable gains in technology and cyclical names, such as NVDA and VLO. However, these gains were counterbalanced by several significant losses, particularly in software and industrial sectors, with CRM and CDW contributing to the overall negative expectancy per trade. The average win size, at +1.78%, was considerably smaller than the average loss magnitude of -2.80%, suggesting that the magnitude of downside captures has been a persistent drag on the aggregate performance. <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />

## Observations on Performance

The distribution of outcomes indicates that the risk taken on the losing trades has outweighed the reward captured on the winning trades. Specifically, the depth of the losses, exemplified by the -7.03% realization on CRM, suggests that when trades move against the established bias, the drawdown potential is substantial. The profit factor of 0.30 confirms that the total gains generated were less than one-third of the total losses incurred over this sample of closed positions. <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />

## For Next Time

The performance highlights a structural imbalance where the cost of incorrect directional calls appears disproportionately high relative to the realized gains. The magnitude of the losses, particularly those exceeding 5% in several instances, points to a need to manage the exposure profile more conservatively when conviction levels are not strongly supported by the broader index action. This pattern suggests that the downside risk realization is currently dominating the risk-adjusted return profile. <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>NVIDIA Corporation(NVDA)</td><td>221.80</td><td>231.20</td><td class="pnl">+4.24%</td><td>94.7h</td><td>09-25 00:25 → 09-28 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>Valero Energy Corporation(VLO)</td><td>373.20</td><td>387.80</td><td class="pnl">+3.91%</td><td>71.7h</td><td>09-25 23:05 → 09-28 22:45</td></tr><tr class="t-win"><td class="res">win</td><td>Hilton Worldwide Holdings Inc.(HLT)</td><td>307.80</td><td>318.00</td><td class="pnl">+3.31%</td><td>145.3h</td><td>09-23 00:40 → 09-29 02:00</td></tr><tr class="t-win"><td class="res">win</td><td>Intuitive Surgical, Inc.(ISRG)</td><td>401.00</td><td>412.90</td><td class="pnl">+2.97%</td><td>145.7h</td><td>09-22 22:55 → 09-29 00:35</td></tr><tr class="t-win"><td class="res">win</td><td>Costco Wholesale Corporation(COST)</td><td>898.90</td><td>925.50</td><td class="pnl">+2.96%</td><td>144.5h</td><td>09-22 23:05 → 09-28 23:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Salesforce, Inc.(CRM)</td><td>239.10</td><td>222.30</td><td class="pnl">-7.03%</td><td>92.0h</td><td>09-25 02:45 → 09-28 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>CDW Corporation(CDW)</td><td>140.40</td><td>132.40</td><td class="pnl">-5.70%</td><td>71.0h</td><td>09-25 23:45 → 09-28 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Adobe Inc.(ADBE)</td><td>239.00</td><td>226.90</td><td class="pnl">-5.06%</td><td>139.9h</td><td>09-23 02:50 → 09-28 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Boeing Company (The)(BA)</td><td>198.50</td><td>188.50</td><td class="pnl">-5.04%</td><td>143.0h</td><td>09-22 23:45 → 09-28 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>Roper Technologies, Inc.(ROP)</td><td>368.80</td><td>352.70</td><td class="pnl">-4.37%</td><td>144.0h</td><td>09-22 22:45 → 09-28 22:45</td></tr></tbody></table>
_P&L distribution (93 meaningful trades): min -7.03% · P25 -3.40% · median -1.48% · P75 +0.35% · max +4.24%_

**Full data** — all 94 closed trades: [CSV download](/data/journal/2026-09-29-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-29 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
