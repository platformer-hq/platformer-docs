# How It Works

The first question a developer might ask is: *how does Platformer work?*

Platformer integrates with various mini-app platforms and provides specialized adapters—usually in the form of
full-fledged wrappers. These adapters, called **launchers**, have flexible configurations that developers can tailor to
their needs.

Each launcher acts as an intermediary between the developer's app and the platform's native client. It resolves
platform-specific issues and adds an extra layer of functionality.

When launched, the launcher retrieves data from the environment, requests information from the Platformer API, and
determines the next steps based on the server’s response.

…And that’s it! All the complex logic stays on the server side, making the launcher lightweight, fast, and easy to use.

## Launching Developer Applications

Platformer is more than just infrastructure. It’s a full-fledged ecosystem of mini-apps that offers flexible ways to
launch both your own applications and those built for supported platforms, such as Telegram Mini Apps.

There are two main app launch scenarios:

* **Within an existing developer app**: If you already have an app on a supported platform, you can connect to
  Platformer through a specialized launcher. This allows you to leverage the full potential of Platformer within your
  existing infrastructure.

> [!NOTE] Supported Platforms
> Currently, Platformer provides a launcher only for **Telegram Mini Apps**. Support for other platforms will be added
> later.

* **In a standalone app**: If you don’t want to or cannot publish on current platforms, you can still launch your apps
  through Platformer—independently and autonomously.

> [!WARNING] Trade-offs
> This approach comes with some limitations: platform-specific features will be unavailable for security reasons. It is
> recommended to link your app to a supported platform for full feature access.

> [!NOTE] In Development
> This launch mode is still **in development** and will be available soon.

## About Launchers

Launchers are autonomous open-source web applications that allow Platformer to correctly display and handle mini-apps
within the context of a specific platform. Each launcher is carefully adapted to the characteristics of its target
environment.

Currently, a launcher built for Telegram is available. Its source code is open and
accessible [here](https://github.com/platformer-hq/platformer-monorepo/tree/master/apps/telegram-launcher).

The launcher acts as a bridge between the native client and the developer's application. It doesn’t just render the
interface—it also handles technical tasks specific to the platform, freeing the developer from dealing with them
manually.

Additionally, launchers implement unique features specific to Platformer, some of which have not yet been publicly
announced.

## Security Considerations

Security is one of Platformer’s top priorities. Since the platform currently supports only Telegram, we’ll focus on
that.

Platformer uses only local storage and saves only the authorization token there. It does not access Telegram’s cloud
storage or any other form of persistent storage, as it cannot guarantee the security of such data. This eliminates the
risk of token theft by third-party apps.

The most sensitive data is the [init data](https://docs.telegram-mini-apps.com/platform/init-data) sent by Telegram when
launching a mini-app. To eliminate any risk of misuse (e.g., impersonating a user in another app), the launcher
automatically removes the `hash` parameter from the init data, making it impossible to reuse.

Instead, it uses Telegram’s recently introduced
feature—[Third-Party Validation](https://docs.telegram-mini-apps.com/platform/init-data#using-telegram-public-key). This
allows verification of the init data’s authenticity via the `signature` property. Thanks to this, Platformer only
requires one thing from you: provide your Telegram bot ID in
the [mini-app admin panel](https://t.me/platformer_robot/admin).
