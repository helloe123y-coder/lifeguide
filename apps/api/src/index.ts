import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'LifeGuide API',
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/profiles', (req: Request, res: Response) => {
  const profile = req.body;

  res.status(201).json({
    success: true,
    data: {
      ...profile,
      message: 'Profile saved successfully for LifeGuide analysis.',
    },
  });
});

app.post('/api/chat', (req: Request, res: Response) => {
  const { prompt, profile } = req.body;

  const response = `Thanks for the prompt: "${prompt || 'No prompt provided'}". Based on the user profile, the best next step is to clarify the core decision, compare options, and choose a low-risk action that reduces uncertainty.`;

  res.json({
    success: true,
    profileSummary: profile || 'Youth profile',
    reply: response,
  });
});

app.post('/api/scenarios/model', (req: Request, res: Response) => {
  const { decision } = req.body;

  res.json({
    success: true,
    recommendation: {
      scenario: decision || 'Career and life transition decision',
      bestOption: 'Choose the option with the strongest short-term clarity and long-term fit',
      reasoning: [
        'Evaluate values and risk tolerance',
        'Assess support, time, and cost',
        'Choose the action with the most learning and lowest downside',
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`LifeGuide API running on http://localhost:${port}`);
});
