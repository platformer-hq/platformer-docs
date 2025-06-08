# Separate Links

One of Platformer’s key features is its flexible link system—you can use different URLs for different platforms and even
for specific clients. Let’s explore this using Telegram Mini Apps as an example.

Officially, Telegram supports [six different clients](https://telegram.org/apps) across various operating systems and
devices. These include mobile, desktop, and web versions, each with its own characteristics. The differences are so
significant that supporting all clients within a single mini-app can sometimes become impossible.

Developers often tailor their mini-apps to specific devices or usage scenarios. Some apps are designed for mobile
clients, others for desktop, and some are optimized for web environments. However, it’s not always practical to launch
the same app across all of these contexts.

Imagine your app critically depends on access to the camera or a QR scanner—features unavailable in Telegram’s desktop
and web versions. Loading a full app only to display a message saying it won’t work is inefficient and inconvenient.

**Platformer solves this elegantly.** You can assign individual URLs for each platform or client. If a link for a
specific client isn’t provided, Platformer will automatically notify the user that the app is unavailable on their
device. You can also specify a custom fallback—a lightweight page with a clear explanation—giving users clarity without
wasting resources.

Moreover, this feature unlocks another powerful capability—creating **isolated bundles** for different clients. These
builds don’t include unnecessary code meant for other platforms and don’t require isomorphic solutions. This means
Telegram on iOS won’t load resources meant only for Android—yielding major gains in speed and efficiency.

**With Platformer, you can create lightweight, fast, precise builds for each platform—and fully control who, where, and
how users access your app.**

You can configure separate links for each client in the app management interface, under the **“Links”** section.

> [!WARNING] HTTP Links
> You may use HTTP links, but **only for development purposes**. Such apps will not be able to use Platformer
> functionality. Their use in production is not recommended.
