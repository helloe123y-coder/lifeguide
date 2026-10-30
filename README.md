# LifeGuide

LifeGuide is a personalized decision-support platform designed for youth and adults. It combines a user profile, AI guided chat, and scenario modeling engine to help people think through important life decisions.

## Stack

- Frontend: Next.js + Tailwind CSS
- Backend: Express + TypeScript
- Database: PostgreSQL
- ORM: Prisma
- AI layer: LLM-compatible chat endpoint

## Key features

- Profile intake form
- LifeGuide landing page and branding
- Youth and adult pathways
- AI assistant for scenario-based guidance
- Scenario modeling dashboard
- Database schema for profiles, scenarios, and chat messages

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start PostgreSQL using Docker:
   ```bash
   docker-compose up -d
   ```

3. Set up environment variables:
   ```bash
   cp apps/api/.env.example apps/api/.env
   ```

4. Run Prisma generation:
   ```bash
   npm run prisma:generate --workspace apps/api
   ```

5. Start the app:
   ```bash
   npm run dev
   ```

The app runs at:
- Frontend: http://localhost:3000
- API: http://localhost:4000

## Notes

This build provides a production-ready structure with a real app shell, AI chat integration, and scenario modeling support. It can be extended with authentication, a real LLM service, and persistent user data.
