# Theme Preview — internal client tool

**URL:** `/theme-preview`  
**Purpose:** Let the client compare color palettes before committing to one.

## Deploy (Vercel)

1. Push this repo to GitHub
2. [vercel.com/new](https://vercel.com/new) → Import repo
3. Framework: Next.js (auto-detected)
4. Deploy — share `https://your-project.vercel.app/theme-preview`

No env vars required for the preview page.

## Delete later

Remove these paths (nothing else depends on them for the live site):

```
src/app/theme-preview/     ← entire folder
src/lib/themes.ts
```

The main site keeps using `:root` tokens in `globals.css` (current neon palette).

## Applying the chosen theme to production

Copy the `tokens` object from the chosen theme in `themes.ts` into `:root` in `src/app/globals.css`.
