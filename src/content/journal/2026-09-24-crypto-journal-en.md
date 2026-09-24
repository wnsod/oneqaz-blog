---
title: "2026-09-24 Crypto Trading Journal — Bengal"
date: 2026-09-24T21:00:40+09:00
description: "Bengal (crypto) journal: 1016 trades, 37.0% win rate, avg -1.03% (paper-trading)"
category: journal
markets: [crypto]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-09-24
metrics:
  closed_trades: 1016
  wins: 376
  losses: 640
  win_rate_pct: 37.0
  avg_pnl_pct: -1.035
  best_pct: 12.63
  worst_pct: -7.23
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.49
ogImage: /characters/crypto/02_sad.png
altUrl: /journal/2026-09-24-crypto-journal/
altLang: ko
---

## Key takeaways

- **1016 closed trades**, win rate **37.0%**, expectancy **-1.03%** per trade.
- Profit factor **0.49** · avg win **+2.70%** vs avg loss **-3.23%** (R:R **0.84**).
- Best **+12.63%** / worst **-7.23%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 1016 (376W / 640L) |
| Win rate | 37.0% |
| Expectancy / trade | -1.03% |
| Profit factor | 0.49 |
| Avg win / avg loss | +2.70% / -3.23% |
| Best / worst | +12.63% / -7.23% |


## Recap

The day's closed activity shows a mixed outcome. Out of 1016 trades executed, the win rate settled at 37.0%. The average realized profit was +2.70%, contrasted by an average loss of -3.23%. The profit factor of 0.49 suggests that the magnitude of losses is currently outweighing the gains realized across the sample set. Notable positive returns were observed in BTR (+12.38%), SIX (+12.22%), and CTR (+12.07%), while the largest drawdowns occurred in BILL (-5.92%), KAITO (-5.73%), and TRAC (-5.61%). The best single performance was +12.63%, against a worst recorded loss of -7.23%. <img class="emoji-char" src="/characters/crypto/10_suspicious.png" alt="Bengal" />

## Observations on Performance

The negative expectancy of -1.03% per trade indicates that, on average, the losses incurred are exceeding the gains captured across the closed positions. The disparity between the average win size and the average loss size, while suggesting some successful captures, is not sufficient to offset the overall negative expectation. The performance metrics suggest that the frequency and magnitude of the losses are currently exerting a downward drag on the overall realized PnL. <img class="emoji-char" src="/characters/crypto/11_thinking.png" alt="Bengal" />

## Lessons from Drawdowns

The trades resulting in losses, such as those in BILL, KAITO, and TRAC, highlight instances where the market moved against the established positions. These specific exits demonstrate that even when trades are initiated with apparent conviction, the market structure can rapidly shift, leading to drawdowns that are not easily mitigated by subsequent small gains. The consistency of the negative average loss suggests a recurring vulnerability to sharp, directional reversals. <img class="emoji-char" src="/characters/crypto/02_sad.png" alt="Bengal" />

***
*This research note reflects the analysis of historical paper-trading data and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Bitrue Coin(BTR)</td><td>70.26</td><td>78.96</td><td class="pnl">+12.38%</td><td>12.5h</td><td>09-23 12:30 → 09-24 01:00</td></tr><tr class="t-win"><td class="res">win</td><td>식스(SIX)</td><td>7.28</td><td>8.17</td><td class="pnl">+12.22%</td><td>21.2h</td><td>09-23 02:45 → 09-24 00:00</td></tr><tr class="t-win"><td class="res">win</td><td>Citrea(CTR)</td><td>16.16</td><td>18.11</td><td class="pnl">+12.07%</td><td>2.5h</td><td>09-23 19:30 → 09-23 22:00</td></tr><tr class="t-win"><td class="res">win</td><td>Unibase(UB)</td><td>195.20</td><td>212.80</td><td class="pnl">+9.02%</td><td>3.8h</td><td>09-23 20:15 → 09-24 00:00</td></tr><tr class="t-win"><td class="res">win</td><td>MARBLEX(MBX)</td><td>39.51</td><td>42.78</td><td class="pnl">+8.28%</td><td>16.8h</td><td>09-23 07:30 → 09-24 00:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>Billions Network(BILL)</td><td>18.58</td><td>17.48</td><td class="pnl">-5.92%</td><td>83.0h</td><td>09-20 12:00 → 09-23 23:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>카이토(KAITO)</td><td>488.50</td><td>460.50</td><td class="pnl">-5.73%</td><td>18.8h</td><td>09-23 04:15 → 09-23 23:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>OriginTrail(TRAC)</td><td>481.50</td><td>454.50</td><td class="pnl">-5.61%</td><td>10.2h</td><td>09-23 13:00 → 09-23 23:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>AIOZ Network(AIOZ)</td><td>173.20</td><td>163.80</td><td class="pnl">-5.43%</td><td>5.0h</td><td>09-23 18:00 → 09-23 23:00</td></tr><tr class="t-loss"><td class="res">loss</td><td>Worldcoin(WLD)</td><td>619.60</td><td>586.40</td><td class="pnl">-5.36%</td><td>12.0h</td><td>09-23 11:00 → 09-23 23:00</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -5.92% · P25 -3.84% · median -3.44% · P75 -1.61% · max +12.38%_

**Full data** — all 1016 closed trades: [CSV download](/data/journal/2026-09-24-crypto.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-09-24 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
