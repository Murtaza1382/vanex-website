# Developer Guide

Welcome to the **vanex-website**. This guide is written for developers
joining the project. It covers three things:

1. [Getting started](#1-getting-started)
2. [Where to put your code](#2-where-to-put-your-code) (routes, pages, components, features)
3. [Git workflow](#3-git-workflow) — **read this carefully, it is mandatory**

---

## 1. Getting started

### Prerequisites

- **Node.js 20+** (Node 22 recommended)
- **pnpm** (comes with Node)
- **Git**

### Run the project locally

```bash
# 1. Clone the repo
git clone <repo-url>
cd vanex-website

# 2. Install dependencies
pnpm install

# 3. Copy environment variables and fill them in
cp .env.example .env.local

# 4. Start the dev server
pnpm dev
```

Open <http://localhost:3000>. The page hot-reloads as you edit files.

### Useful scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `pnpm dev`   | Start the development server          |
| `pnpm build` | Create a production build             |
| `pnpm start` | Run the production build locally      |
| `pnpm lint`  | Run ESLint                            |

Before opening a Pull Request, always run `pnpm build` and `pnpm lint`
locally and make sure both pass.

---

## 2. Where to put your code

This project uses the **Next.js App Router** with a `src/` directory. The golden
rule: **`src/app/` is for routing only. Everything reusable lives outside it.**

```text
src/
├── app/            # Routes only (folders = URL segments)
├── components/
│   ├── ui/         # Generic shadcn/ui primitives (button, card, ...)
│   └── layout/     # App-wide composite UI (header, footer)
├── features/       # Self-contained feature modules
├── hooks/          # Reusable client hooks
├── lib/            # Framework-agnostic helpers
├── config/         # Static config (site.ts)
└── types/          # Shared TypeScript types
```

### How to add a new page (route)

A folder inside `src/app/` becomes a URL segment, and a `page.tsx` file makes it
visible. To create `/pricing`:

```text
src/app/pricing/page.tsx   ->   https://yoursite.com/pricing
```

```tsx
// src/app/pricing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return <h1>Pricing</h1>;
}
```

Special files you can add inside any route folder:

| File           | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `page.tsx`     | The page UI (makes the route public)             |
| `layout.tsx`   | Shared wrapper for this segment and its children |
| `loading.tsx`  | Loading UI shown while data loads                |
| `error.tsx`    | Error boundary (must be a Client Component)      |
| `not-found.tsx`| 404 UI for this segment                          |

### How to add an API endpoint (Route Handler)

Create a `route.ts` file. To make `GET /api/users`:

```ts
// src/app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [], error: null });
}
```

### How to add a shared UI component

Generic, reusable pieces go in `src/components/`.

- shadcn/ui primitives → `src/components/ui/` (add them with the CLI):

  ```bash
  npx shadcn@latest add dialog dropdown-menu
  ```

- Your own app-wide components → `src/components/layout/` (or a new subfolder).

```tsx
// src/components/layout/page-heading.tsx
export function PageHeading({ title }: { title: string }) {
  return <h1 className="text-2xl font-bold tracking-tight">{title}</h1>;
}
```

Import shared code with the `@/` alias (maps to `src/`):

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
```

### How to add a feature (the recommended pattern)

When you build something with its own UI **and** logic (a form, a checkout flow,
a dashboard widget), keep it together in `src/features/<feature-name>/`. Look at
`src/features/contact/` as the reference example:

```text
src/features/contact/
├── components/         # UI used only by this feature
│   └── contact-form.tsx
├── actions.ts          # Server Actions (server-side logic)
└── schema.ts           # Validation + feature types
```

To create a new feature, e.g. `newsletter`:

```text
src/features/newsletter/
├── components/
│   └── subscribe-form.tsx
├── actions.ts
└── schema.ts
```

Then use it from a page:

```tsx
// src/app/newsletter/page.tsx
import { SubscribeForm } from "@/features/newsletter/components/subscribe-form";

export default function NewsletterPage() {
  return <SubscribeForm />;
}
```

**Why this pattern?** Everything a feature needs lives in one folder, so it is
easy to find, easy to change, and easy to delete without breaking the rest of the
app. Keep page files (`src/app/...`) thin — they should mostly import and arrange
components from `features/` and `components/`.

### Quick decision guide

| What you're building                    | Where it goes                          |
| --------------------------------------- | -------------------------------------- |
| A new URL / page                        | `src/app/<segment>/page.tsx`           |
| An API endpoint                         | `src/app/api/<name>/route.ts`          |
| A generic button/input/dialog           | `src/components/ui/`                    |
| A header/footer/sidebar                 | `src/components/layout/`               |
| A whole feature (UI + logic)            | `src/features/<feature>/`              |
| A reusable hook                         | `src/hooks/`                           |
| A helper function                       | `src/lib/`                             |
| App constants / nav / metadata          | `src/config/`                          |
| A type used in many places              | `src/types/`                           |

---

## 3. Git workflow

> We are standardizing the project's Git structure so development stays smooth
> and we avoid time-consuming conflicts at release time. The rules below are
> simple but **mandatory** — please follow all of them.

### Summary of the rules

#### 1. The `develop` branch

- The development branch is officially named **`develop`**.
- **All work branches from `develop`** from now on.
- `develop` is deployed to the **test / Vercel domain** and is meant for
  development and testing.

#### 2. No direct pushes

- ❌ **Never push code directly to `develop` or `main`.**
- For **every** task — small or large — create a separate branch from `develop`.
- Branch naming examples:
  - `feature/login-page`
  - `fix/header-bug`
  - `refactor/button-component`

#### 3. Rebase before every PR (very important)

- Before opening a Pull Request, **rebase your branch onto `develop`**.
- We do **not** want extra merge commits.
- **Conflicts must be resolved on your own machine**, not inside the PR.

#### 4. The standard workflow

```bash
# Start from an up-to-date develop
git checkout develop
git pull origin develop --rebase

# Create your task branch
git checkout -b feature/my-new-task

# ... write code and commit ...

# Before opening the PR, rebase onto the latest develop
git fetch origin
git rebase origin/develop      # <- resolve any conflicts locally here

# Push your branch
git push origin feature/my-new-task
```

Then open a **Pull Request into `develop`**.

#### 5. The `main` branch

- `main` is **only** for final releases — code that goes to the customer.
- Anything that reaches `main` must have come from `develop` first.
- **Hotfixes are not an exception**: after a hotfix, it must be merged back into
  `develop` as well, so the two branches never drift apart.

---

### Step-by-step, explained

#### Step 1 — Update `develop`

```bash
git checkout develop
git pull origin develop --rebase
```

Always start a new task from the latest `develop`.

#### Step 2 — Create a task branch

Pick a prefix that matches your work:

| Prefix      | Use it for                          | Example                       |
| ----------- | ----------------------------------- | ----------------------------- |
| `feature/`  | New functionality                   | `feature/user-profile`        |
| `fix/`      | Bug fixes                           | `fix/login-redirect`          |
| `refactor/` | Code cleanup, no behavior change    | `refactor/contact-form`       |
| `chore/`    | Tooling, config, dependencies       | `chore/update-deps`           |

```bash
git checkout -b feature/user-profile
```

#### Step 3 — Commit your work

Make small, focused commits with clear messages:

```bash
git add .
git commit -m "feat: add user profile page"
```

Suggested commit message prefixes: `feat:`, `fix:`, `refactor:`, `docs:`,
`style:`, `test:`, `chore:`.

#### Step 4 — Rebase onto the latest `develop`

This replays your commits on top of the newest `develop`, keeping history linear
and conflict-free for everyone else:

```bash
git fetch origin
git rebase origin/develop
```

If there are conflicts, Git pauses and lists the conflicted files. Fix them in
your editor, then:

```bash
git add <fixed-files>
git rebase --continue
```

Repeat until the rebase finishes. To abort and start over:

```bash
git rebase --abort
```

#### Step 5 — Push and open a PR

```bash
git push origin feature/user-profile
```

Then open a Pull Request **into `develop`** and request a review.

---

### Updating a PR after review (amend + force-push)

If you already opened a PR and then made small changes (for example, addressing
review comments), you can fold them into your existing commit instead of adding a
messy "fix review" commit:

```bash
# On the branch that created your PR, with new local changes:
git add .
git commit --amend --no-edit
git push --force
```

> ⚠️ Only `--force` push on **your own** task branch. **Never** force-push to
> `develop` or `main`.
>
> Tip: `git push --force-with-lease` is safer than `--force` — it refuses to
> overwrite work if someone else pushed to your branch in the meantime.

---

### Quick reference cheat sheet

```bash
# Start a new task
git checkout develop
git pull origin develop --rebase
git checkout -b feature/my-task

# Save work
git add .
git commit -m "feat: describe what you did"

# Sync with develop before the PR
git fetch origin
git rebase origin/develop
git push origin feature/my-task

# Update an existing PR
git add .
git commit --amend --no-edit
git push --force-with-lease
```

### Do / Don't

| ✅ Do                                          | ❌ Don't                                   |
| --------------------------------------------- | ----------------------------------------- |
| Branch from `develop` for every task          | Push directly to `develop` or `main`      |
| Rebase onto `develop` before the PR           | Create merge commits inside a PR          |
| Resolve conflicts locally                     | Leave conflicts for the PR/reviewer       |
| Use clear branch names and commit messages    | Force-push to shared branches             |
| Run `npm run build` & `npm run lint` first    | Open a PR that doesn't build              |

---

Questions about any of this? Ask the team before pushing — it's much easier to
fix things before they hit `develop`. Happy coding! 🚀
