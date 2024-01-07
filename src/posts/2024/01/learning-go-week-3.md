---
title: "Learning Go — Week 3"
description: "Week 3 of learning Golang. It's been a while! Yeah, I just graduated and spent some time traveling with my parents! Recently, I've been doing Go challenges on Exercism"
date: "2024-01-06"
ogImage: /assets/images/og/go-logo.webp
tags:
    - tech
    - golang
---

It's been a while! Yeah, I just graduated and spent some time traveling with my parents!

Recently, I've been doing Go challenges on {%newtab_link 'https://exercism.org/' 'Exercism'%}. I've learned a few more concepts like: pointers, `strconv`, `struct`, `interface`. In my opinion, pointers seem like the most confusing concept to grasp when I started learning Go. After doing some challenges and slowly reading how it works, _I love it now_!

**Pointers** help you share memory with other parts of our program. When we have a large amount of data, making copies to pass between functions is inefficient. By passing pointers, you can access the single copy of the data directly &rarr; any changes made by one function are immediately visible to other parts of the program when the function ends.

{%asset_img 'go-exercism.webp' 'My Go progress on Exercism'%}

As you can see, I still have a few more Go concepts to go, then I'll build some projects with it.
