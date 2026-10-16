# Run sheet: From Classroom to Cloud (VIT MCA · today 6:00 PM · 2 hours)

## Before the session
| Time | Do |
|---|---|
| 4:30 | Firebase setup (FIREBASE_SETUP.md steps 1-4), paste config.js |
| 5:00 | Push to GitHub, enable Pages |
| 5:15 | host.html → PIN → **Setup check** (all green) |
| 5:25 | Open `q.html` on your own phone, join. In host: New session → Next → simulate 5 Qs (tick "auto-answer") → Reveal |
| 5:40 | **New session** (wipes test scores). Close test tabs |
| 5:45 | Teams: share the **deck tab** (index.html). Host console on a second screen/tab |
| 5:55 | Press `M` in the deck, jump to slide 1. Say hello |

## Screens
- **Teams share:** deck (index.html). When a quiz is live, switch the shared tab to host.html to show bars/leaderboard, then back.
- **Your private tab:** host.html (PIN, Next/Reveal buttons, Space shortcut).

## Quiz loop (repeat for each question, about 45 seconds)
1. Host: **Next** (Space). Read the question aloud.
2. Wait about 20 seconds. Watch "answered x / joined y".
3. Host: **Reveal** (Space). Click to Teams tab to show bars. One-line explanation (it is on every phone too).
4. After question 5 of a topic: host **Leaderboard** (L). Shout out top 3. Then back to the deck.

## Timeline (120 min)
| Min | Block | Deck section | Live items |
|---|---|---|---|
| 0-12 | Career hook, QR join, 2 polls | Hook | Poll 1, Poll 2 |
| 12-32 | Ops + CampusCart outage | 1 · Ops | Quiz 1 (5 Q) |
| 32-52 | Dev vs Deployment | 2 · Dev vs Deploy | Quiz 2 |
| 52-90 | DevOps + 8 phases (about 3 min per phase) | 3 · DevOps | Quiz 3 |
| 90-108 | AI in DevOps | 4 · AI | Quiz 4 |
| 108-114 | Rapid-fire + leaderboard | 5 | Quiz 5 |
| 114-120 | Your path, final poll, homework | 6 · Your path | Poll 3 |
If you run late: skip the "CI vs CD" and "This file is a pipeline" slides, and compress phases 5-6.

## Order of host "Next" presses
Poll 1 → Poll 2 → (deck topic 1) → Q1-Q5 → Leaderboard → (deck topic 2) → Q1-Q5 → Leaderboard → (topic 3) → … → Poll 3 → **End**.
Use the **jump dropdown** + Go if you ever need to skip ahead.

## If something breaks
| Symptom | Fix |
|---|---|
| Host buttons say "Write refused" | PIN wrong or rules unpublished. Retype PIN, click Use PIN |
| Students see "Offline mode" banner | Firestore unreachable for them. They continue self-paced. You teach on |
| A student cannot join | Ask them to reload `q.html`. Their name and score are remembered |
| Everything stalls | **Pause** (phones show "Short pause"), fix, **Resume** |
| Duplicate names | Fine. Host leaderboard appends a short id |
| After class | **Export CSV** for scores. Note: answers in the page source are visible, so this is a fun quiz, not an exam |

## Teams tips (180 people)
- Put the QR slide up early and leave it for 60 seconds while you talk.
- Ask: "Phone for the quiz, laptop for Teams. Keep Teams audio on."
- Mute all attendees, enable chat for the join link: `askanilkumar.github.io/VIT_C2C/q.html`
