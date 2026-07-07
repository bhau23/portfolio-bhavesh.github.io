# Micro-API for bhaveshai.in (BHAV.AI chat + enquiry emails)

This folder is a tiny standalone backend that keeps ALL secrets server-side:
the Gemini API key, your Gmail app password, and even the chatbot's system
prompt (so nobody can read it from the website's JavaScript).

- `api/chat.js` — secure Gemini proxy with prompt-injection blocking,
  CORS locked to bhaveshai.in, message limits and rate limiting.
- `api/enquiry.js` — sends you a black/crimson themed HTML email for every
  enquiry (chatbot bookings AND the contact form), directly via Gmail SMTP.

## Deploy (one time, ~5 minutes)

1. Go to https://vercel.com/new → Import your GitHub repo
   `bhau23/portfolio-bhavesh.github.io`.
2. In the import screen set **Root Directory** → `server`
   (Framework preset: "Other"). Deploy.
3. Project → **Settings → Environment Variables**, add these four:

   | Name                 | Value                                          |
   |----------------------|------------------------------------------------|
   | `GEMINI_API_KEY`     | your key from https://aistudio.google.com/apikey |
   | `GMAIL_USER`         | `yobhauk@gmail.com`                            |
   | `GMAIL_APP_PASSWORD` | 16-char app password (see below)               |
   | `NOTIFY_EMAIL`       | `yobhauk@gmail.com`                            |

4. Redeploy (Deployments → ⋯ → Redeploy) so the env vars take effect.
5. Copy your project URL (e.g. `https://something.vercel.app`) and paste it:
   - locally: in `.env.local` → `NEXT_PUBLIC_API_BASE="..."`
   - for the live site: repo Settings → Secrets and variables → Actions →
     **Variables** tab → new variable `API_BASE` with the same URL.
     (Or simply name the Vercel project `bhavesh-portfolio-api` and the
     default in `lib/chatbot.ts` already matches.)

## Gmail app password

Google Account → Security → 2-Step Verification (must be ON) →
App passwords → create one for "Mail". It's a 16-character code.
It only ever lives in Vercel — never in the repo, never in the browser.

## Test

```
curl -X POST https://YOUR-PROJECT.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"messages\":[{\"role\":\"user\",\"text\":\"hi\"}]}"
```
