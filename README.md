# Fairlo Frontend Assignment

## Setup Instructions

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
# or with UI runner
npm run test:e2e:ui
```

Run Storybook:

```bash
npm run storybook
```

Lint and format:

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

---

## Tooling & Libraries

- React Hook Form – form handling and validation
- Zustand – state management
- TanStack Query - data fetching
- Vite as the build tool and dev server
- Styled Components for styling
- React Router DOM for routing
- Storybook for component documentation and isolation
- Vitest + Testing Library for unit and integration testing
- Playwright for end-to-end testing
- ESLint + Prettier for linting and code formatting
- Husky for pre-commit hooks

## Assumptions

- Income is in euros (€), no currency provided
- User can navigate to /applications page directly
- Full name may include numbers since they are treated as characters
- Border focus not provided in design tokens, using neutral-900
- Terms checkbox and employment type radio have no error design, reused input error style

---

## Trade-offs

- Network failures are not handled beyond default error state
- Unit tests focus on core logic only
- E2E tests cover main user flows and basic error scenarios

---

## Deployment

Live URL: [https://credit-application-wizard.vercel.app/]
