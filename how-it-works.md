# How It Works

The first question a developer may have is: _how does Platformer work?_

Platformer integrates with various mini app platforms and provides specialized adapters, typically in the form of
complete application wrappers. These adapters, known as **launchers**, come with configurable settings that developers
can customize.

Each launcher acts as a middleware between the developer’s application and the native mini app client. It resolves
platform-related issues and offers additional functionality.

Upon execution, the launcher extracts relevant data from the environment, requests information from the Platformer API,
and determines the next steps based on the server's response.

… and that’s it! The complex logic is handled server-side, keeping the launcher lightweight and efficient.

## Opening Developer Applications

Since Platformer is a mini-app ecosystem in itself, it offers multiple methods for launching different types of
applications. This includes both apps created within Platformer and those built on supported platforms, such as Telegram
Mini Apps.

There are two primary methods for opening applications:

* **Within the Developer’s Existing Application**:
  Developers who already have applications on supported platforms can integrate with Platformer using a dedicated
  launcher and workflow. This enables them to take full advantage of Platformer’s features within their existing
  infrastructure.

> [!NOTE] Supported Platforms
> Currently, Platformer only provides a launcher for applications on the **Telegram Mini Apps** platform. Support for
> other platforms is coming soon.

* **In a Standalone Application**:
  Developers who prefer not to build on supported platforms can still run their Platformer-created applications
  independently.

> [!WARNING] Trade-offs
> This method has certain trade-offs. Some platform-specific features are disabled for security reasons. The recommended
> approach is to link your application to a record on a supported platform.

> [!NOTE] Work In Progress
> This launch method is still a **work in progress** and will be released soon.

## About Launchers

Launchers are standalone open-source web applications that enable Platformer to display applications created for a
specific platform. Each launcher is tailored to the unique characteristics of the platform it supports.

Currently, we have a launcher built for Telegram, and its source code is
available [here](https://github.com/platformer-hq/platformer-monorepo/tree/master/apps/telegram-launcher).

Launchers act as intermediaries between the native client and the developer’s application. They allow Platformer not
only to render the application but also to handle platform-specific issues, so developers don’t have to manage these
challenges themselves — Platformer takes care of it.

In addition to providing the appropriate UI for various user scenarios, launchers are also designed to deliver
Platformer-specific functionality, some of which has not yet been publicly announced.

## Security Concerns

Security is one of Platformer's most important aspects. Since Platformer is currently available only on Telegram, let’s
focus specifically on how it works with this platform.

Platformer uses local storage solely to store its authorization token. It does not use Telegram's Cloud Storage or any
other storage, as Platformer cannot guarantee that data stored there cannot be reused. This approach prevents other
applications from stealing and using the token.

You may not realize it, but the Platformer launcher handles the most critical, important, and sensitive type of data an
app can have—[init data](https://docs.telegram-mini-apps.com/platform/init-data). To ensure developers do not worry
about Platformer misusing this data (e.g., impersonating a user in their applications), the launcher removes the `hash`
property from the init data, preventing Platformer from using it elsewhere.

Instead, Platformer leverages a recently added feature
called [Third-Party Validation](https://docs.telegram-mini-apps.com/platform/init-data#using-telegram-public-key), which
allows third-party projects to validate init data using the signature property. Thanks to this feature, Platformer only
requires you to specify your Bot's identifier in the admin panel for your Mini App.
