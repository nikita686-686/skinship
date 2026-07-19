# Skinship

Her everyday skin expert. A warm, consumer-first daily companion that combines the air where she is today, the products she already owns, and her own skin over time, in the voice of an expert she chooses. Members-first, honest, never a selling funnel.

**Author:** Nikita Kohli
**Market:** United States (first)
**Status:** Front-end scaffold running on sample data. Mid-upgrade to Expo SDK 54. Live services not wired yet.

---

## Table of contents
1. The vision
2. Who it is for
3. Product principles
4. The three inputs
5. The expert (persona + tone)
6. Engagement peaks (the three we build)
7. Visual direction: Clementine
8. Screen map
9. Tech and architecture
10. Project structure
11. How to run
12. Known issues to fix next
13. Roadmap
14. Working across machines (Git)
15. For the next Claude Code instance

---

## 1. The vision

Skinship is a daily skin expert a woman opens each morning that gives her **one clear thing to do** for her skin, grounded in three real inputs: the air where she actually is today, the products she already owns, and her own skin over time. It is expert-level everyday guidance, **not a medical diagnosis**, delivered in the voice of an expert she chooses.

**The promise:** the only skin app that works with what you already own and your city's air today, and never tries to sell you anything.

**Why it is different:** the market is full of skin-analysis apps from beauty brands that exist to sell product. Skinship's loyalty is to the member. It optimizes what she owns and tells her honestly when she does not need to buy anything. **Trust is the moat.**

**Business stance:** members-first, not an affiliate funnel. Likely model is a subscription for the expert relationship, which must feel worth paying for. No pay-to-recommend.

## 2. Who it is for

Beachhead member: a woman roughly 25 to 40 in a US city with real environmental load (high UV, humidity, or pollution), who cares about her skin but is overwhelmed by conflicting advice and a shelf of products she is unsure how to use. She wants a knowledgeable companion, not another shopping app.

## 3. Product principles

- **Consumer first, always.** Every screen is warm and consumer-friendly; the experience comes before any other goal.
- **Members-first.** Loyalty is to her, not any brand. Optimize what she owns; be honest when she needs nothing.
- **Simple yet engaging.** The journey stays short and easy, never laborious, but interesting and alive.
- **Entice, do not manipulate.** Earn the daily open with delight and relationship, never guilt or compulsion loops.
- **Value before intimacy.** She gets something useful before we ask for her bare face.
- **Calm, not clinical.** Guide and reassure; never shame her skin or turn her face into a report card.
- **One clear move a day,** not a wall of scores.
- **Every input pays off visibly,** or we do not ask for it.
- **Fast by feel.** Many small taps with smart defaults; setup in about a minute.
- **Honest about limits.** When something needs a real dermatologist, we say so and step aside.

## 4. The three inputs

- **Environment.** From her location we read today's UV, humidity, and air quality. The daily heartbeat and the most reliable data we have.
- **Her products.** She photographs what she owns; we read the ingredients so advice is specific, not generic. The most defensible piece.
- **Her skin.** A baseline photo, then optional daily photos combined into a trustworthy weekly read. For tracking progress, not daily change. The most deferrable input.

Also collected, always used: skin type, top concerns, sensitivities, age range, and an optional cycle input for hormone-aware guidance.

## 5. The expert (persona + tone)

The expert is the spine of the product. The daily plan, the weekly read, and the chat are all delivered in the voice she chooses. Because the first market is the US, she chooses **persona and tone only** (the earlier region and identity chooser is not in this version).

- **Persona:** Expert friend, Assertive pro, or Gentle doctor.
- **Tone:** Casual, Warm, or Clinical.
- **Safety:** anything clinical is routed to a real dermatologist. We describe appearance, habits, and product usage, never treating or curing, to stay on the cosmetic side of the regulatory line.

## 6. Engagement peaks (the three we build)

Utility brings her back some days; a relationship and small delights bring her back daily. We build only three peaks, deliberately, through warmth rather than manipulation.

1. **Living expert.** A warm, evolving presence that greets her freshly each day and remembers small things about her.
2. **Micro-delights.** Occasional honest affirmations and noticed wins, given sincerely, never manufactured.
3. **Weekly reveal.** Progress staged as a small celebration, narrative-first and shame-free, built from her aggregated daily photos.

Deliberately NOT built (parked): daily reveal, glow streak, daily check-in ritual, shareable glow card.

## 7. Visual direction: Clementine

Sunlit, glossy, alive. White and air with a squeeze of tangerine, finished in crystal and gloss: glassy translucent panels, wet-look sheen, dewy highlights, and a little sparkle. Bright and premium rather than muted.

**Palette (see `theme/clementine.ts`):**
- White `#FFFFFF`, Mist `#FFF6F0`
- Tangerine `#FF6A3D`, Tangerine light `#FF9166`
- Ember `#E24E1B`
- Sun `#FFC98F`
- Ink `#241A15`, Sub `#8A7264`

**Type (Google fonts):**
- Jost Light — labels and body (wide-tracked, skincare-label feel)
- Cormorant Garamond — warm headings
- Caveat — rare handwritten accent (e.g. "nothing to buy today")

**Rule:** her uploaded photos are framed to stay luminous. Real images drop into the photo slots during build.

## 8. Screen map

