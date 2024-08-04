---
title: "Troubleshooting ENOSPC no space left on device — Docker"
description: "Recently ran into an issue where I deployed a NextJS app with Docker on my DigitalOcean Ubuntu VPS and it logged this out while building: ENOSPC no space left on device. So I ran `df -h` to view how much space on my disk left"
date: "2024-08-01"
ogImage: /assets/images/og/docker.webp
tags:
    - devops
    - docker
---

Recently ran into an issue where I deployed a NextJS app with Docker on my DigitalOcean Ubuntu VPS and it logged this out while building: `ENOSPC no space left on device`.

So I ran `df -h` to view how much space on my disk left. This is what I got:

```txt
Filesystem  ...     Use%   Mounted on
/dev/vda1   ...      100%   /
```

Fortunately, I found this {% newtab_link 'https://stackoverflow.com/questions/50142049/enospc-no-space-left-on-device-nodejs' 'Stackoverflow article' %}, and realized that my Docker app had been creating containers and those became orphaned or unused. This is not so obvious, since running `docker ps` and `docker image ls` did not show these orphaned containers (or maybe my skill issue).

So to clean these up, all I had to do was running `docker system prune --all` and said `Yes` to the CLI prompt. Now, running `df -h` again showed me this:

```txt
Filesystem  ...     Use%   Mounted on
/dev/vda1   ...      59%   /
```

Then, I ran the command to rebuild and deploy the Docker app. Everything worked as usual!
