# Make Developers — A Day at Home

A React, TypeScript, and Vite website.

## Local development

Use Node.js 24.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

Import `Jackjack80085/Make-home` into Vercel and select the `main` branch.
Use the Vite framework preset, the repository root, `npm run build` as the build
command, and `dist` as the output directory. These settings are included in
`vercel.json`. Select Node.js 24 in the project settings.

Documentation: https://vercel.com/docs/frameworks/frontend/vite

No environment variables are needed by the current frontend. The included
`.env.example` contains placeholders from the original AI Studio export.

The enquiry form currently validates inputs and displays a confirmation locally;
it does not send or save enquiries. Connect a backend or form service before
using it to collect real enquiries.
