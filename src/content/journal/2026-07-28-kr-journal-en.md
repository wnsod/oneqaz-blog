---
title: "2026-07-28 Korea Trading Journal — Kosho"
date: 2026-07-28T17:00:42+09:00
description: "Kosho (Korean equities) journal: 449 trades, 7.1% win rate, avg -3.14% (paper-trading)"
category: journal
markets: [kr]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-07-28
metrics:
  closed_trades: 449
  wins: 32
  losses: 417
  win_rate_pct: 7.1
  avg_pnl_pct: -3.137
  best_pct: 13.4
  worst_pct: -29.44
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.05
ogImage: /characters/kr/02_sad.png
altUrl: /journal/2026-07-28-kr-journal/
altLang: ko
---

## Key takeaways

- **449 closed trades**, win rate **7.1%**, expectancy **-3.14%** per trade.
- Profit factor **0.05** · avg win **+2.08%** vs avg loss **-3.54%** (R:R **0.59**).
- Best **+13.40%** / worst **-29.44%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 449 (32W / 417L) |
| Win rate | 7.1% |
| Expectancy / trade | -3.14% |
| Profit factor | 0.05 |
| Avg win / avg loss | +2.08% / -3.54% |
| Best / worst | +13.40% / -29.44% |


## Recap

The day's closed trading activity showed a mixed performance profile. Out of 449 closed trades, the overall win rate was low at 7.1%. The average expected return across these trades was negative, at -3.14% per trade. Profitability was marginal, indicated by a profit factor of 0.05. The average winning trade yielded a gain of 2.08%, while the average losing trade resulted in a loss of 3.54%. Notable positive outcomes included gains from 셀바스AI (+13.40%) and EMB (+3.80%). Conversely, significant drawdowns were observed, particularly with 야스 (-29.44%) and LG이노텍 (-13.17%), which weighed heavily on the overall performance. <img class="emoji-char" src="/characters/kr/10_suspicious.png" alt="Kosho" />

## Analysis of Outcomes

The disparity between the average win size and the average loss size suggests that while some profitable trades were executed, the magnitude of the losses was disproportionately large relative to the gains. The frequency of trades, combined with the negative expectancy, points to a period where capital preservation proved challenging. The notable losses, such as those seen in 야스 and LG이노텍, highlight instances where directional conviction did not translate into risk-adjusted returns. <img class="emoji-char" src="/characters/kr/11_thinking.png" alt="Kosho" />

## For Next Time

The outcomes from the losing trades, particularly those with deep drawdowns, underscore the importance of managing the risk exposure on the downside. The data suggests that the risk taken on the losing legs significantly outweighed the positive contributions from the winning trades. A focus on controlling the maximum loss per trade appears warranted when reviewing the sequence of events. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="Kosho" />

*This research note reflects a paper-trading simulation and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>셀바스AI(108860)</td><td>8,158</td><td>9,251</td><td class="pnl">+13.40%</td><td>19.8h</td><td>07-27 13:45 → 07-28 09:35</td></tr><tr class="t-win"><td class="res">win</td><td>EMB(278990)</td><td>2,502</td><td>2,597</td><td class="pnl">+3.80%</td><td>18.1h</td><td>07-27 15:30 → 07-28 09:35</td></tr><tr class="t-win"><td class="res">win</td><td>파마리서치(214450)</td><td>356,856</td><td>369,130</td><td class="pnl">+3.44%</td><td>1.1h</td><td>07-28 10:00 → 07-28 11:05</td></tr><tr class="t-win"><td class="res">win</td><td>네오이뮨텍(950220)</td><td>1,318</td><td>1,363</td><td class="pnl">+3.41%</td><td>1.3h</td><td>07-28 10:00 → 07-28 11:20</td></tr><tr class="t-win"><td class="res">win</td><td>효성티앤씨(298020)</td><td>308,808</td><td>317,682</td><td class="pnl">+2.87%</td><td>3.3h</td><td>07-28 09:45 → 07-28 13:05</td></tr><tr class="t-loss"><td class="res">loss</td><td>야스(255440)</td><td>7,377</td><td>5,205</td><td class="pnl">-29.44%</td><td>20.4h</td><td>07-27 13:10 → 07-28 09:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>LG이노텍(011070)</td><td>608,608</td><td>528,471</td><td class="pnl">-13.17%</td><td>18.3h</td><td>07-27 15:15 → 07-28 09:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>엘티씨(170920)</td><td>39,990</td><td>35,265</td><td class="pnl">-11.82%</td><td>18.1h</td><td>07-27 15:30 → 07-28 09:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>SK텔레콤(017670)</td><td>97,798</td><td>86,414</td><td class="pnl">-11.64%</td><td>20.4h</td><td>07-27 13:10 → 07-28 09:35</td></tr><tr class="t-loss"><td class="res">loss</td><td>OCI홀딩스(010060)</td><td>207,207</td><td>184,615</td><td class="pnl">-10.90%</td><td>20.5h</td><td>07-27 13:05 → 07-28 09:35</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -29.44% · P25 -4.74% · median -3.65% · P75 -3.24% · max +13.40%_

**Full data** — all 449 closed trades: [CSV download](/data/journal/2026-07-28-kr.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-07-28 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
