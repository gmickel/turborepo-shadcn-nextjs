# A Turborepo starter template with Next.js, Nextra, and a shared pre-configured shadcn/ui package, powered by Bun, Vitest, Playwright and Biome 🚀

![Static Badge](https://img.shields.io/badge/shadcn%2Fui-0.8.0-blue?link=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui)
[![CI](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/gmickel/turborepo-shadcn-nextjs/badge.svg)](https://snyk.io/test/github/gmickel/turborepo-shadcn-nextjs)
[![License](https://img.shields.io/github/license/gmickel/turborepo-shadcn-nextjs.svg)](https://github.com/gmickel/turborepo-shadcn-nextjs/blob/main/LICENSE)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?&logo=bun&logoColor=white)

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

- `@repo/docs`: a placeholder documentation site powered by [Nextra 3 alpha](https://the-guild.dev/blog/nextra-3) 📚
- `@repo/web`: the main [Next.js](https://nextjs.org/) web application 🌐
- `@repo/ui`: core React components and design system shared by both `web` and `docs` applications (🚀 powered by **shadcn/ui**)
- `@repo/utils`: shared React utilities 🛠️
- `@repo/tsconfig`: shared `tsconfig.json`s used throughout the monorepo 🛡️

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). 💪

### Utilities 🧰

This Turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking ✅
- [Biome](https://biomejs.dev/) for code linting, formatting, and fixing 🌿
- [Vitest](https://vitest.dev/) for unit tests 🧪
- [Playwright](https://playwright.dev/) for end-to-end tests 🧪
- [Changesets](https://github.com/changesets/changesets) for managing versioning, changelogs, and publishing 📝

### Useful commands 🤖

- `bun build` - Build all apps and packages
- `bun dev` - Develop all apps and packages
- `bun dev:ui` - Develop all apps and packages and display the output in Turbo's new experimental UI
- `bun test` - Run all tests with vitest
- `bun test:cov` - Run all unit tests with vitest and generate a coverage report
- `bun test:cov:ui` - Run all unit tests with vitest and display the vitest UI
- `bun test:e2e` - Run all end-to-end tests with playwright
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

### CI 🤖

[![CI](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml)

This Turborepo uses [GitHub Actions](https://github.com/features/actions) for CI. 🤖

It comes preconfigured with the following workflow that runs on every push or pull request to the `main` branch:

1. **Setup**: Checks out the code and sets up Bun.
2. **Install**: Installs all dependencies using Bun.
3. **Build**: Builds all apps and packages in the monorepo.
4. **Unit Tests**: Runs all unit tests using [Vitest](https://vitest.dev/).
5. **E2E Tests**: Installs Playwright browsers and runs end-to-end tests using [Playwright](https://playwright.dev/).
6. **Lint**: Performs linting and formatting checks using [Biome](https://biomejs.dev/).

### Automated Dependency Management & Contributor Recognition 🤖

This template includes some useful automation tools:

#### 1. Dependabot Configuration 🔄

Keeps dependencies up-to-date automatically with daily checks and update rules.

[View Dependabot Config](.github/dependabot.yml)

#### 2. Auto-merge for Dependabot PRs 🔀

Can automatically merges patch updates from Dependabot to reduce manual work.

[View Auto-merge Workflow](.github/workflows/auto-merge-dependabot.yml)

For the auto-merge workflow:

- Go to your repository's Settings > Actions > General.
- Under "Workflow permissions", select "Read and write permissions".
- Check "Allow GitHub Actions to create and approve pull requests".
- Save the changes.
- Optionally, create a Personal Access Token (PAT) with `repo` scope and add it as a repository secret named `GITHUB_TOKEN` for enhanced security.

#### 3. Automated Contributors List 👥

Maintains an up-to-date list of contributors in your README.

[View Contributors Workflow](.github/workflows/contributors.yml)

### 🚀 Getting Started

1. Dependabot is active out-of-the-box. Review and adjust the config as needed.
2. Ensure proper permissions for the auto-merge workflow.
3. To read more about the contributors list, see the [contributors-readme-action](https://github.com/akhilmhdh/contributors-readme-action) README.

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

Learn more about Playwright:

- [Documentation](https://playwright.dev/docs/intro)

Learn more about Vitest:

- [Documentation](https://vitest.dev/guide/)

## Contributors 👨‍💻

<!-- readme: collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/gmickel">
                    <img src="https://avatars.githubusercontent.com/u/139907?v=4" width="100;" alt="gmickel"/>
                    <br />
                    <sub><b>Gordon Mickel</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: collaborators,contributors -end -->
