# Privacy Levels

From the very beginning, Platformer ensures maximum control over access to your mini-app. **By default, every new app is
created in private mode**—meaning it’s inaccessible to anyone except its [managers](./management-system.md).

This approach helps prevent accidental launches, data leaks, or premature public access during active development.
Privacy is your first line of defense.

If a user who tries to open the app is not a manager, Platformer will **automatically notify them that access is
denied**. This happens seamlessly—no need to implement manual checks inside the app.

When you're ready to open access, simply change the privacy level or use the [test group system](./test-groups.md) for
selective access. If the app is **not private**, Platformer will choose the appropriate launch link based on the current
platform and client—learn more in the [“Separate Links”](./separate-links.md) section.

> [!WARNING] Priority
> If a user is part of a relevant [test group](./test-groups.md), privacy level is **ignored**—test groups always take
> top priority in determining access.
