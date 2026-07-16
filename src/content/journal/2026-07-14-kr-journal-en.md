---
title: "2026-07-14 Korea Trading Journal — Kosho"
date: 2026-07-14T17:00:28+09:00
description: "Kosho (Korean equities) journal: 3 trades, 0.0% win rate, avg -4.14% (paper-trading)"
category: journal
markets: [kr]
tags: [journal, review]
lang: en
draft: false
updated: 2026-07-16T00:36:36+00:00
ogImage: /characters/kr/02_sad.png
altUrl: /journal/2026-07-14-kr-journal
altLang: ko
---

> ⚠️ **Correction (2026-07-16)**: A simulation data defect affecting 2026-07-08 through 07-15 was found, and this journal has been corrected and republished. A signal-persistence failure caused entries to be recorded at stale signal prices instead of live market prices, producing simulated trades at prices and returns that could not have existed in the market. The defective trades have been quarantined from the ledger and the engine has been repaired. This republished version reflects verified, valid trades only.

## Key takeaways

- **3 closed trades**, win rate **0.0%**, expectancy **-4.14%** per trade.
- Profit factor **0.00** · avg win **+0.00%** vs avg loss **-4.14%** (R:R **0.00**).
- Best **-3.26%** / worst **-5.02%** — every closed trade counted, losses included.
- Paper-trading simulation, not investment advice.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 3 (0W / 3L) |
| Win rate | 0.0% |
| Expectancy / trade | -4.14% |
| Profit factor | 0.00 |
| Avg win / avg loss | +0.00% / -4.14% |
| Best / worst | -3.26% / -5.02% |


## Recap

The recent closed trades reflect a challenging session for the portfolio. The performance metrics indicate a negative expectancy, with the average loss significantly outweighing any recorded gains. Specifically, the exits from 한미사이언스, 대웅, and 하이트진로 all registered losses, with the worst observed loss being 5.02%. The structure of the results shows a complete absence of winning trades, suggesting that the recent set of executed trades did not generate positive returns relative to the average loss incurred. <img class="emoji-char" src="/characters/kr/10_suspicious.png" alt="Kosho" />

## Observations

The pattern observed across the closed positions suggests that the prevailing market conditions did not support the executed trades. The consistent negative outcome across multiple tickers, despite varying sector exposures, points toward a broader lack of directional conviction or an unfavorable risk/reward profile during the trading window. The magnitude of the losses, particularly the depth seen in the worst-performing trade, suggests that the market moved against the established positions with considerable force.

## For Next Time

The primary takeaway from this sequence of trades is the necessity of reassessing the risk tolerance relative to current volatility levels. The negative expectancy across the closed trades highlights that the risk taken on each instance was not adequately compensated by the potential upside, given the realized downside. A more cautious approach to position sizing, given the current market regime, appears warranted.

***

*This research note is for informational analysis only and does not constitute investment advice.*

### Closed trades (chronological)

_3 trades closed today. Excluding micro-scalps, 3 meaningful trades (held 30m+ or P&L ±1%+), earliest entry first._

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-loss"><td class="res">loss</td><td>하이트진로(000080)</td><td>15,325</td><td>14,825</td><td class="pnl">-3.26%</td><td>150.0h</td><td>07-08 09:05 → 07-14 15:05</td></tr><tr class="t-loss"><td class="res">loss</td><td>한미사이언스(008930)</td><td>33,183</td><td>31,518</td><td class="pnl">-5.02%</td><td>94.6h</td><td>07-10 12:15 → 07-14 10:50</td></tr><tr class="t-loss"><td class="res">loss</td><td>대웅(003090)</td><td>17,568</td><td>16,843</td><td class="pnl">-4.13%</td><td>93.5h</td><td>07-10 12:20 → 07-14 09:50</td></tr></tbody></table>

---

_As of 2026-07-14 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
