---
title: "2026-11-03 Korea Trading Journal — Kosho"
date: 2026-11-03T17:00:44+09:00
description: "Kosho (Korean equities) journal: 395 trades, 25.1% win rate, avg -1.60% (paper-trading)"
category: journal
markets: [kr]
tags: [journal, review]
lang: en
draft: false
data_as_of: 2026-11-03
metrics:
  closed_trades: 395
  wins: 99
  losses: 296
  win_rate_pct: 25.1
  avg_pnl_pct: -1.601
  best_pct: 11.45
  worst_pct: -11.37
  account: paper
  source: "OneQAZ ledger via MCP"
  profit_factor: 0.25
ogImage: /characters/kr/02_sad.png
altUrl: /journal/2026-11-03-kr-journal/
altLang: ko
---

## Key takeaways

- **395 closed trades**, win rate **25.1%**, expectancy **-1.60%** per trade.
- Profit factor **0.25** · avg win **+2.12%** vs avg loss **-2.85%** (R:R **0.74**).
- Best **+11.45%** / worst **-11.37%** — every closed trade counted, losses included.

### Metrics

| Metric | Value |
|---|---|
| Closed trades | 395 (99W / 296L) |
| Win rate | 25.1% |
| Expectancy / trade | -1.60% |
| Profit factor | 0.25 |
| Avg win / avg loss | +2.12% / -2.85% |
| Best / worst | +11.45% / -11.37% |


## Recap

The recent closed trades reflect a challenging session across the board. The overall performance metrics show a win rate of 25.1% and a negative expectancy of -1.60% per trade. While there were notable gains, such as the +11.45% on 한진칼 (180640) and a +8.03% on the same name, these were counterbalanced by significant losses, including a -11.37% on S-Oil (010950) and a -10.55% on 기가비스 (420770). The average winning trade (+2.12%) was substantially smaller in magnitude compared to the average losing trade (-2.85%), indicating that the losses were disproportionately large relative to the gains observed. <img class="emoji-char" src="/characters/kr/10_suspicious.png" alt="Kosho" />

## Lessons from the Outcomes

The depth of the losses, particularly those exceeding 10% in magnitude, suggests that the market structure during these specific trades was highly resistant to the prevailing directional bias. The negative profit factor of 0.25 indicates that the total gains generated were significantly less than the total losses incurred. This pattern suggests that the selling pressure or volatility encountered on the downside was more pronounced and less easily mitigated than the buying momentum captured on the upside. <img class="emoji-char" src="/characters/kr/11_thinking.png" alt="Kosho" />

## Observation

The observed activity highlights the difficulty in maintaining positive risk-adjusted returns when the underlying market regime is characterized by sharp reversals. The disparity between the best and worst single-trade outcomes (+11.45% vs. -11.37%) underscores the high variance present in the recent trading action. <img class="emoji-char" src="/characters/kr/02_sad.png" alt="Kosho" />

*This research note is for analytical observation only and does not constitute investment advice.*

### Notable trades (top 5 wins · top 5 losses)

<table class="trades"><thead><tr><th>Result</th><th>Symbol</th><th>Buy</th><th>Sell</th><th>P&L</th><th>Held</th><th>Entry → Exit (KST)</th></tr></thead><tbody><tr class="t-win"><td class="res">win</td><td>한진칼(180640)</td><td>132,032</td><td>147,153</td><td class="pnl">+11.45%</td><td>19.2h</td><td>11-02 13:55 → 11-03 09:10</td></tr><tr class="t-win"><td class="res">win</td><td>한진칼(180640)</td><td>148,148</td><td>160,040</td><td class="pnl">+8.03%</td><td>0.5h</td><td>11-03 09:10 → 11-03 09:40</td></tr><tr class="t-win"><td class="res">win</td><td>카카오게임즈(293490)</td><td>11,522</td><td>12,188</td><td class="pnl">+5.78%</td><td>24.6h</td><td>11-02 10:25 → 11-03 11:00</td></tr><tr class="t-win"><td class="res">win</td><td>피에스케이홀딩스(031980)</td><td>165,766</td><td>173,626</td><td class="pnl">+4.74%</td><td>0.7h</td><td>11-03 10:05 → 11-03 10:45</td></tr><tr class="t-win"><td class="res">win</td><td>보로노이(310210)</td><td>101,101</td><td>105,894</td><td class="pnl">+4.74%</td><td>1.1h</td><td>11-03 09:10 → 11-03 10:15</td></tr><tr class="t-loss"><td class="res">loss</td><td>S-Oil(010950)</td><td>127,928</td><td>113,386</td><td class="pnl">-11.37%</td><td>18.5h</td><td>11-02 14:40 → 11-03 09:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>기가비스(420770)</td><td>92,693</td><td>82,917</td><td class="pnl">-10.55%</td><td>22.9h</td><td>11-02 10:15 → 11-03 09:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>티에스이(131290)</td><td>225,725</td><td>203,796</td><td class="pnl">-9.71%</td><td>20.6h</td><td>11-02 12:35 → 11-03 09:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>유진테크(084370)</td><td>106,907</td><td>98,202</td><td class="pnl">-8.14%</td><td>20.2h</td><td>11-02 13:00 → 11-03 09:10</td></tr><tr class="t-loss"><td class="res">loss</td><td>피에스케이홀딩스(031980)</td><td>184,785</td><td>169,830</td><td class="pnl">-8.09%</td><td>20.2h</td><td>11-02 12:55 → 11-03 09:10</td></tr></tbody></table>
_P&L distribution (300 meaningful trades): min -11.37% · P25 -3.44% · median -3.13% · P75 +0.34% · max +11.45%_

**Full data** — all 395 closed trades: [CSV download](/data/journal/2026-11-03-kr.csv) · or query live via [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp).

**Related**
- All-time track record: [/track-record/all-time/](/track-record/all-time/)

---

_As of 2026-11-03 (KST)._

> **Disclaimer:** OneQAZ figures are **paper-trading** research, **not investment advice**. Past simulated performance does not predict future real-money results.

**Three ways to see OneQAZ** — this post is the *synthesis* layer:
- **Live** — [dashboard stream](https://www.youtube.com/channel/UCZq7DKom3fuxpMPUUjRhMmA/live) (the system's screen, 24/7)
- **Synthesis** — [blog.oneqaz.com](https://blog.oneqaz.com) (daily reads · journals · track record)
- **Query** — [OneQAZ MCP](https://github.com/wnsod/oneqaz-trading-mcp) (connect an AI to live data)
