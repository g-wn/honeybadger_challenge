const express = require('express');
const { WebClient } = require('@slack/web-api');
require('dotenv').config();

const app = express();
// Slack bot token must have 'chat:write' OAuth Scope:
const client = new WebClient(process.env.SLACK_BOT_TOKEN);

app.use(express.json());

app.get('/', async (_req, res) => {
  res.json({
    message: 'Hello, Badgers!'
  });
});

app.post('/', async (req, res) => {
  // Destructure Type, TypeCode, and Email from the request body:
  const { Type, TypeCode, Email } = req.body;

  if (Type === 'SpamNotification' || TypeCode === 512) {
    // If Type or TypeCode designate the request body as spam, alert channel:
    try {
      await client.chat.postMessage({
        channel: `#${process.env.SLACK_CHANNEL}`,
        text: `New spam message incoming from ${Email}`
      });
      res.json({ success: true });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  } else {
    // If Type or TypeCode do NOT designate the request body as spam, do not alert the channel:
    res.status(400).json({ success: false, error: 'Payload is not a spam notification.' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
