---
title: "2026-07-09 US Trading Journal — Maine"
date: 2026-07-09T07:00:26+09:00
description: "Maine (US equities) journal: 2 trades, 50.0% win rate, avg +0.47% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
updated: 2026-07-16T16:05:25+00:00
ogImage: /characters/us/07_confident.png
altUrl: /journal/2026-07-09-us-journal
altLang: ko
---

> ⚠️ **Correction (2026-07-16)**: A simulation data defect affecting 2026-07-08 through 07-15 was found, and this journal has been corrected and republished. A signal-persistence failure caused entries to be recorded at stale signal prices instead of live market prices, producing simulated trades at prices and returns that could not have existed in the market. The defective trades have been quarantined from the ledger and the engine has been repaired. This republished version reflects verified, valid trades only.

## Key takeaways

- **2 closed trades**, win rate **50.0%**, expectancy **+0.47%** per trade.
- Profit factor **1.30** · avg win **+4.08%** vs avg loss **-3.14%** (R:R **1.30**).
- Best **+4.08%** / worst **-3.14%** — every closed trade counted, losses included.
- Paper-trading simulation, not investment advice.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 2 (1W / 1L) |
| Win rate | 50.0% |
| Expectancy / trade | +0.47% |
| Profit factor | 1.30 |
| Avg win / avg loss | +4.08% / -3.14% |
| Best / worst | +4.08% / -3.14% |


## Recap

The recent closed trades showed a mixed outcome, with a 50.0% win rate across the two positions. The average realized gain was +4.08% per winning trade, notably seen with Arista Networks, Inc. (ANET). Conversely, the average loss was -3.14%, exemplified by the position in Robinhood Markets, Inc. (HOOD). The overall expectancy for the closed trades was positive at +0.47% per trade, supported by a profit factor of 1.30.

## Observations

The performance metrics suggest that the magnitude of the average win exceeded the average loss by a notable margin. The positive expectancy indicates that the successful trades more than compensated for the losses incurred in the underperforming trades. <img class="emoji-char" src="/characters/us/07_confident.png" alt="Maine" />

## Lessons Learned

The loss on HOOD, while contributing to the overall negative outcome for that specific trade, provided clear data points regarding the resistance levels encountered. The divergence between the best outcome (+4.08%) and the worst outcome (-3.14%) suggests that while the model captured significant upside potential in one instance, it also encountered clear points of failure on the downside. <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />

***

*This research note reflects historical paper-trading results and does not constitute investment advice.*

### Closed trades (chronological)

_2 trades closed today. Excluding micro-scalps, 2 meaningful trades (held 30m+ or P&L ±1%+), earliest entry first._

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Arista Networks, Inc.(ANET)</td><td>166.80</td><td>173.60</td><td class="pnl">+4.08%</td><td>23.5h</td><td>07-08 01:05 → 07-09 00:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Robinhood Markets, Inc.(HOOD)</td><td>114.60</td><td>111.00</td><td class="pnl">-3.14%</td><td>22.6h</td><td>07-08 01:05 → 07-08 23:40</td></tr></tbody></table>

---

_As of 2026-07-09 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
