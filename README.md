# Hello, Badgers!

### My name is Gray Nance, and this is my submission for the coding challenge / application for your open Software Developer role.

<br />

## To Get Started:

<br />
<hr />
<br />

## 1. Clone the repository and install dependencies:

- Clone this repository into a local directory of your choosing.
- CD into the new directory.
- Install the dependencies:
  - `npm install`
- To start the server without watch mode:
  - `npm start`
- To start the server in nodemon / watch mode:
  - `npm run dev`

<br />
<hr />
<br />


## 2. Set up Slack:

If you want to use the Slack Workspace that I set up for this challenge:

- [Click Here to Join Workspace](https://join.slack.com/t/graynance/shared_invite/zt-1qmo3djd0-FHaBJTbLZdyjsTKDhob8ag)
- In the .env file, change the following:
  - SLACK_BOT_TOKEN=`< PROVIDED_SLACK_BOT_TOKEN_HERE >`

If you prefer to use your own Slack Workspace:

- You will need a Slack Workspace and the ability to add an App/Bot to a Workspace channel.
- Create an App/Bot on your Workspace:
  - [Click Here for Guidance](https://api.slack.com/)
- Make note of your Bot User OAuth Token (should start with `xoxb`) and the channel you wish for the alert to be sent to.
- Ensure that your app/bot has the appropriate Token Scope of `chat:write`.
- Since the environment variables were set up for my Slack Workspace, you will need to edit them:
  - In the .env file, change the following:
    - SLACK_BOT_TOKEN=`< YOUR_BOT_USER_OAUTH_TOKEN_HERE >`
    - SLACK_CHANNEL=`< YOUR_DESIRED_OUTPUT_CHANNEL_NAME_HERE >` (do not include the #)

<br />
<hr />
<br />

## 3. Send a POST request:

- With the Express server running:

  - Use Postman (or your favorite alternative) to send two POST requests, one with each of the following JSON bodies:

    - To expect an alert in the channel:
      ```json
      {
        "RecordType": "Bounce",
        "Type": "SpamNotification",
        "TypeCode": 512,
        "Name": "Spam notification",
        "Tag": "",
        "MessageStream": "outbound",
        "Description": "The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content.",
        "Email": "zaphod@example.com",
        "From": "notifications@honeybadger.io",
        "BouncedAt": "2023-02-27T21:41:30Z"
      }
      ```
    - To expect no alert in the channel:

      ```json
      {
        "RecordType": "Bounce",
        "MessageStream": "outbound",
        "Type": "HardBounce",
        "TypeCode": 1,
        "Name": "Hard bounce",
        "Tag": "Test",
        "Description": "The server was unable to deliver your message (ex: unknown user, mailbox not found).",
        "Email": "arthur@example.com",
        "From": "notifications@honeybadger.io",
        "BouncedAt": "2019-11-05T16:33:54.9070259Z"
      }
      ```
<br />
<hr />
<br />

## Thank you so much for taking the time to consider me 😁
