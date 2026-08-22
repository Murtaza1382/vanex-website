# JeyhunTech Website

A [Next.js](https://nextjs.org) (App Router) project using **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

> 👉 **New to the project?** Read the [Developer Guide](./DEVELOPER_GUIDE.md) for
> how to add routes, pages, components, and features — plus the **required Git
> workflow** (branching, rebasing, and Pull Requests).

Other scripts:

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # eslint
```

## Project structure

```text
src/
├── app/                      # Routing (App Router). Folders = URL segments.
│   ├── layout.tsx            # Root layout: <html>/<body>, header + footer
│   ├── globals.css           # Tailwind v4 + design tokens (light/dark)
│   ├── loading.tsx           # Global loading UI (Suspense fallback)
│   ├── error.tsx             # Global error boundary (Client Component)
│   ├── not-found.tsx         # 404 page
│   ├── page.tsx              # "/"        Home
│   ├── about/page.tsx        # "/about"   Static Server Component
│   ├── contact/page.tsx      # "/contact" Uses the contact feature
│   └── api/
│       └── health/route.ts   # "/api/health" Route Handler (REST endpoint)
│
├── components/
│   ├── ui/                   # shadcn/ui primitives (button, card, input, ...)
│   └── layout/               # App-specific composite UI (header, footer)
│
├── features/                 # Self-contained feature modules
│   └── contact/
│       ├── components/        # Feature UI (contact-form.tsx)
│       ├── actions.ts         # Server Action (form submission)
│       └── schema.ts          # Validation + types
│
├── hooks/                    # Reusable client hooks (use-media-query.ts)
├── lib/                      # Framework-agnostic helpers (utils.ts, api.ts)
├── config/                   # Static config (site.ts)
└── types/                    # Shared TypeScript types (index.ts)
```

### Why this structure

- **`app/`** is routing only. Each folder is a URL segment; `page.tsx` makes a
  route public, `layout.tsx` wraps it. Route Groups `(name)` organize files
  without affecting the URL.
- **`components/ui`** holds generic, reusable primitives (managed by shadcn);
  **`components/layout`** holds app-specific composite pieces.
- **`features/`** keeps a feature's UI, server logic, and types together so it
  stays easy to find, change, and delete.
- **`lib/`, `hooks/`, `config/`, `types/`** are shared, cross-cutting code.

## Adding more shadcn/ui components

```bash
npx shadcn@latest add dialog dropdown-menu sonner
```

Components are copied into `src/components/ui` and use the `cn()` helper in
`src/lib/utils.ts` plus the design tokens in `src/app/globals.css`.
