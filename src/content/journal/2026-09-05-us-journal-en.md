---
title: "2026-09-05 US Trading Journal — Maine"
date: 2026-09-05T07:00:45+09:00
description: "Maine (US equities) journal: 179 trades, 40.2% win rate, avg -0.28% (paper-trading)"
category: journal
markets: [us]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-05
metrics:
  closed_trades: 179
  wins: 72
  losses: 107
  win_rate_pct: 40.2
  avg_pnl_pct: -0.276
  best_pct: 10.29
  worst_pct: -20.05
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.79
ogImage: /characters/us/02_sad.png
altUrl: /journal/2026-09-05-us-journal/
altLang: ko
---

## Key takeaways

- **179 closed trades**, win rate **40.2%**, expectancy **-0.28%** per trade.
- Profit factor **0.79** · avg win **+2.66%** vs avg loss **-2.25%** (R:R **1.18**).
- Best **+10.29%** / worst **-20.05%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 179 (72W / 107L) |
| Win rate | 40.2% |
| Expectancy / trade | -0.28% |
| Profit factor | 0.79 |
| Avg win / avg loss | +2.66% / -2.25% |
| Best / worst | +10.29% / -20.05% |


## Recap

The day's closed activity showed a mixed outcome across the 179 trades executed. The win rate settled at 40.2%, with the overall expectancy registering at -0.28% per trade. The profit factor of 0.79 indicates that the average loss magnitude was slightly larger than the average win magnitude. Notable positive returns included gains in KLAC (+10.29%), SNDK (+8.91%), and HPE (+8.36%). Conversely, the largest drawdowns were observed in FICO (-20.05%), LULU (-17.02%), and EFX (-8.94%). The spread between the best recorded gain and the worst recorded loss was substantial, suggesting significant volatility capture on both ends of the spectrum <img class="emoji-char" src="/characters/us/10_suspicious.png" alt="Maine" />.

## Observations

The performance metrics suggest that while there were several instances of capturing meaningful upside, the frequency and depth of the losses weighed on the overall expected value. The significant negative deviation seen in the losses, particularly the -20.05% outcome, suggests that when trades move against the initial thesis, the downside exposure can be considerable. The positive results, while notable, were not sufficient in aggregate to offset the cumulative negative impact from the losing trades <img class="emoji-char" src="/characters/us/02_sad.png" alt="Maine" />.

## For Next Time

The trades that resulted in the largest losses—specifically FICO, LULU, and EFX—highlight instances where the initial directional conviction did not hold up against market pressure. These outcomes suggest a need to recalibrate the tolerance for deviation when initial signals are generated. The pattern observed is that the magnitude of the negative outcomes is disproportionately large relative to the positive outcomes, indicating that risk management around the downside tail needs closer examination <img class="emoji-char" src="/characters/us/11_thinking.png" alt="Maine" />.

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>KLA Corporation(KLAC)</td><td>168.20</td><td>185.50</td><td class="pnl">+10.29%</td><td>24.2h</td><td>09-03 22:50 → 09-04 23:05</td></tr><tr class="t-win"><td class="res">win</td><td>Sandisk Corporation(SNDK)</td><td>1,548</td><td>1,686</td><td class="pnl">+8.91%</td><td>19.8h</td><td>09-04 04:25 → 09-05 00:10</td></tr><tr class="t-win"><td class="res">win</td><td>Hewlett Packard Enterprise Comp(HPE)</td><td>50.12</td><td>54.31</td><td class="pnl">+8.36%</td><td>20.7h</td><td>09-04 02:55 → 09-04 23:35</td></tr><tr class="t-win"><td class="res">win</td><td>Coherent Corp.(COHR)</td><td>264.60</td><td>281.40</td><td class="pnl">+6.35%</td><td>19.8h</td><td>09-04 03:25 → 09-04 23:10</td></tr><tr class="t-win"><td class="res">win</td><td>Micron Technology, Inc.(MU)</td><td>935.00</td><td>993.60</td><td class="pnl">+6.27%</td><td>66.7h</td><td>09-02 04:55 → 09-04 23:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Fair Isaac Corporation(FICO)</td><td>1,111</td><td>888.20</td><td class="pnl">-20.05%</td><td>20.8h</td><td>09-04 01:55 → 09-04 22:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>lululemon athletica inc.(LULU)</td><td>121.60</td><td>100.90</td><td class="pnl">-17.02%</td><td>91.8h</td><td>09-01 02:45 → 09-04 22:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Equifax, Inc.(EFX)</td><td>189.00</td><td>172.10</td><td class="pnl">-8.94%</td><td>95.2h</td><td>08-31 23:20 → 09-04 22:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>Adobe Inc.(ADBE)</td><td>289.40</td><td>266.50</td><td class="pnl">-7.91%</td><td>23.0h</td><td>09-03 23:35 → 09-04 22:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>PTC Inc.(PTC)</td><td>151.40</td><td>142.40</td><td class="pnl">-5.94%</td><td>20.4h</td><td>09-04 02:10 → 09-04 22:35</td></tr></tbody></table>
_P&L distribution (171 meaningful trades): min -20.05% · P25 -2.26% · median -0.42% · P75 +2.18% · max +10.29%_

**Full data** — all 179 closed trades: [CSV download](/data/journal/2026-09-05-us.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-05 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
