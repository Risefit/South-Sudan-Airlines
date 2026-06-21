# Deploy — South Sudan Airlines

Repo: **https://github.com/Risefit/South-Sudan-Airlines**

The website files live in this folder on your Mac. Push them to GitHub once, then
connect Vercel — after that every `git push` auto-deploys.

---

## 1. Push the code to GitHub (run on your Mac)

Open **Terminal** (or the terminal in VS Code on your Mac — *not* the Codespace),
then paste this block. It wipes the half-made repo from earlier and starts clean.

```bash
cd ~/Claude/Projects/"SS Airline Website"

rm -rf .git
git init
git add -A
git commit -m "Initial commit: South Sudan Airlines website"
git branch -M main
git remote add origin https://github.com/Risefit/South-Sudan-Airlines.git
git push -u origin main --force
```

Notes:
- `--force` is safe here — the only thing on GitHub right now is the auto-generated
  README placeholder, which this replaces with the project's real README.
- When prompted to log in: use a **Personal Access Token** as the password
  (GitHub → Settings → Developer settings → Personal access tokens), **or** install
  **GitHub Desktop** / run `gh auth login` to handle auth for you.

## 2. Connect Vercel (one time)

1. Go to **https://vercel.com** and sign in with GitHub.
2. **Add New → Project**.
3. **Import** `Risefit/South-Sudan-Airlines`.
4. Framework is auto-detected as **Next.js** — no settings to change.
5. Click **Deploy**.

You get a live `*.vercel.app` URL in ~1–2 minutes. (Add the `ssairlines.com` domain
later under the project's **Domains** tab.)

## 3. From now on — automatic

```bash
# make edits, then:
git add -A
git commit -m "describe your change"
git push
```

- Push to `main` → **production** deploy.
- Push any other branch / open a PR → **preview URL** built automatically.

## Using the Codespace (optional)

The Codespace was created empty. After step 1, open its terminal and run:

```bash
git pull origin main
```

…and all the files appear. Then `pnpm install && pnpm dev` to run it there.

---

### If the push is rejected
That means GitHub still has the README commit and you skipped `--force`. Re-run just:
```bash
git push -u origin main --force
```
