---
title: "Fixing NextJS 14 package issue"
description: "Recently upgraded a NextJS app to version 14.2.5 from version 14.2.4, and during the process, I ran `npm update` and got some stuff messed up, and the NextJS app was not running well, eg: logging in did not work"
date: "2024-07-19"
ogImage: /assets/images/og/nextjs.webp
tags:
    - nextjs
---

Recently upgraded a NextJS app to version 14.2.5 from version 14.2.4, and during the process, I ran `npm update` and got some stuff messed up, and the NextJS app was not running well, eg: logging in did not work.

This took me a while to solve so I figured to document it here, and to be honest I still did not know the root cause, but I guess it had something to do with `package-lock.json`. Here is how I fixed it.

I was on the `dev` branch with the troubling NextJS app. I `git checkout` to `main` (which was still on `next@14.2.4`) and noticed that if I ran `npm ci` then `npm run dev`, the app worked as expected.

Then, I copied `main`'s `package.json` and `package-lock.json` to a different folder, then I `git checkout` to `dev`, and pasted the 2 files to `dev`.

Next, I ran `npm ci` to do a clean install, then I ran `npm rm next` to uninstall `next@14.2.4`, and `npm i next@latest` to install `next@14.2.5`.

And, voila it worked again!
