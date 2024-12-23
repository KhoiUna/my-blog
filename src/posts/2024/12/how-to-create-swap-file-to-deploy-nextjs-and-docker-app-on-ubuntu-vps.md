---
title: "How to create swap file to deploy NextJS and Docker app on Ubuntu VPS"
description: "I ran into an issue where building a NextJS app on Docker would take forever. Then, I found out I could solve this by adding a swap space to my Ubuntu VPS. So what is a swap space?"
date: "2024-12-22"
ogImage: /assets/images/og/docker.webp
tags:
  - devops
  - docker
---

# What is a swap space

I ran into an issue where building a NextJS app on Docker would take forever. Then, I found out I could solve this by adding a swap space to my Ubuntu VPS.

So what is a swap space?

> Swap space is a designated area on a hard drive (HDD or SSD) that acts as an extension of a computer's physical RAM. When the RAM is full, the operating system moves inactive or less frequently used data from RAM to this swap space to free up memory for active tasks. This process is known as "swapping."

# How to create a swap space

To create a swap file on an Ubuntu Linux VPS for building a Docker and NextJS application, follow these steps:

1. Check existing swap space:

   ```bash
   sudo swapon --show
   ```

   If this command returns no output, you don't have any swap space configured.

2. Create swap file

   ```bash
   sudo fallocate -l 2G /swapfile
   ```

   This creates a 2GB swap file (it worked in my case). Adjust the size as needed.

3. Set permissions

   ```bash
   sudo chmod 600 /swapfile
   ```

   This restricts access to root only, enhancing security.

4. Set up swap area

   ```bash
   sudo mkswap /swapfile
   ```

   This formats the file as swap space.

5. Activate swap

   ```bash
   sudo swapon /swapfile
   ```

   This enables the swap file.

6. Make swap permanent
   Edit `/etc/fstab`:

   ```bash
   sudo nano /etc/fstab
   ```

   Add this line:

   ```text
   /swapfile none swap sw 0 0
   ```

   This ensures the swap file is mounted on reboot.

7. Verify swap:

   ```bash
   sudo swapon --show
   ```

   This should now display information about your new swap space.

   After that, running my `docker build` script worked just fine!
