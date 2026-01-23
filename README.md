# PABRIK ROTI [![version](https://img.shields.io/badge/version-1.3.3.1-blue)](https://github.com/myreceiptt/pabrikroti-bukhari/releases/tag/v.1.3.3.1)

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

## PABRIK ROTI v.1.3.3.1: Staging MeMoRa of Voyage.Co.Id by Bukhari Creative Group

Link #1: [galeri.harmoniistiqlal.com](https://galeri.harmoniistiqlal.com/)  
Link #2: [bukhari.voyage.co.id](https://bukhari.voyage.co.id/)  
Link #3: [bukhari.endhonesa.com](https://bukhari.endhonesa.com/)

🧬 Forked from [PABRIKROTI-MASTER](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.1.3.3-bukhari)

## About This Repo

This repo is a staging prototype of **PABRIK ROTI** for the **Bukhari Creative Group** ecosystem—built to support a cultural gallery exhibition at **Istiqlal Mosque (Indonesia)** by pairing physical artworks with NFT-based digital souvenirs.

### What it does

- Presents the exhibition context and curated pages for the Bukhari / Voyage staging site.
- Mints and manages NFT souvenirs on **Base Sepolia** during prototyping, with a clear path to ship on **Base mainnet** and other **EVM-compatible** chains as needed.

### Technology

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- thirdweb (EVM wallet + contract integrations)
- Vercel deployment

### How we build (quality + workflow)

- We ship small, production-safe changes with strong runtime compatibility (Node 24 / Vercel).
- We keep dependency upgrades controlled (monthly safe updates, quarterly major reviews) and always verify with audit/lint/build.
- We treat this repo as a documented artifact of cross-country and cross-organization collaboration:
  - Government partners: Ministry of Culture, Ministry of Religious Affairs, Ministry of Small and Medium Enterprises
  - Venue partners: Istiqlal Mosque management
  - Private sector: Voyage Global + Bukhari Creative Group
  - Community partners: Movement to Create Cultural Development Areas
  - Builders: Prof. NOTA Inc. (0101 Universe)

## 📜 License

This project is licensed under a [**Custom Limited License**](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/).

> 📩 For permission or inquiries, contact: [nota@endhonesa.com](mailto:nota@endhonesa.com)

## Usage

### Install dependencies

```bash
yarn install
```

### Review dependency updates (interactive)

```bash
yarn up -i
```

### Upgrade dependencies

```bash
yarn up -R "*"
```

### Start development server

```bash
yarn dev
```

### Check all the code

```bash
yarn lint
```

### Create a production build

```bash
yarn build
```

### Preview the production build

```bash
yarn start
```

## Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)

## Join Prof. NOTA Discord

For questions or suggestions, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Current Baseline (Jan 2026)

- Runtime: Node **24.x** (Vercel-compatible; see `.nvmrc` and `package.json#engines`)
- Package manager: Yarn **4.12.0** (lockfile: `yarn.lock`)
- Types: `@types/node` **24.10.7** (pinned to match Node 24; 25.x intentionally deferred)
- Key packages: Next.js **16.1.4**, React **19.2.3**, thirdweb **5.118.0**, framer-motion **12.29.0**

### Monthly Evergreen Cycle (safe)

- `yarn install`
- `yarn up -R "*"`
- `yarn npm audit --severity moderate`
- `yarn lint`
- `yarn build`

### Quarterly Evergreen Cycle (major review)

- Review majors one at a time (framework/tooling), with a dedicated PR.
- If `@types/node` gets bumped, repin to **24.10.7**, then re-run audit/lint/build.

### Notes

- Yarn may report peer dependency warnings; treat as non-blocking unless they break lint/build/runtime.
- Deploy target: **Vercel auto-deploy from `main`**
