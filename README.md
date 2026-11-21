# Agency website (Next.js + Tailwind)

## Run locally
    npm install
    cp .env.local.example .env.local   # add your Formspree endpoint
    npm run dev                        # http://localhost:3000

## Edit content
All text lives in `lib/content.js`. Replace the [placeholders] (agency name, email,
founders, demo videos). Colors are in `tailwind.config.js` (Trusted Navy palette).

## Deploy
Push to GitHub, import the repo in Vercel (free tier), and add NEXT_PUBLIC_FORM_URL
in the project's environment variables.

## Next steps
- Add demo videos: put files in `public/` and set `video: "/demo1.mp4"` in `lib/content.js`
- Add shadcn/ui or Motion later if you want richer components or animation