**Flow A — First-time setup (value before intimacy)**
- A1 Welcome
- A2 Design your expert (persona)
- A3 Choose the tone
- A4 Your location (auto-detected US city)
- A5 Today where you are (first value, no intimacy)
- A6 Quick skin profile (type, concerns, age, optional cycle)
- A7 Scan your shelf
- A8 Your first real plan (full routine + nothing-to-buy)
- A9 Start tracking (optional baseline photo, privacy-first)

**Flow B — Everyday**
- B1 Today (environment numbers, living-expert greeting, micro-delight, morning + evening move, nothing-to-buy)
- B2 Daily snap (optional)
- B3 Expert chat (persona, talk or type, read aloud, medical routed out)
- B4 Proactive nudge / notifications

**Flow C — Weekly**
- C1 Weekly reveal (celebration, narrative-first, detail optional)

**Flow D — Her shelf**
- D1 My shelf (conflict flags, honest gaps, no pressure)
- D2 Product detail

**Flow E — You**
- E1 Profile and expert settings
- E2 Trust and how advice is made (dermatology-informed, sources)
- E3 Privacy and your data

**Cross-cutting**
- X1 Safety triage
- X2 Empty states
- X3 Error states

**Built so far:** A1 Welcome, A2/A3 Onboarding (persona + tone), B1 Today. The rest are designed but not yet coded.

## 9. Tech and architecture

Front-end first, so it runs with no accounts or keys while early. Live services plug in next.

- **App:** Expo (React Native + TypeScript). One codebase for iOS, Android, and web. Expo Router for file-based screens.
- **Design system:** Clementine tokens in `theme/clementine.ts`; reusable glossy components in `components/`.
- **Data + accounts (next):** Supabase — database (profile, shelf, history), secure login, private photo storage.
- **The expert (next):** Anthropic Claude — writes the daily plan, runs the chat in her persona, reads product labels from photos, drafts the weekly read. Kept server-side.
- **Live conditions (next):** a weather + UV feed plus an air-quality feed, driven by her ZIP code.
- **Glue (next):** a thin backend holds secret keys and orchestrates the app, Claude, and the data APIs.
- **Code home:** this private GitHub repo. Clone on any laptop, or open a GitHub Codespace to work from any browser while travelling.

## 10. Project structure

```
app/               Screens (Expo Router)
  _layout.tsx      Loads fonts, sets up the stack
  index.tsx        A1 Welcome
  onboarding.tsx   A2/A3 Choose persona + tone
  today.tsx        B1 Daily home
components/
  GlossyButton.tsx Glossy gradient button (solid + ghost)
  GlassCard.tsx    Frosted translucent card
theme/
  clementine.ts    Colors, gradients, radii, spacing, fonts, shadows
data/
  mock.ts          Sample data (city, personas, tones, routine, shelf, delights)
```

## 11. How to run

Requires Node 18+.

```bash
npm install
npx expo start
```

Press `w` for web, or scan the QR code with the Expo Go app on your phone.

**macOS file-watch error** (`EMFILE: too many open files`): run `ulimit -n 10240` in the same terminal before `npx expo start`, or install Watchman (`brew install watchman`) for a permanent fix.

**Web needs** `react-native-web` and `react-dom` (already in package.json). If prompted, run `npx expo install react-native-web react-dom`.

## 12. Known issues to fix next

- **Expo Go on device is SDK 54; project was scaffolded on SDK 51.** package.json is updated to SDK 54 targets, but the upgrade produced build/transform errors (Babel/Metro, likely React 19 + new-architecture version mismatches). Fix by running `npx expo install --fix`, then `npx expo start -c`. If Babel/transform errors persist, align `babel-preset-expo` and any remaining pinned versions to SDK 54. Paste the exact error output to Claude to resolve quickly.

## 13. Roadmap

1. Clear the SDK 54 upgrade errors so it runs clean on device and web.
2. Build remaining setup screens: location, skin profile, shelf scan, optional baseline photo.
3. Build tabs: Weekly reveal, Expert chat (with voice in and out), Shelf, You.
4. Wire Supabase (auth, database, private photo storage).
5. Wire the expert on Claude (daily plan, chat, product-label reading, weekly read).
6. Wire live weather + air quality by ZIP.
7. Replace photo placeholders with real image capture.

## 14. Working across machines (Git)

```bash
# on a new machine
git clone https://github.com/nikita686-686/skinship.git
cd skinship
npm install

# after making changes
git add -A
git commit -m "what you changed"
git push
```

## 15. For the next Claude Code instance

You are picking up **Skinship**, an Expo (React Native + TypeScript) app, front-end first on mock data, visual direction **Clementine** (see section 7 and `theme/clementine.ts`). Read this whole README for full product context before changing anything.

**Immediate task:** the project was upgraded from Expo SDK 51 to SDK 54 to match Expo Go on the phone, and it currently throws build/transform errors. Start by running `npx expo install --fix` then `npx expo start -c`, ask the user to paste the exact errors, and resolve the version mismatches first. Then continue the roadmap in section 13.

**Guardrails:** keep everything members-first, calm, and consumer-first (section 3). Only three engagement peaks exist by design (section 6). Stay on the cosmetic side of medical claims (section 5). US market only for now, so persona + tone, no region chooser.
