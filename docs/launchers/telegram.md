# Telegram Launcher

This document explains how Platformer's launcher for Telegram works, including its features and requirements.

The source code for the launcher is
available [here](https://github.com/platformer-hq/platformer-monorepo/tree/master/apps/telegram-launcher).

## Requirements

For the launcher to function properly, your mini-app must use one of the following libraries:

* [@telegram-apps/sdk](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/3-x) version 3 or higher
* [@telegram-apps/bridge](https://docs.telegram-mini-apps.com/packages/telegram-apps-bridge/2-x) version 2 or higher

> [!DANGER] Telegram SDK Not Supported
> The launcher does not work with mini-apps based on the Telegram SDK, due to a bug that prevents proper communication
> between the launcher and your app.

If you are using `@telegram-apps/sdk` or `@telegram-apps/bridge`, make sure to specify the correct target origin. This
will allow the library to communicate properly with the Platformer launcher:

```ts
import { targetOrigin } from '@telegram-apps/sdk'; // or '@telegram-apps/bridge'

targetOrigin.set('https://tgl.mini-apps.store');
```

## Available Options

The launcher can be configured using the options below. Each option should be passed as a query parameter in the
launcher URL.

| Name           | Type     | Description                                                                                                                                                                                       |
|----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`       | `number` | The ID of your app in Platformer, available in the admin panel.                                                                                                                                   |
| `fallback_url` | `string` | *Optional.* A URL to be used if Platformer becomes unavailable. This ensures your app can still open even if Platformer encounters issues.                                                        |
| `init_timeout` | `number` | *Optional.* Time in milliseconds to wait for a response from Platformer’s server. If it expires, the launcher uses `fallback_url` (if provided) or shows an error. Default is `5000` (5 seconds). |
| `load_timeout` | `number` | *Optional.* Time in milliseconds for your app to finish loading. If it takes too long, the launcher will display an error. Default is `10000` (10 seconds).                                       |

## Debugging

The launcher supports debugging features via the [Telegram Mini Apps
`start` parameter](https://docs.telegram-mini-apps.com/platform/start-parameter).

| Name      | Description                                                                                                                                             |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `p-debug` | Enables debug mode with helpful logs in the console.                                                                                                    |
| `p-eruda` | Displays the [eruda](http://npmjs.com/package/eruda) console. When enabled, eruda loads before the app. Use only for development or debugging purposes. |

The launcher simply checks for these strings in the `start` parameter, so you can pass them in any convenient format.

Here’s a valid example with all debug features enabled:

```
https://t.me/bot/app?start=p-debug_p-eruda
// or
https://t.me/bot?startapp=p-debug_p-eruda
```

## Usage

To start using the launcher, take its base URL (`https://tgl.mini-apps.store/`) and append the
appropriate [options](#available-options) as query parameters.

For example, if your Platformer app has the ID `10` and a `fallback_url` of `https://walletbot.me/app`, the full link
would be:

```
https://tgl.mini-apps.store/?app_id=10&fallback_url=https%3A%2F%2Fwalletbot.me%2Fapp
```

Once you have the final URL, use it when registering your mini-app in [@BotFather](https://t.me/botfather). When the app
is opened, the Telegram client will load that URL, which then loads your app.

> [!TIP] Use the Link Generator
> To simplify link creation, go to the **"Telegram → Launcher Settings"** section in your app settings in
> the [Platformer Admin Panel](https://t.me/platformer_robot/admin). It will help you generate the correct URL.

## How It Works

### Step 1: Read and Validate Options

The launcher reads and validates the [passed options](#available-options). If something is incorrect, an error screen is
shown.

### Step 2: Authenticate the User

The launcher retrieves Platformer’s auth token to interact with its API. If no token is found, it authenticates the user
and saves the token locally.

### Step 3: Retrieve App Data

The launcher fetches your app’s data based on the `app_id`.

It then displays one of the following:

1. A message indicating the app is unavailable—this could be due to an error, lack of a suitable URL, or app privacy
   settings.
2. The app itself, if a valid URL was returned by Platformer.

### Step 4: Display the App

The launcher embeds an `iframe` with the URL returned by Platformer. This URL matches the one configured in the admin
panel, taking into account launch parameters passed to the mini-app.

After the iframe is embedded, the launcher waits for the duration set by `load_timeout`, until your app calls
the [web\_app\_ready](https://docs.telegram-mini-apps.com/platform/methods#web-app-ready) method.

Unlike Telegram, Platformer does not automatically display the app after all resources are loaded. Therefore, calling
`web_app_ready` is required.

## Security Considerations

Platformer only uses local storage and saves only the authorization token. It does not access Telegram cloud storage or
other persistent storage methods, as it cannot ensure their security. This eliminates the risk of token theft by
third-party apps.

The most sensitive data is the [init data](https://docs.telegram-mini-apps.com/platform/init-data) passed by Telegram
when launching a mini-app. To prevent abuse (e.g., spoofing a user in someone else’s app), the launcher automatically
removes the `hash` parameter from init data, preventing it from being reused.

Instead, it uses
Telegram’s [Third-Party Validation](https://docs.telegram-mini-apps.com/platform/init-data#using-telegram-public-key)
feature. This allows for init data verification via the `signature` property. As a result, the only thing Platformer
requires from you is to provide your Telegram bot ID in the [mini-app admin panel](https://t.me/platformer_robot/admin).

## Troubleshooting

### App Doesn’t Load Due to Timeout

Your app may fail to load for the following reasons:

* **Slow loading speed** — Your server took too long to load app resources.
* **Missing required method** — Your app didn’t
  call [web\_app\_ready](https://docs.telegram-mini-apps.com/platform/methods#web-app-ready).
* **Unsupported SDK version** — Platformer does not support the **Telegram SDK** or **@telegram-apps/sdk** v2 or earlier
  due to broken client communication.
  Using [@telegram-apps/sdk@3](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/3-x)
  or [@telegram-apps/bridge@2](https://docs.telegram-mini-apps.com/packages/telegram-apps-bridge/2-x) should resolve the
  issue.
* **Target origin was not set** — Platformer launcher is not receiving the `web_app_ready` method call, as
  long [the correct `targetOrigin` value](#requirements) was not set.
