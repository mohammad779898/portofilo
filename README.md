# Deanj Portfolio – Next.js

Modern dark portfolio for **Deanj** (deanj7798@gmail.com).

Built with **Next.js (App Router)** + Tailwind CSS.  
Contact form sends email via **Resend** (free tier). Ready to deploy on **Vercel for free**.

## Features

- Clean single-page portfolio (Hero, About, Skills, Projects, Contact)
- Skills: Flutter, Next.js, Django, Python, React, Node.js…
- Working contact form → email
- Fully responsive + dark theme
- Zero paid services required

## Quick Start

```bash
cd deanj-portfolio
npm install
cp .env.example .env.local
# add your Resend API key
npm run dev
```

Open http://localhost:3000

## Free email setup (Resend)

1. Go to [https://resend.com](https://resend.com) and create a free account.
2. Create an API Key.
3. Put it in `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=deanj7798@gmail.com
```

That’s it. On the free plan you get 3,000 emails per month — more than enough for a portfolio.

> For production you can later verify your own domain so the “from” address looks professional.

## Deploy free on Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. In **Environment Variables** add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional)
4. Click **Deploy**.

Your site will be live on a free `*.vercel.app` domain (you can add a custom domain later).

## Project Structure

```
src/
  app/
    page.js              # Portfolio UI
    layout.js
    globals.css
    api/
      contact/
        route.js         # Sends email with Resend
```

## Customize

- Edit name, email, skills, projects → `src/app/page.js`
- Colors → Tailwind classes or `globals.css`

## License

MIT
