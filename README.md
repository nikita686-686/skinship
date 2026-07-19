# Skinship

Her everyday skin expert. A warm, consumer-first daily companion that combines the air where she is today, the products she already owns, and her own skin over time, in the voice of an expert she chooses. Members-first, honest, never a selling funnel.

**Author:** Nikita Kohli

---

## What this is

This is the front-end scaffold, built first with sample data so it runs with no accounts or API keys. Design direction is **Clementine**: white and tangerine, crystal and gloss. Backend (Supabase), the expert (Claude), and live weather + air quality get wired in next.

## Tech

- **Expo (React Native + TypeScript)** — one codebase for iOS, Android, and web
- **Expo Router** — file-based screens in `app/`
- **expo-linear-gradient** — the glossy Clementine surfaces
- Google fonts: Jost, Cormorant Garamond, Caveat

## Project layout

```
app/            Screens (Expo Router)
  index.tsx     Welcome
  onboarding.tsx  Choose expert persona + tone
  today.tsx     Daily home: environment, living expert, micro-delight, ritual
components/     GlossyButton, GlassCard
theme/          clementine.ts  (colors, fonts, gradients, shadows)
data/           mock.ts  (sample data, replaced by real services later)
```

## Run it

You need Node 18+ installed.

```bash
npm install
npx expo start
```

Then press `w` to open in a web browser, or scan the QR code with the **Expo Go** app on your phone to see it live.

If Expo reports version mismatches, run `npx expo install --fix` once, then `npx expo start` again.

## Work from any laptop while travelling

1. Push this folder to a private GitHub repo (steps below).
2. On GitHub, click **Code → Codespaces → Create codespace**. This opens a full dev environment in your browser, nothing to install, from any machine.
3. Run `npm install` then `npx expo start --web` inside the Codespace.

## Push to GitHub (first time)

```bash
git init
git add .
git commit -m "Skinship: Clementine front-end scaffold"
# create an empty private repo named "skinship" on github.com, then:
git branch -M main
git remote add origin https://github.com/<your-username>/skinship.git
git push -u origin main
```

## Roadmap (next)

- Onboarding: location, skin profile, shelf scan, optional baseline photo
- Tabs: Weekly reveal, Expert chat (voice), Shelf, You
- Wire Supabase (auth, database, private photo storage)
- Wire the expert on Claude (daily plan, chat, product label reading, weekly read)
- Wire live weather + air quality by ZIP
```
