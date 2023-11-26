This is a [Next.js](https://nextjs.org/) 14.x project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Live demo: [https://flowbite-next-starter.vercel.app/](https://flowbite-next-starter.vercel.app/)

It also includes:

- [x] [`flowbite`](https://flowbite.com)
- [x] [`flowbite-react`](https://flowbite-react.com)
- [x] [`react-icons`](https://react-icons.github.io/react-icons)
- [x] [`tailwindcss`](https://tailwindcss.com)
- [x] Quality of life tools, like
  - [x] [`eslint`](https://eslint.org) with some plugins
  - [x] [`prettier`](https://prettier.io) with some plugins
  - [x] [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)

## Getting started

`Next.js` requires [`Node.js`](https://nodejs.org).

Install the dependencies:

```bash
npm i
```

Now you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(dashboard)/content.tsx`. The page auto-updates as you edit the file.

## Add `flowbite-react` to `next` on your own

Follow these steps to add `flowbite-react` to a `next` project without cloning this repo.

### Requirements

- [x] [Node.js](https://nodejs.org/en/)

### How-to

#### Create a new `next` starter project:

```sh
npx create-next-app@latest --typescript
cd my-app
```

#### Install `tailwindcss` and `flowbite-react`:

```sh
npm i --save-dev autoprefixer postcss
npm i --save tailwindcss flowbite-react
```

#### Create `postcss.config.cjs`:

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};
```

#### Create `tailwind.config.ts`:

```js
import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./node_modules/flowbite-react/lib/**/*.js"],
  plugins: [flowbite],
};

export default config;
```

#### And replace the contents of `app/globals.css` by:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Start using `flowbite-react` inside any `app/**/page.tsx`!

```js
"use client";

import { Alert } from "flowbite-react";

export default function MyPage() {
  return <Alert color="info">Alert!</Alert>;
}
```

## Learn more

### About `flowbite`

[Flowbite](https://flowbite.com) is an open source collection of UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites.

In this repository, we setup [`flowbite-react`](https://flowbite-react.com) for you with examples of how to use the React components in `app/(dashboard)/content.tsx`.

### About `next`

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on `vercel`

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
