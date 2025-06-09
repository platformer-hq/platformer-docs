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
