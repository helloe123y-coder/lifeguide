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

  const responseText = prompt
    ? `Thanks for the prompt: "${prompt}". Based on your profile, the decision process should be: 1) define the problem clearly, 2) compare options, 3) review risks and support, and 4) choose the lowest-risk next step. The strongest recommendation is to act on the option that balances long-term fit with short-term confidence.`
    : 'Tell me more about your situation so I can help you break it into choices and next steps.';

  res.json({
    success: true,
    profileSummary: profile || 'Youth profile',
    reply: responseText,
  });
});

app.post('/api/scenarios/model', (req: Request, res: Response) => {
  const { decision } = req.body;

  res.json({
    success: true,
    recommendation: {
      scenario: decision || 'Career and life transition decision',
      bestOption: 'Choose the option with the strongest short-term clarity and lowest long-term regret.',
      reasoning: [
        'Evaluate values and risk tolerance',
        'Assess realistic support and resources',
        'Choose the option that reduces uncertainty with the least downside',
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`LifeGuide API running on http://localhost:${port}`);
});
