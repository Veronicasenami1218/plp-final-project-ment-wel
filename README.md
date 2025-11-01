# MentWel Frontend

React + TypeScript + Vite + Tailwind frontend for the MentWel Mental Health Platform.

## Prerequisites
- Node.js 18+ and npm 9+
- Recommended: Git

## Getting Started
1. Install dependencies (pick one):
   - Normal install:
     ```powershell
     npm install
     ```
   - If you hit ERESOLVE / vite@undefined:
     ```powershell
     npm install --legacy-peer-deps
     ```
2. Start the dev server:
   ```powershell
   npm run dev
   ```
3. Open the URL printed in the terminal (usually http://localhost:5173).

## Scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Type-check and build for production
- `npm run preview` – Preview the production build locally
- `npm run test` – Run unit tests (Vitest)
- `npm run test:ui` – Run Vitest in UI mode
- `npm run test:e2e` – Run Playwright end-to-end tests
- `npm run lint` – Lint TypeScript/React code
- `npm run lint:fix` – Lint and auto-fix

## Environment Variables
1. Copy `env.example` to `.env` and fill in values:
   ```powershell
   Copy-Item env.example .env
   ```
2. Restart the dev server after changes.

## Tech Stack
- React 18, React Router
- TypeScript
- Vite 4
- Tailwind CSS
- Zustand, React Query, Axios
- Vitest, Playwright, ESLint

## Project Structure (high level)
```
frontend/
├─ index.html
├─ src/
├─ css/
├─ js/
├─ login.html
├─ register.html
├─ tailwind.config.js
├─ vite.config.ts
└─ Dockerfile
```

## Docker (optional)
Build and run with Docker:
```powershell
docker build -t mentwel-frontend .
docker run -p 5173:5173 mentwel-frontend
```
If the image exposes a different port, adjust the mapping.

## Troubleshooting
- **npm ERESOLVE / vite@undefined**
  - This is usually an npm resolver/cache quirk. Try:
    ```powershell
    npm cache clean --force
    npm install --legacy-peer-deps
    ```
  - Or pin compatible versions explicitly:
    ```powershell
    npm install -D vite@4.5.0 @vitejs/plugin-react@4.7.0
    npm install
    ```
- **Node version**
  - Ensure Node 18+ (`node -v`).
- **Port already in use**
  - Change the dev server port in `vite.config.ts` or stop the conflicting process.

## Build & Preview
```powershell
npm run build
npm run preview
```

## License
Private project. All rights reserved.

