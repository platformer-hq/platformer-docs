# Test Groups

Developing a mini-app isn’t just about code. It’s a complex, multi-scenario process involving developers, testers,
managers, designers, and more. And at some point, it becomes clear: **a single working environment isn’t enough**.

You need staging. You need canary. You need access for a specific user. You need different behavior across different
clients. And you need all of that **without duplicating the app itself**. That’s exactly why **test groups** were
introduced in Platformer.

Test groups are a powerful mechanism that lets you flexibly control **which link should be used, on which client, and
for which user**. You define the rules—the system does the rest.

> [!WARNING] Priority
> Test groups have the **highest priority** when selecting a link. If a user is part of a test group, app privacy
> settings are ignored.

> [!WARNING] HTTP Links
> You may use HTTP links in test groups, but **only for development purposes**. These apps cannot use Platformer’s
> features. Their use in production is not recommended.

## Development Mode

You're developing an app and want to view the latest version running on your local server (`localhost` or an external
dev URL)? There’s no need to create a separate app with a custom link.

Just:

1. Go to the **“Test Groups”** section in the app settings.
2. Create a new group.
3. Specify the desired link, the platforms it applies to, and add yourself to the group.
4. Enable the group.

Now, when you open your mini-app on the specified platform, you’ll automatically see **your latest build** from the
development server.

## Granting Access

Your app is private, and you don’t want to add every tester as a manager? Use test groups!

Add the necessary user to a group, specify the default app link—and they’ll get access without being part of the team.
It’s convenient, flexible, and transparent.

## Environment Separation

Test groups elegantly emulate different environments: **production, staging, canary**, or anything else. Create a
separate group for each, assign the corresponding link—and switch between them simply by toggling your group membership.

## Debugging and Diagnostics

Not sure which link a specific user will see on a specific platform?
Open the [URL Viewer](./url-viewer.md)—it visually shows **which logic is applied** and why the user sees a particular
version of the app.

---

**Test groups are a tool not only for developers but for entire teams that need control, flexibility, and scalability.
With them, Platformer becomes a truly manageable ecosystem.**
