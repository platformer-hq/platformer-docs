# Cache Reset

Even the most well-designed mini-apps can run into a simple but frustrating issue: **caching**. Native platform
clients—such as Telegram, VK, WhatsApp, and others—may cache the link to your app and continue using an outdated
version, even after you’ve deployed a new build.

This leads to situations where users (and even developers themselves) **don’t see the current version of the app**,
despite it being updated.

**Platformer solves this problem with a single click.** In the app management interface, there’s a special 
button—**“Reset Cache.”** By clicking it, you force an update of the app link for all platform clients.

How does it work? Very simply: Platformer automatically appends a special `query` parameter to the link. For the client,
this is treated as a new, unique URL, which forces it to reload the content—bypassing the old cache.
