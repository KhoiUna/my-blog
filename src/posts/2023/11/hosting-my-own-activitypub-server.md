---
title: "Hosting my own ActivityPub server"
description: I love self-hosting. The idea of running someone else's software is beautiful and satisfying. Like learning how to bake a cake from a recipe, if it turns out great, you relish the sweet taste of both success and independence
date: "2023-11-12"
ogImage: /assets/images/og/mastodon.webp
tags:
  - tech
---

I love self-hosting. The idea of running someone else's software is beautiful and satisfying. Like learning how to bake a cake from a recipe, if it turns out great, you relish the sweet taste of both success and independence.

Lately, I have been passionate about the idea of decentralization. For me, decentralization _in a not technical way_ is independence. It is equality giving power to everyone.

This leads me to experiment with platforms like Mastodon. Digging a bit deeper, the underlying tech that powers these platforms is a protocol &mdash; {%newtab_link 'https://activitypub.rocks/' 'ActivityPub'%}. With a shared protocol, developers build social apps that can _talk_ to each other, build creative and sleek clients to interact with users on these platforms, _sort of like emails_.

In this post, I'll compare 2 open-source ActivityPub servers that you can run on your own VPS &mdash; {%newtab_link 'https://gotosocial.org/' 'GoToSocial'%} and {%newtab_link 'https://pleroma.social/' 'Pleroma'%}. These two are pretty lightweight compared to Mastodon so they won't eat up your server's resources.

# GoToSocial vs Pleroma

> Note: GoToSocial at this time of writing is still in alpha.

|                          | GoToSocial                                                                                                                                                                                                                                                                               | Pleroma                                                                                                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Programming language** | Go                                                                                                                                                                                                                                                                                       | Elixir                                                                                                                                                                                                                         |
| **Ease of deployment**   | Easier in my opinion. Offers running from binary and Docker. However, you can customize more if running from binary.                                                                                                                                                                     | Has more compilation steps.                                                                                                                                                                                                    |
| **User interface**       | Doesn't have a web UI like Pleroma or Mastodon, so you'll have to look for a web client. It only has a web UI for settings and profile page that you can {%newtab_link 'https://github.com/superseriousbusiness/gotosocial/blob/main/CONTRIBUTING.md#stylesheet--web-dev' 'customize'%}. | Has its own web UI and you can {%newtab_link 'https://docs-develop.pleroma.social/frontend/HACKING/#replacing-your-instances-frontend-with-custom-fe-build' 'customize'%} it. However, it's hard to maintain, not recommended. |

Another issue I encountered was trying to use DNS proxy with Cloudflare. GoToSocial works fine, but not Pleroma. I had to disable _Proxied with Cloudflare_ in my DNS settings in order to access Pleroma.

Now, go ahead and set up your own ActivityPub server then tell me what you think.

Here are my favorite client apps to interact with the Fediverse:

- {%newtab_link 'https://github.com/elk-zone/elk' 'Elk'%}
- {%newtab_link 'https://apps.apple.com/us/app/woolly-for-mastodon/id6444360628' 'Woolly for iOS'%}

To comment or give feedback on this blog post, you can leave them {%newtab_link 'https://main.elk.zone/platopunk.com/@khoi/01HF3FD2Y01QEBV1Y0RDQ965XW' 'here'%}.
