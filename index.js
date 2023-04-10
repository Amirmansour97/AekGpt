import { Configuration, OpenAIApi } from 'openai';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const configuration = new Configuration({
  organization: 'org-T2tFDUGlF2ITDfu9KUWSuN4k',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

//server
const app = express();
const port = 3050;
app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  const { message } = req.body;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `${message}` }],
  });
  res.json({ completion: completion.data.choices[0].message });
});

app.listen(port, () => {
  console.log(`example that works on https://localhost:${port}`);
});
