# Integration with Telegram Mini Apps

This guide explains how to connect an existing Telegram Mini App to Platformer—and, conversely, how to **use Platformer
as a foundation** for building within Telegram.

## Connecting a Telegram Mini App to Platformer

If you already have a mini-app in Telegram and want to take advantage of Platformer's features (launcher, routing,
privacy, test groups, etc.), follow these steps.

### Step 1. Get Your Telegram Bot ID

Platformer needs your bot’s ID to properly verify the `init data` received from the Telegram client.

1. Open a chat with [@BotFather](https://t.me/botfather) and send the `/mybots` command.
2. Select the relevant bot from the list.
3. Click the **API Token** button to get the token (e.g., `12345678:ABCdefGHI`).
4. The number before the colon (`12345678`) is your **bot ID**—this is what you'll need.

### Step 2. Create a Mini-App in Platformer

1. Go to the [Platformer admin panel](https://t.me/platformer_robot/admin).
2. In the **“Apps”** section, click **“Create App.”**
3. Enter a name and confirm creation.

### Step 3. Configure Integration and Get the Launcher Link

1. In your app's settings, open the **“Telegram → Integration”** tab.
2. Enter your **Telegram bot ID** and save the changes.
3. Go to the **“Launcher Settings”** section and click **“Copy Link.”** This is your launcher URL for Telegram.

### Step 4. Set the Link via BotFather

1. In [BotFather](https://t.me/botfather), send the `/myapps` command.
2. Choose your mini-app.
3. Set the link you got from Platformer as the app’s URL.

Done! Telegram will now launch your Platformer-powered launcher, and Platformer will display the latest version of your
app based on your configuration.

## Integrating Platformer into Telegram

If you created your app in Platformer first and now want to publish it in Telegram Mini Apps, follow these steps:

1. In your Platformer app interface, go to **“Telegram → Launcher Settings.”**
2. Copy the generated launcher link.
3. Open [@BotFather](https://t.me/botfather).
4. If you don’t have a bot yet, create one using the `/newbot` command.
5. Get your **bot ID** (see [above](#step-1-get-your-telegram-bot-id)).
6. Paste this ID into the **“Integration”** section in Platformer.
7. Return to BotFather and create a mini-app using `/newapp`.
8. In the **app link** field, paste the Platformer launcher URL.

Now, when the mini-app is opened in Telegram, users will be routed through Platformer, which will handle all the launch
details for you.
