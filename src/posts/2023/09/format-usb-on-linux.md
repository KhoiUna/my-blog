---
title: "How to format a USB drive in Linux?"
date: "2023-09-29"
tags:
  - tech
  - linux
---

No BS. Just the terminal and straightforward steps to format a USB drive in Linux:

1. Locate the USB drive.
2. Unmounte and format the USB drive.
3. Verify the process was successful.

<!-- excerpt -->

# 1. Locate the USB drive

```sh
df
```

Locate your USB drive. In my case (when I plugged in my USB on my PopOS desktop), it is `/dev/sda`.

# 2. Unmounte and format

We will use **FAT32** because it is ideal since it offers maximum compatibility on Windows, Mac, and Linux. To format a USB drive with FAT32 file system, use:

```sh
sudo mkfs.vfat /dev/sda
```

Make sure to use your location. I use `/dev/sda` because it is my location.

# 3. Verify the process

```sh
sudo fsck /dev/sda
```

A USB drive with no files indicates successful formatting. Something like this:

```
/dev/sda: 0 files, blahblah...
```

**DONE!**
