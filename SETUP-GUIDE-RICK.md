# Rick Vianen Website — How Everything Works

Hi Rick! This guide explains how the website is set up, how it goes live, and how you can make changes yourself.

---

## How the website is hosted

Your website is connected like a chain:

```
Your code lives on GitHub → Netlify watches GitHub → Website goes live
```

- **GitHub** stores all the website files. Think of it like a shared folder in the cloud, but for code. Every change is tracked — who changed what, and when.
- **Netlify** is the hosting. It watches GitHub. Every time something changes, Netlify automatically rebuilds and publishes the website within about 1 minute. You don't need to press any buttons.

### About the Netlify account

We've put the hosting on the **tools@iwb.agency** account, because Netlify is free for this type of website. For now this is the best setup because you won't need to do anything inside Netlify — it just works automatically in the background.

We can change this to your own Netlify account later, but that would require a completely new GitHub setup. We don't recommend this unless there's a strong reason.

---

## How changes go live

Nothing goes live without someone approving it. Here's the process:

```
1. Someone makes changes to the website (you, Martin, or anyone on the team)

2. The changes get pushed to GitHub as a "Pull Request"
   (= a proposal, NOT live yet)

3. Someone reviews and clicks "Merge" on GitHub
   (= approve the changes)

4. Netlify sees the update, rebuilds the site automatically

5. Website is live with the new changes (~1 minute)
```

**The key point**: the Pull Request is your safety net. You can always review what changed before it goes live.

---

## How to set up your computer (one-time setup)

You only need to do this once. After that, you're ready to make changes whenever you want.

### What you need

- A Windows computer
- Your GitHub account (you already have one)
- A Claude account with a Pro or Max subscription (for Claude Code)

### Step 1: Install Node.js

1. Go to **https://nodejs.org**
2. Download the **LTS** version (the big green button)
3. Run the installer — click Next through everything, keep all defaults
4. When it finishes, restart your computer

### Step 2: Open the terminal

On Windows, use **PowerShell**:
- Press the **Windows key**, type **PowerShell**, click on it

All the commands below go into this PowerShell window.

### Step 3: Install Git and GitHub CLI

Run these two commands in PowerShell, one by one:

```
winget install Git.Git
winget install GitHub.cli
```

After both finish, **close PowerShell and open it again** (so it recognizes the new tools).

### Step 4: Connect to GitHub

Run this in PowerShell:

```
gh auth login
```

It will ask you a few questions:
1. **Where do you use GitHub?** → choose `GitHub.com`
2. **How would you like to authenticate?** → choose `Login with a web browser`
3. It shows a code and opens your browser
4. Log into GitHub with your **Gmail account**
5. Paste the code when asked
6. Done — your computer is now connected to GitHub

### Step 5: Install Claude Code

Still in PowerShell, run:

```
npm install -g @anthropic-ai/claude-code
```

Claude Code is the tool that lets you make changes to the website by just typing what you want in plain language (like chatting). It handles all the technical stuff for you.

The first time you run it, it will ask you to log in with your **Claude account**.

### Step 6: Download the website project

Still in PowerShell, run:

```
git clone https://github.com/iwbtools-a11y/rick-vianen.git
```

This downloads the entire website to your computer in a folder called `rick-vianen`.

### Step 7: Verify everything works

Run these commands one by one:

```
cd rick-vianen
npm install
npm run dev
```

Open your browser and go to **http://localhost:3000** — you should see the website running on your own computer. Press Ctrl+C in PowerShell to stop it when you're done looking.

---

## How to make changes

Once you're set up, this is your daily workflow.

### Open the project

Open PowerShell and run:

```
cd rick-vianen
claude
```

This opens Claude Code inside the project.

### Tell Claude what to change

Just type what you want in plain language. For example:

```
Change the price from 2497 to 2997 on the pricing page
```

```
Add a new blog post about recovery after training
```

```
Change Rick's phone number to 06-12345678
```

Claude will make the changes for you. You can ask it to show you what changed, or test the website locally first.

### Put the changes live

When you're happy with the changes, type:

```
Create a pull request with these changes
```

Claude will push everything to GitHub and create a Pull Request. Then:

1. Go to GitHub (github.com) — you'll see a notification
2. Open the Pull Request
3. Review what changed
4. Click **"Merge pull request"** if it looks good
5. Netlify rebuilds automatically — live in ~1 minute

---

## Costs

| What | Cost |
|------|------|
| GitHub | Free |
| Netlify hosting | Free |
| Git, Node.js | Free |
| Claude Code (the tool) | Free to install |
| Claude account (needed for Claude Code to work) | Pro $20/month or Max $100/month |

The Claude subscription is the only real cost. If you only make small changes occasionally, it might be more practical to just ask Martin to handle changes for you — no subscription needed.

---

## Quick reference

| Task | Command |
|------|---------|
| Open the project | `cd rick-vianen` then `claude` |
| Run website locally | `cd rick-vianen` then `npm run dev` then open localhost:3000 |
| Stop local website | Press `Ctrl + C` in PowerShell |
| Update your local copy (get latest changes from others) | `cd rick-vianen` then `git pull` |

---

## Questions?

If anything is unclear or doesn't work, just reach out to Martin. He can help you troubleshoot or make the changes for you.
