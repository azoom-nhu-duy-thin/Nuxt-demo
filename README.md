# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### ====================================================== ###
 > add config
    alias: {
        '@' : resolve(__dirname, '')
    },

1. Create folder assets > create file main.scss
2. npm i sass
3. file nuxt.config.ts
    > add config
        css: ['~/assets/main.scss']
4. Setup tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
    > file `nuxt.config.ts` add config:
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
