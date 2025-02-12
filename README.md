# App

GymPass style app.

## RFs (Functional Requirements)

- [x] It should be possible to register;
- [x] It should be possible to authenticate;
- [x] It should be possible to get the profile of a logged-in user;
- [ ] It should be possible to get the number of check-ins made by the logged-in user;
- [x] It should be possible for the user to get their check-in history;
- [ ] It should be possible for the user to search for nearby gyms;
- [ ] It should be possible for the user to search for gyms by name;
- [x] It should be possible for the user to check-in at a gym;
- [ ] It should be possible to validate a user's check-in;
- [x] It should be possible to register a gym;

## RNs (Business Rules)

- [x] The user should not be able to register with a duplicate email;
- [x] The user cannot check-in twice on the same day;
- [x] The user cannot check-in if they are not within 100m of the gym;
- [ ] The check-in can only be validated up to 20 minutes after it is created;
- [ ] The check-in can only be validated by administrators;
- [ ] The gym can only be registered by administrators;

## RNFs (Non-Functional Requirements)

- [x] The user's password needs to be encrypted;
- [x] The application data needs to be persisted in a PostgreSQL database;
- [x] All data lists need to be paginated with 20 items per page;
- [ ] The user must be identified by a JWT (JSON Web Token);
- Aqui está um README básico para configurar o ambiente de testes do Vitest com Prisma, incluindo a parte do `pnpm link`:

---

## Vitest Test Environment with Prisma

This guide explains how to set up an isolated test environment for end-to-end (E2E) testing using **Vitest** and **Prisma**. We will configure a **custom test environment** to ensure each test suite runs in an independent database instance.

## Prerequisites

- **Node.js** installed
- **pnpm** as the package manager
- **Docker** installed (to run the database)

## 1. Setting Up a Custom Vitest Environment

### 1.1 Create a Custom Environment Package

Inside the `prisma/` directory, create a folder named `vitest-environment-prisma`:

```sh
mkdir -p prisma/vitest-environment-prisma
cd prisma/vitest-environment-prisma
pnpm init -y
```

Modify the `package.json` inside `prisma/vitest-environment-prisma/`:

```json
{
  "name": "vitest-environment-prisma",
  "version": "1.0.0",
  "description": "Vitest test environment for Prisma",
  "main": "prisma-test-environment.ts",
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 1.2 Create the Prisma Test Environment File

Inside `prisma/vitest-environment-prisma/`, create a file named `prisma-test-environment.ts`:

```ts
import { Environment } from 'vitest';

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setting up Prisma Test Environment');
    return {
      async teardown() {
        console.log('Tearing down Prisma Test Environment');
      },
    };
  },
};
```

### 1.3 Link the Custom Environment

To make Vitest recognize the custom test environment, you need to link it:

```sh
cd prisma/vitest-environment-prisma
pnpm link --global
```

Then, inside the main project directory, run:

```sh
pnpm link vitest-environment-prisma
```

### 1.4 Configure Vitest to Use the Custom Environment

Modify your `vite.config.ts` file to include the new test environment:

```ts
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    dir: 'src'
  },
});
```

### 1.5 Running Tests

Once the environment is set up, you can run the test suite:

```sh
pnpm run test
```

## Troubleshooting

### Error: `Failed to load url vitest-environment-prisma`
- Ensure the package is properly linked: `pnpm list -g vitest-environment-prisma`
- If it does not appear, re-run:
  ```sh
  pnpm link --global
  pnpm link vitest-environment-prisma
  ```
- If the error persists, try restarting the terminal.
