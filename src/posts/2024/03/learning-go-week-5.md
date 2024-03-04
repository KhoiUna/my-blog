---
title: "Learning Go — Week 5"
description: "Have not made any update to my Golang journey, because I had been busy building my first Golang project over the past few weeks. This project was built with NextJS on the frontend and Go as the API backend server"
date: "2024-03-03"
ogImage: /assets/images/og/go-logo.webp
tags:
    - tech
    - golang
---

Have not made any update to my Golang journey, because I had been busy building my first Golang project over the past few weeks.

This project was built with NextJS on the frontend and Go as the API backend server.

# How it started

Having learned Golang for a while, I was looking for an idea of what to build. Luckily, one day, a close friend/co-worker of my aunt hit me up and asked if I could build an online storefront for him.

Of course, I said yes! Given a deadline of 4 weeks, my goal was to get it done fast, and works well enough. Also, I had to use Golang, yes, forcing myself to learn Golang hands-on in 4 weeks.

# The tech

After researching, I decided to use SQLite (no need to setup a SQL user, ROLE, etc.) &rarr; _KISS — Keep It Stupid Simple!_

> SQLite works great as the database engine for most low to medium traffic websites... The amount of web traffic that SQLite can handle depends on how heavily the website uses its database... any site that gets fewer than 100K hits/day should work fine with SQLite... SQLite has been demonstrated to work with 10 times that amount of traffic. — {%newtab_link 'https://www.sqlite.org/whentouse.html' 'SQLite.org'%}

To interact with the SQLite database, I used {%newtab_link 'https://gorm.io/' 'Gorm'%} — a Golang ORM.

> Object-Relational Mapping (ORM) simplifies how programmers interact with databases by bridging the gap between relational data stored in databases and objects used in programming languages. Eg: translating object-oriented code into SQL queries.

And instead of using Go's pure `net/http` package, I used {%newtab_link 'https://gofiber.io/' 'Fiber'%} — a NodeJS Express-inspired web framework written in Go, so I could have the syntax familiarity from Express and still the high performance of Go.

# Result

After making many changes for the client, finally launched the site — {%newtab_link 'https://www.5piecesclothing.com/' '5Pieces Clothing'%}!

You can check out the {%newtab_link 'https://github.com/KhoiUna/nextjs-go-ecommerce-cms' 'open source'%} version as well!

# Reflection

Go is very strict about types. There were times I wanted to build fast, but had to go back to fix the _type_ issues. Oh, and Go also doesn't like the unused variables, too.

Using Gorm was quite a pain, I might've have used raw SQL instead 😅.

Thank you for reading! Feel free to contribute to {%newtab_link 'https://github.com/KhoiUna/nextjs-go-ecommerce-cms' 'NextJS + Go Ecommerce CMS'%}!
