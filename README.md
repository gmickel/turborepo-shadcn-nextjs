# A Turborepo starter template with Next.js, Nextra, and a shared pre-configured shadcn/ui package, powered by Bun and Biome 🚀

![Static Badge](https://img.shields.io/badge/shadcn%2Fui-0.8.0-blue?link=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui)

> [!NOTE]
> This repo uses `bun` as the package manager. 📦

## How to use 🛠️

Clone the repository:

```sh
git clone https://github.com/gmickel/turborepo-shadcn-nextjs.git
```

Install dependencies:

```sh
cd turborepo-shadcn-nextjs
bun install
```

### Add UI components ✨

Use the pre-made script:

```sh
bun ui:add:component <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI. 🎨

## What's inside? 🔍

This Turborepo includes the following:

### Apps and Packages 📂

- `@repo/docs`: a placeholder documentation site powered by [Nextra 3 alpha](https://nextra.site/) 📚
- `@repo/web`: the main [Next.js](https://nextjs.org/) web application 🌐
- `@repo/ui`: core React components and design system shared by both `web` and `docs` applications (🚀 powered by **shadcn/ui**)
- `@repo/utils`: shared React utilities 🛠️
- `@repo/tsconfig`: shared `tsconfig.json`s used throughout the monorepo 🛡️

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). 💪

### Utilities 🧰

This Turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking ✅
- [Biome](https://biomejs.dev/) for code linting, formatting, and fixing 🌿
- [Changesets](https://github.com/changesets/changesets) for managing versioning, changelogs, and publishing 📝

### Useful commands 🤖

- `bun build` - Build all apps and packages
- `bun dev` - Develop all apps and packages
- `bun dev:ui` - Develop all apps and packages and display the output in Turbo's new experimental UI
- `bun lint` - Lint and format all packages
- `bun lint:fix` - Lint, format, and fix all packages
- `bun changeset` - Generate a changeset 🚧 - WIP
- `bun clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `bun ui:add:component` - Add a shadcn/ui component to the `@repo/ui` package

### Add a new app or package 📦

Turborepo offers a simple command to add new apps or packages to the monorepo. To add a new app, run the following command:

```sh
bun turbo gen workspace [--name <app-name>]
```

You will be prompted to choose the name and workspace type (app or package) to use.

You can copy an existing app or package with:

```sh
bun turbo gen workspace [--name <app-name>] --copy
```

You will be prompted to choose the name and workspace type (app or package) of the new app and which app or package to copy.

> [!NOTE]
> Remember to run `bun install` after copying an app. ⚠️

## Versioning and Publishing packages 📦

🚧 WIP

For more information, refer to the official [Changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md).

## Useful Links and Thanks 🙏

Learn more about Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about Next.js:

- [Documentation](https://nextjs.org/docs)

Learn more about Nextra:

- [Documentation](https://nextra.site/docs)

Learn more about shadcn/ui:

- [Documentation](https://ui.shadcn.com/docs)

Learn more about Bun:

- [Documentation](https://bun.sh/docs)

Learn more about Biome:

- [Documentation](https://biomejs.dev/guides/getting-started/)

Learn more about Changesets:

- [Documentation](https://github.com/changesets/changesets)
