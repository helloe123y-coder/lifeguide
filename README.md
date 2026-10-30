# LifeGuide

LifeGuide is a personalized decision-making platform for individuals and families. It helps users understand their values, profile their current situation, model scenarios, and receive AI-guided recommendations.

## Tech stack

- Frontend: Next.js
- Backend: Express + TypeScript
- Database: PostgreSQL + Prisma
- AI layer: OpenAI-compatible LLM integration

## Features

- User profile intake
- Youth and adult audience modes
- AI chat assistant
- Scenario modeling engine
- Decision recommendation dashboard
- Secure, database-backed persistence

## Project structure

- `apps/web` — Next.js frontend
- `apps/api` — Express API and Prisma schema
- `docker-compose.yml` — PostgreSQL container setup

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start PostgreSQL:
   ```bash
   docker-compose up -d
   ```

3. Set up environment variables:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

4. Run Prisma generate:
   ```bash
   npm run prisma:generate --workspace apps/api
   ```

5. Start the app:
   ```bash
   npm run dev
   ```

The app will be available at:
- Frontend: http://localhost:3000
- API: http://localhost:4000

## Environment variables

- `DATABASE_URL` — PostgreSQL connection string
- `OPENAI_API_KEY` — optional LLM key for live AI responses

## Notes

The project includes demo-ready pages and endpoints that can be expanded into a full production service with auth, dashboards, and advanced recommendation logic.
