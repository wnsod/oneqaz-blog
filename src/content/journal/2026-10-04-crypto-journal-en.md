---
title: "2026-10-04 Crypto Trading Journal — Bengal"
date: 2026-10-04T21:00:42+09:00
description: "Bengal (crypto) journal: 543 trades, 61.0% win rate, avg +0.76% (paper-trading)"
category: journal
markets: [crypto]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-10-04
metrics:
  closed_trades: 543
  wins: 331
  losses: 212
  win_rate_pct: 61.0
  avg_pnl_pct: 0.756
  best_pct: 21.16
  worst_pct: -5.94
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 2.05
ogImage: /characters/crypto/09_excited.png
altUrl: /journal/2026-10-04-crypto-journal/
altLang: ko
---

## Key takeaways

- **543 closed trades**, win rate **61.0%**, expectancy **+0.76%** per trade.
- Profit factor **2.05** · avg win **+2.42%** vs avg loss **-1.84%** (R:R **1.32**).
- Best **+21.16%** / worst **-5.94%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 543 (331W / 212L) |
| Win rate | 61.0% |
| Expectancy / trade | +0.76% |
| Profit factor | 2.05 |
| Avg win / avg loss | +2.42% / -1.84% |
| Best / worst | +21.16% / -5.94% |


## Recap

The session saw a solid volume of closed trades, totaling 543 executions. The overall performance metrics indicate a positive expectancy of +0.76% per trade, supported by a profit factor of 2.05. The win rate settled at 61.0%, suggesting that the positive outcomes were sufficiently weighted to offset the losses. The average winning trade yielded a gain of +2.42%, while the average losing trade registered a decline of -1.84%. Notable successes included gains on Stader (SD) at +9.80% and Basic Attention (BAT) at +9.21%: <img class="emoji-char" src="/characters/crypto/09_excited.png" alt="Bengal" />.

## Observations on Outcomes

The disparity between the best recorded gain (+21.16%) and the worst loss (-5.94%) highlights the significant range captured across the analyzed set. While the notable wins, such as the performance on SD and BAT, suggest capturing strong directional moves, the losses on OpenLedger (OPEN) and Ark (ARK) demonstrate instances where the downside risk materialized sharply. The fact that Puffer (PUFFER) appeared in both a notable win (+8.87%) and a notable loss (-4.09%) suggests high volatility and difficulty in maintaining consistent directional conviction across similar assets <img class="emoji-char" src="/characters/crypto/11_thinking.png" alt="Bengal" />.

## Lessons from Drawdowns

The losses encountered, particularly the -5.94% on OPEN, underscore the importance of managing exposure during periods of rapid reversal. These drawdowns suggest that while the positive expectancy is mathematically sound, the realized volatility requires careful consideration. The spread between the average win and average loss suggests that while winning trades are generally larger than losing trades, the magnitude of the largest loss can significantly temper the overall perceived edge <img class="emoji-char" src="/characters/crypto/10_suspicious.png" alt="Bengal" />.

This research note reflects the quantitative outcomes of paper-trading simulations and does not constitute investment advice.

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>Stader(SD)</td><td>159.20</td><td>174.80</td><td class="pnl">+9.80%</td><td>23.2h</td><td>10-03 11:45 → 10-04 11:00</td></tr><tr class="t-win"><td class="res">win</td><td>Basic Attention(BAT)</td><td>128.10</td><td>139.90</td><td class="pnl">+9.21%</td><td>20.2h</td><td>10-03 20:15 → 10-04 16:30</td></tr><tr class="t-win"><td class="res">win</td><td>퍼퍼(PUFFER)</td><td>31.57</td><td>34.37</td><td class="pnl">+8.87%</td><td>10.8h</td><td>10-03 13:30 → 10-04 00:15</td></tr><tr class="t-win"><td class="res">win</td><td>빔(BEAM)</td><td>2.85</td><td>3.08</td><td class="pnl">+8.08%</td><td>17.2h</td><td>10-03 21:00 → 10-04 14:15</td></tr><tr class="t-win"><td class="res">win</td><td>Espresso(ESP)</td><td>136.10</td><td>146.90</td><td class="pnl">+7.94%</td><td>10.5h</td><td>10-04 00:15 → 10-04 10:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>OpenLedger(OPEN)</td><td>175.20</td><td>164.80</td><td class="pnl">-5.94%</td><td>4.0h</td><td>10-03 17:15 → 10-03 21:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>아크(ARK)</td><td>331.30</td><td>316.70</td><td class="pnl">-4.41%</td><td>0.0h</td><td>10-03 21:45 → 10-03 21:45</td></tr><tr class="t-loss"><td class="res">loss</td><td>퍼퍼(PUFFER)</td><td>34.20</td><td>32.80</td><td class="pnl">-4.09%</td><td>0.0h</td><td>10-04 00:15 → 10-04 00:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>Optimism(OP)</td><td>185.20</td><td>177.80</td><td class="pnl">-4.00%</td><td>20.2h</td><td>10-04 00:00 → 10-04 20:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>SuperVerse(SUPER)</td><td>371.40</td><td>356.60</td><td class="pnl">-3.98%</td><td>0.0h</td><td>10-04 00:00 → 10-04 00:00</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -5.94% · P25 -0.43% · median +1.77% · P75 +2.83% · max +9.80%_

**Full data** — all 543 closed trades: [CSV download](/data/journal/2026-10-04-crypto.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-10-04 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
