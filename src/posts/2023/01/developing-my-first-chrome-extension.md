---
title: "My first Chrome extension"
date: "2023-01-03"
tags:
  - tech
  - coding
---

As I was doing my final project for Harvard CS50x, I decided to build a Chrome extension because, why not, I had never built one before so it would be a good learning experience for me.

<!-- excerpt -->

As I was doing my final project for Harvard CS50x, I decided to build a Chrome extension because, _why not_, I had never built one before so it would be a good learning experience for me.

# Planning

As this was my first time developing a Chrome extension, I did not want to start with something big.

> My principle: start small when you want to learn something.

I would like to keep it small and simple, and more importantly, it had to solve a problem that was relevant to me.

So I came up with an idea: a Chrome extension that notifies me to drink water while working (as I am too focus sometimes and forget to take a sip). I know it sounds simple, and there has to be similar extensions out there, but _hey_, this is for learning!

So this blog post will guide you through my thought process.

# Development

So the goal was to build an extension that sent me a notification to take a sip every 15 minutes.

Building the user interface was simple. The popup used basic web technologies such as HTML, CSS, and JavaScript.

{% asset_img 'popup-ui.png' 'Popup user interface' %}

While developing, I encountered a problem. If the extension popup disappeared, the timer would restart. In order to avoid this, a script called `background.js` running in the background would help. However, the script had to be defined in `manifest.json` :

```json
"background": {
    "service_worker": "background.js"
}
```

To use the notifications feature, you have to declare it in `manifest.json` as well:

```json
"permissions": ["notifications"]
```

In the end, `manifest.json` should look like this:

```json
{
  "manifest_version": 3,
  "name": "Sip & Work",
  "description": "Helps you stay hydrated while working",
  "version": "1.0",
  "action": {
    "default_popup": "popup/popup.html",
    "default_icon": "images/icon-128.png"
  },
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "permissions": ["notifications"],
  "background": {
    "service_worker": "background.js"
  }
}
```

# Production

To use this locally, you can:

1. Go to `Manage extensions` in your browser and turn on `Developer mode`.
2. Then, click `Load unpacked` and you should see it in your extensions.

To make it publicly available for everyone to download from the Chrome Store, you first have to [register as a Chrome Web Store developer](https://developer.chrome.com/docs/webstore/register/) that requires paying a one-time registration fee. After that, follow these steps [here](https://developer.chrome.com/docs/webstore/publish/#setup-a-developer-account) to submit your extension for publishing.

<hr/>
<br/>

# Source code

[GitHub - KhoiUna/sip-and-work-extension: Chrome extension that reminds users to drink water every 15 minutes](https://github.com/KhoiUna/sip-and-work-extension)

# Resources

[Extensions - Chrome Developers](https://developer.chrome.com/docs/extensions/)

[Declare permissions - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

[Manifest file format - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/manifest/)

[Manage events with service workers - Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/service_workers/)
