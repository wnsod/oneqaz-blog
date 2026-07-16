---
title: "2026-07-11 US Trading Journal — Maine"
date: 2026-07-11T07:00:32+09:00
description: "Maine (US equities) journal: 6 trades, 50.0% win rate, avg -0.25% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
updated: 2026-07-16T00:36:36+00:00
ogImage: /characters/us/08_defensive.png
altUrl: /journal/2026-07-11-us-journal
altLang: ko
---

> ⚠️ **Correction (2026-07-16)**: A simulation data defect affecting 2026-07-08 through 07-15 was found, and this journal has been corrected and republished. A signal-persistence failure caused entries to be recorded at stale signal prices instead of live market prices, producing simulated trades at prices and returns that could not have existed in the market. The defective trades have been quarantined from the ledger and the engine has been repaired. This republished version reflects verified, valid trades only.

## Key takeaways

- **6 closed trades**, win rate **50.0%**, expectancy **-0.25%** per trade.
- Profit factor **0.66** · avg win **+0.99%** vs avg loss **-1.49%** (R:R **0.66**).
- Best **+1.07%** / worst **-2.53%** — every closed trade counted, losses included.
- Paper-trading simulation, not investment advice.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 6 (3W / 3L) |
| Win rate | 50.0% |
| Expectancy / trade | -0.25% |
| Profit factor | 0.66 |
| Avg win / avg loss | +0.99% / -1.49% |
| Best / worst | +1.07% / -2.53% |


## Recap

The recent closed trades show a mixed performance profile. The win rate settled at 50.0%, with the average realized gain at +0.99% contrasting against an average loss of -1.49%. The profit factor of 0.66 suggests that the magnitude of losses has been slightly outpacing the gains realized across the closed set. Notable positive outcomes included gains in AMZN (+1.07%), CHRW (+1.05%), and DOV (+0.84%). Conversely, the largest drawdowns were observed in BR (-2.53%), HUM (-1.53%), and MRSH (-0.39%). <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />

## Observations

The spread between the best outcome (+1.07%) and the worst outcome (-2.53%) indicates significant variance in trade outcomes. The negative expectancy of -0.25% per trade suggests that, on average, the realized losses are slightly outweighing the realized gains across the sampled trades. The performance metrics, particularly the profit factor below parity, suggest that the risk taken on the losing side of the trades has been substantial relative to the gains captured. <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />

## Lessons from Outcomes

The losses, particularly those seen in BR and HUM, highlight instances where the market moved against the established directional bias, leading to deeper drawdowns than anticipated. These outcomes underscore the importance of managing the magnitude of potential downside capture, even when the initial thesis appears sound. The data suggests that the risk parameters employed during those specific entries were insufficient to buffer against the observed volatility swings. <img class="emoji-char" src="/characters/us/08_defensive.png" alt="Maine" />

(This research note reflects paper-trading analysis and does not constitute investment advice.)

### Closed trades (chronological)

_6 trades closed today. Excluding micro-scalps, 6 meaningful trades (held 30m+ or P&L ±1%+), earliest entry first._

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Amazon.com, Inc.(AMZN)</td><td>243.60</td><td>246.20</td><td class="pnl">+1.07%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Broadridge Financial Solutions,(BR)</td><td>150.00</td><td>146.20</td><td class="pnl">-2.53%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr><tr class="t-win"><td class="res">win</td><td>C.H. Robinson Worldwide, Inc.(CHRW)</td><td>190.80</td><td>192.80</td><td class="pnl">+1.05%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr><tr class="t-win"><td class="res">win</td><td>Dover Corporation(DOV)</td><td>213.80</td><td>215.60</td><td class="pnl">+0.84%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Humana Inc.(HUM)</td><td>397.70</td><td>391.60</td><td class="pnl">-1.53%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Marsh(MRSH)</td><td>178.90</td><td>178.20</td><td class="pnl">-0.39%</td><td>72.5h</td><td>07-08 01:05 → 07-11 01:35</td></tr></tbody></table>

---

_As of 2026-07-11 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
