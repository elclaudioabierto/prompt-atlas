# Prompt Atlas

A read-only prompt library built with Next.js and Tailwind CSS. Browse by category or tag, search, view a full snippet, and copy it. The card effect is adapted from [React Bits SpotlightCard](https://reactbits.dev/components/spotlight-card).

## Manage the library

Edit `data/prompts.json`, the single source of truth. Each prompt has a unique `id`, `title`, `description`, `content`, `category`, and an array of `tags`. Changes appear after rebuilding and redeploying. No database or environment variables are needed.

## Run and deploy

Run `npm install` and `npm run dev`, then open http://localhost:3000. Run `npm run build` to check the production build. Deploy to Vercel with `vercel deploy --prod`.

The GitHub Actions workflow deploys `main` to GitHub Pages when Pages is configured to use GitHub Actions. It builds the site with the `/prompt-atlas` base path.
