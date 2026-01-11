# PABRIK ROTI [![version](https://img.shields.io/badge/version-1.3.3.1-blue)](https://github.com/myreceiptt/pabrikroti-bukhari/releases/tag/v.1.3.3.1)

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **Yarn** (lockfile: `yarn.lock`)
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~
  - ~~NPM (lockfile: `package-lock.json`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `yarn outdated`
   - ~~pnpm outdated~~
   - ~~npm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `yarn upgrade`
   - ~~pnpm update~~
   - ~~npm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `yarn audit --level moderate`
   - ~~pnpm audit~~
   - ~~npm audit~~
   - `yarn build`
   - ~~pnpm build~~
   - ~~npm run build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version

---

---

## PABRIK ROTI v.1.3.3.1: Staging MeMoRa of Voyage.Co.Id by Bukhari Creative Group

Link #1: [galeri.harmoniistiqlal.com](https://galeri.harmoniistiqlal.com/)  
Link #2: [bukhari.voyage.co.id](https://bukhari.voyage.co.id/)  
Link #3: [bukhari.endhonesa.com](https://bukhari.endhonesa.com/)

🧬 Forked from [PABRIKROTI-MASTER](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.1.3.3-bukhari)

## 📜 License

This project is licensed under a [**Custom Limited License**](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/).

> 📩 For permission or inquiries, contact: [nota@endhonesa.com](mailto:nota@endhonesa.com)

## Usage

### Install dependencies

```bash
yarn
```

### Check outdated dependencies

```bash
yarn up -i
```

### Upgrade dependencies interactively

```bash
yarn up -i
```

### Start development server

```bash
yarn dev
```

### Check all the code

```bash
yarn run lint
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
