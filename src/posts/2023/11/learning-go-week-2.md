---
title: "Learning Go — Week 2"
description: "Week 2 of learning Golang: Speed-running has been my method of learning Go for the past week. Having learnt Python and C, I skipped some parts of A Tour of Go that I felt confident"
date: "2023-11-19"
ogImage: /assets/images/og/go-logo.webp
tags:
    - tech
    - golang
---

Speed-running has been my method of learning Go for the past week. Having learnt Python and C, I skipped some parts of {%newtab_link 'https://go.dev/tour/welcome/1' 'A Tour of Go'%} that I felt confident. Also, doing exercises on {%newtab_link 'https://exercism.org/tracks/go/concepts' 'Exercism — Go track'%} helps a lot!

The parts that I think I need to work on more are probably pointers (_since I've worked with Python more than C) and choosing between \_a value or pointer receiver_ for functions, still haven't done much of that part.

I also found this guide, {%newtab_link 'https://go.dev/talks/2013/bestpractices.slide' 'Twelve Go Best Practices'%}, which I thinks is useful for Go learners like me. I still need to work on more apps to get these _best practices_ in my head.

Anyway, I was just bored that I found this guide on how to build a {%newtab_link 'https://go.dev/doc/tutorial/web-service-gin' 'basic RESTful API with Go and Gin'%}. It's fun to build some small projects to learn. Also, love how Go's package manager is already built in with the Go CLI. If you want to install a package, just do:

```bash
go get <package name / GitHub URL>
```

Learning about Go's approach to format `time` is interesting. Go uses a default time string value `2006-01-02 15:04:05` for its layout. You can tweak this _layout_ string to create multiple time formats. Eg:

```go
const layout = "2006-Jan-02"
tm, _ := time.Parse(layout, "2014-Feb-04")

const layout = "Jan 2, 2006 at 3:04pm (MST)"
tm, _ := time.Parse(layout, "Feb 4, 2014 at 6:05pm (PST)")
```
