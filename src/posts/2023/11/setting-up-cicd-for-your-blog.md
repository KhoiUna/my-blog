---
title: "Setting up CI/CD for your blog"
description: In this blog post, let's learn how to set up a CI/CD workflow for your blog with CircleCI, GitHub, and a Virtual Private Server (VPS)
date: "2023-11-25"
ogImage: /assets/images/og/circle-ci.webp
tags:
    - tech
    - devops
---

In this blog post, let's learn how to set up a CI/CD workflow for your blog with CircleCI, GitHub, and a Linux Virtual Private Server (VPS) with {%newtab_link 'https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-22-04' 'NGINX installed'%}.

Note that I'm using {%newtab_link 'https://www.11ty.dev/' 'Eleventy'%} as a static site generator for my blog.

# Prerequisites

-   A CircleCI account.
-   A GitHub account.
-   A Linux VPS from AWS / Azure / DigitalOcean / etc. (just make sure you have {%newtab_link 'https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server' 'set up **SSH**'%} and {%newtab_link 'https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-22-04-quickstart' 'create a new sudo user'%} for it).

# Setup user for deployment

1. SSH into your VPS (as a sudo user) and create a new user called `circleci`. Run:

```bash
sudo useradd -m -d /home/circleci -s /bin/bash circleci
```

2. Setting up SSH for the new `circleci` user.

-   On your **local** machine, to generate an SSH key pair, run:

```bash
ssh-keygen -m PEM -t rsa -f ~/.ssh/circleci
```

3.  Copy & paste the content of the public key `.pub` and add it your VPS `/home/circleci/.ssh/authorized_keys` file.

```bash
sudo nano /home/circleci/.ssh/authorized_keys
```

-   If the directory `/.ssh` doesn't exist, create it with:

```bash
sudo mkdir /home/circleci/.ssh
```

    then create the `authorized_keys` file:

```bash
sudo touch /home/circleci/.ssh/authorized_keys
```

-   Give the `circleci` user its directory permissions so that it doesn’t run into permission issues during deployment.

```bash
sudo chown -R circleci:circleci /home/circleci
```

-   On your **local** machine, test the new `circleci` setup with:

```bash
ssh circleci@<your_server_ip> -i ~/.ssh/circleci
```

If it works, you are now logged in as `circleci`!

4. Setup {%newtab_link 'https://docs.github.com/en/authentication/connecting-to-github-with-ssh' 'SSH connection with GitHub'%}. This allows us to do `git fetch`, `git pull`, and cloning private repos.

# Install Node

1. SSH to your VPS with the user `circleci` as we've set up above.

2. Install `node` (I find {%newtab_link 'https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04#option-3-installing-node-using-the-node-version-manager' 'installing Node using the Node Version Manager'%} to be more convenient).

-   Run `node -v` to make sure `node` is installed
-   Run `npm -v` to make sure `npm` is installed.

3. Run `npm i -g pnpm` to install `pnpm` globally.

-   Run `pnpm -v` to make sure `pnpm` is installed.

# Setup deployment environment

1. Create a folder for our deployment, then move to that folder:

```bash
mkdir web && cd web
```

2. Clone your blog from GitHub:

```bash
git clone <repo-url / ssh-string>
```

Eg: `git clone git@github.com:KhoiUna/my-blog.git` (I prefer using an SSH string since we've setup SSH connection with GitHub).

-   Note that in my GitHub repo, I've created a `.circleci/` folder with a `config.yml` file.

```yml
# .circleci/config.yml
version: 2.1

# Define the jobs we want to run for this project
jobs:
    pull-and-build:
        docker:
            - image: arvindr226/alpine-ssh
        steps:
            - checkout
            - run: ssh -o StrictHostKeyChecking=no $USER@$IP "./deploy-blog.sh"
            # I tell CircleCI to SSH to my VPS,
            # and run my `deploy-blog.sh` script.

# Orchestrate our job run sequence
workflows:
    version: 2
    build-project:
        jobs:
            - pull-and-build:
                  filters:
                      branches:
                          only:
                              - main
```

3. Create `deploy-blog.sh` script: `vi ~/deploy-blog.sh` with this content:

```sh
# /home/circle/deploy-blog.sh
#!/bin/bash

# replace this with the path of your project on the VPS
cd ~/web/my-blog

# pull from the branch
git pull origin main

# followed by instructions specific to your project that you used to do manually
export PNPM_HOME="/home/circleci/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Install dependencies
pnpm i

# Build my static blog.
# I'm using 11ty so the out dir will be `_site/`
pnpm build

```

4. Login to your CircleCI account, create a new project and connect it to your blog repo.

5. Go to your Project Settings, create 2 environment variables: `USER=circleci` and `IP=<your_server_ip>`.

6. Under **Additional SSH Keys**, add your private key that you've created for `circleci` user.

# Setup NGINX

1. SSH into your server as a **`sudo` user**, _not as user `circleci`_.

2. Make sure NGINX has been installed and is running:

-   To make sure NGINX has been installed:

```bash
nginx -v
```

-   To make sure NGINX is running:

```bash
sudo systemctl status nginx
```

-   If it says _Active_, proceed to the next step. If not, start NGINX with: `sudo systemctl enable nginx && sudo systemctl start nginx`

3. Create our NGINX site config file at `/etc/ngixn/sites-available/`:

```bash
sudo vi /etc/nginx/sites-available/my-blog.conf
```

with this content:

```conf
# /etc/nginx/sites-available/my-blog.conf
server {
                listen 80;
                listen [::]:80;

                root /home/circleci/web/my-blog/_site;
                index index.html index.htm index.nginx-debian.html;

                server_name yourdomain.com;
                error_page 404 = /404.html;

                location /404.html {
                        internal;
                }

                location / {
                        try_files $uri $uri/ =404;
                }
}
```

4. Check our NGINX config file:

```bash
sudo nginx -t
```

If it says _OK_, proceed to the next step!

5. Restart NGINX:

```bash
sudo systemctl restart nginx
```

Your blog is now live at `yourdomain.com`!

# A few notes

-   From now on, each time you `git push` successfully to the `main` branch, CircleCI will run the steps in our `.circleci/config.yml` file in our repo.
-   Make sure to not make user `circleci` a `sudo user` for security purposes.
-   Make sure to have `export PATH` in your `deploy-blog.sh` script. This is important as CircleCI won't have access to user `circleci`'s `$PATH` when SSH to our VPS (_p/s: I spent **hours** fixing this bug_).

# References

{%newtab_link 'https://www.digitalocean.com/community/tutorials/how-to-automate-deployment-using-circleci-and-github-on-ubuntu-18-04' 'How To Automate Deployment Using CircleCI and GitHub on Ubuntu 18.04 | DigitalOcean'%}
