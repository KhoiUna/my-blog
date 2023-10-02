---
title: "How to format a USB drive in Linux?"
date: "2023-09-29"
tags:
  - tech
  - linux
---

No BS. Just the terminal and straightforward steps to format a USB drive in Linux:

1. Locate the USB drive.
2. Unmount and format the USB drive.
3. Verify the process was successful.

<!-- excerpt -->

# 1. Locate the USB drive

Use this command to locate your USB drive. In my case (when I plugged in my USB on my PopOS desktop), it is `/dev/sda`.

```sh
df
```

Man page:

```txt
df - report file system disk space usage
```

# 2. Unmount and format

We will use **FAT32** filesystem, because it is ideal since it offers maximum compatibility on Windows, Mac, and Linux. To build FAT32 filesystem on your USB drive, run:

```sh
sudo mkfs.vfat /dev/sda
```

Make sure to use your location. I used `/dev/sda` because it is my location.

Man page:

```txt
mkfs - build a Linux filesystem
```

```txt
mkfs.fat - create an MS-DOS FAT filesystem
```

# 3. Verify the process

```sh
sudo fsck /dev/sda
```

Man page:

```txt
fsck - check and repair a Linux filesystem
```

A USB drive with no files indicates successful formatting. Something like this:

```
/dev/sda: 0 files, blahblah...
```

**DONE!**
