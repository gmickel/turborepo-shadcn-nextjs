# 🚀 Turborepo Starter with Next.js, Nextra, and shadcn/ui

![Static Badge](https://img.shields.io/badge/shadcn%2Fui-0.8.0-blue?link=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui)

[![CI](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml/badge.svg)](https://github.com/gmickel/turborepo-shadcn-nextjs/actions/workflows/ci.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/gmickel/turborepo-shadcn-nextjs/badge.svg)](https://snyk.io/test/github/gmickel/turborepo-shadcn-nextjs)
[![License](https://img.shields.io/github/license/gmickel/turborepo-shadcn-nextjs.svg)](https://github.com/gmickel/turborepo-shadcn-nextjs/blob/main/LICENSE)

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?&logo=bun&logoColor=white)

A powerful monorepo starter template featuring Next.js, Nextra, and a shared pre-configured shadcn/ui package, powered by Bun, Vitest, Playwright, Storybook, and Biome.

* [🌟 Features](#-features)
* [🚀 Quick Start](#-quick-start)
* [📦 What's Inside?](#-whats-inside)
* [🛠️ Useful Commands](#️-useful-commands)
* [🧰 Development Tools](#-development-tools)
* [🚀 Deployment](#-deployment)
* [🔗 Useful Links](#-useful-links)
* [👥 Contributors](#-contributors)

## 🌟 Features

* 📦 Monorepo structure with Turborepo for efficient build system and caching
* ⚡ Next.js for fast, server-side rendered React applications
* 📚 Nextra for easy-to-create documentation sites
* 🎨 shadcn/ui for beautiful, customizable UI components
* 🐰 Bun as a fast, all-in-one JavaScript runtime
* 🧪 Vitest for speedy unit testing
* 🎭 Playwright for reliable end-to-end testing
* 📖 Storybook for isolated component development and documentation
* 🌿 Biome for fast, opinionated linting and formatting
* 🔄 Automated dependency management with Dependabot
* 👥 Automated contributor recognition
* 🚀 CI/CD setup with GitHub Actions

## 🚀 Quick Start

```sh
# Clone the repository
git clone https://github.com/gmickel/turborepo-shadcn-nextjs.git

# Navigate to the project directory
cd turborepo-shadcn-nextjs

# Install dependencies
bun install

# Start development server
bun dev
```

### Add UI Components

```sh
bun ui:add:component <component-name>
```

> This works just like the add command in the `shadcn/ui` CLI. 🎨

## What's inside? 📦

```mermaid
graph TD
    A[Turborepo] --> B[Apps]
    A --> C[Packages]
    B --> D[@repo/docs]
    B --> E[@repo/web]
    B --> F[@repo/storybook]
    C --> G[@repo/ui]
    C --> H[@repo/utils]
    C --> I[@repo/tsconfig]
```

| App/Package | Description |
|-------------|-------------|
| `@repo/docs` | Documentation site powered by [Nextra 3 alpha](https://the-guild.dev/blog/nextra-3) 📖 |
| `@repo/web` | Main Next.js web application 🌐 |
| `@repo/ui` | Core React components and design system shared by both `web` and `docs` applications (powered by shadcn/ui) 🎨 |
| `@repo/utils` | Shared React utilities 🛠️ |
| `@repo/tsconfig` | Shared `tsconfig.json` configurations 🛡️ |

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). 💪

### Utilities 🧰

This Turborepo has some additional tools already set up for you:

* [TypeScript](https://www.typescriptlang.org/) for static type checking ✅
* [Biome](https://biomejs.dev/) for code linting, formatting, and fixing 🌿
* [Vitest](https://vitest.dev/) for unit tests 🧪
* [Playwright](https://playwright.dev/) for end-to-end tests 🧪
* [Changesets](https://github.com/changesets/changesets) for managing versioning, changelogs, and publishing 📝
* [Storybook](https://storybook.js.org/) for component development and documentation 📚

### Storybook 📚

This Turborepo includes Storybook for component development and documentation. Storybook is set up for both the `@repo/web` and `@repo/ui` packages, allowing the development and showcasing of components from both your main application and your shared UI library.

To run Storybook:

```sh
bun storybook
```

This will start Storybook and open it in your default browser.

#### Story Location

Storybook is configured to find stories in the following locations:

* `apps/storybook/src/**/*.mdx`
* `apps/storybook/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
* `apps/web/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
* `packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`

This configuration allows you to write stories for components in both your web application and your shared UI library.

#### Storybook Addons

This setup includes several useful Storybook addons:

* `@storybook/addon-links`: For linking between stories
* `@storybook/addon-essentials`: A curated set of addons for a great developer experience
* `@storybook/addon-onboarding`: For onboarding new users
* `@storybook/addon-interactions`: For testing component interactions
* `@storybook/addon-themes`: For theme switching in Storybook
* `@storybook/addon-styling-webpack`: For handling CSS and PostCSS in Storybook

### Useful commands 🤖

* `bun build` - Build all apps and packages
* `bun dev` - Develop all apps and packages
* `bun dev:ui` - Develop all apps and packages and display the output in Turbo's new experimental UI
* `bun test` - Run all tests with vitest
* `bun test:cov` - Run all unit tests with vitest and generate a coverage report
* `bun test:cov:ui` - Run all unit tests with vitest and display the vitest UI
* `bun test:e2e` - Run all end-to-end tests with playwright
* `bun lint` - Lint and format all packages
* `bun lint:fix` - Lint, format, and fix all packages
* `bun changeset` - Generate a changeset 🧑‍🔧 - WIP
* `bun clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
* `bun ui:add:component` - Add a shadcn/ui component to the `@repo/ui` package
* `bun storybook` - Run Storybook for component development and documentation

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

> [! NOTE]
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

* Go to your repository's Settings > Actions > General.
* Under "Workflow permissions", select "Read and write permissions".
* Check "Allow GitHub Actions to create and approve pull requests".
* Save the changes.
* Optionally, create a Personal Access Token (PAT) with `repo` scope and add it as a repository secret named `GITHUB_TOKEN` for enhanced security.

#### 3. Automated Contributors List 🙌

Maintains an up-to-date list of contributors in your README.

[View Contributors Workflow](.github/workflows/contributors.yml)

### 🚀 Getting Started

1. Dependabot is active out-of-the-box. Review and adjust the config as needed.
2. Ensure proper permissions for the auto-merge workflow.
3. To read more about the contributors list, see the [contributors-readme-action](https://github.com/akhilmhdh/contributors-readme-action) README.

## Versioning and Publishing packages 📦

🧑‍🔧 WIP

For more information, refer to the official [Changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md).

## Deployment 🚀

This Turborepo is set up for easy deployment of its various applications.

### Vercel Deployment 🌐

The `docs` and `web` apps can be deployed to Vercel without any additional configuration. This allows for quick and easy deployment of your Next.js applications.

#### Test Deployments

You can view the test deployments for these apps:

* `apps/web`: [https://turborepo-shadcn-nextjs-web.vercel.app/](https://turborepo-shadcn-nextjs-web.vercel.app/)
* `apps/docs`: [https://turborepo-shadcn-nextjs-docs.vercel.app/](https://turborepo-shadcn-nextjs-docs.vercel.app/)

### Storybook Deployment 📚

The `apps/storybook` is automatically deployed to GitHub Pages using a custom workflow.

* **Workflow File**: You can find the deployment workflow at `.github/workflows/storybook-deploy.yml`
* **Deployment URL**: The deployed Storybook can be accessed at [https://gmickel.github.io/turborepo-shadcn-nextjs/](https://gmickel.github.io/turborepo-shadcn-nextjs/)

## Useful Links and Thanks 🙏

### Build Tools and Configuration

* [Turborepo Documentation](https://turbo.build/repo/docs)
  + [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
  + [Caching](https://turbo.build/repo/docs/core-concepts/caching)
  + [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
  + [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
  + [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
  + [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
* [Bun Documentation](https://bun.sh/docs)
* [Biome Documentation](https://biomejs.dev/guides/getting-started/)

### Frameworks and Libraries

* [Next.js Documentation](https://nextjs.org/docs)
* [Nextra Documentation](https://nextra.site/docs)
* [shadcn/ui Documentation](https://ui.shadcn.com/docs)

### Testing Tools

* [Vitest Documentation](https://vitest.dev/guide/)
* [Playwright Documentation](https://playwright.dev/docs/intro)

### Development Tools

* [Storybook Documentation](https://storybook.js.org/docs)
* [Changesets Documentation](https://github.com/changesets/changesets)

## Contributors 👨‍💻

<!-- readme: collaborators, contributors -start -->
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
<!-- readme: collaborators, contributors -end -->
