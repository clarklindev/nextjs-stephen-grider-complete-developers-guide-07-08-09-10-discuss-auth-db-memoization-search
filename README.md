# section 07 Authentication

<img
src='exercise_files/59-project-overview.png'
alt='59-project-overview.png'
width=600
/>

## 59. project overview
    - reddit clone
    - authentication
    - topics
    - comments

- Home

<img
src='exercise_files/59-1-home.png'
alt='59-1-home.png'
width=600
/>

- create a topic

<img
src='exercise_files/59-2-create-a-topic.png'
alt='59-2-create-a-topic.png'
width=600
/>

- view topic

<img
src='exercise_files/59-3-view-topic.png'
alt='59-3-view-topic.png'
width=600
/>

- create a post

<img
src='exercise_files/59-4-create-a-post.png'
alt='59-4-create-a-post.png'
width=600
/>

- view a post

<img
src='exercise_files/59-5-view-a-post.png'
alt='59-5-view-a-post.png'
width=600
/>

## 60. npm libraries
- nextui
- prisma -> sqlite db
- next-auth -> authjs (renamed)
- github Oauth

## 61. nexui installation and setup
- package.json already has lib added from starter files
- framer-motion is required by nextui
- tailwind.config.ts

```ts
//...
import {nextui} from '@nextui-org/react';


export default {
  content: [
    //...
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;

```

```tsx
//src/app/providers.tsx
'use client';

import {NextUIProvider} from '@nextui-org/react';

interface ProvidersProps{
    children: React.ReactNode
}

export default function Providers({children}:ProvidersProps){
    return <NextUIProvider>{children}</NextUIProvider>
}
```
- then add to src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Providers from '@/app/providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}

```

## 63. database setup


```sh
npx prisma init --datasource-provider sqlite
```

### create schema
- this creates the schema `prisma/schema.prisma`

### replace schema
- replace with the given schema.prisma from lesson 62 (given)
- it has data models:

- model Account
- model Session
- model User
- model VerificationToken
- model Topic
- model Post
- model Comment

### create db
- call this to create the db
- note the .env variable -> DATABASE_URL="file:./dev.db"
- give migration a name eg. `init`

```sh
npx prisma migrate dev
```

- this puts a dev.db in `prisma/`
- create src/db/index.ts

```ts
//src/db/index.ts
import {PrismaClient} from '@prisma/client';

export const db = new PrismaClient();

```