---
title: "Learning Go — Week 4"
description: "I love how Go does error-handling! Error handling is not done via exceptions in Go. Instead, errors are normal values of types that implement the built-in error interface"
date: "2024-01-08"
ogImage:
tags:
  - tech
  - golang
---

# Error handling

I love how Go does error-handling!

> Error handling is not done via exceptions in Go. Instead, errors are normal values of types that implement the built-in error interface. The error interface is very minimal. It contains only one method `Error()` that returns the error message as a string. — {%newtab_link 'https://exercism.org/tracks/go/concepts/errors' 'Exercism'%}

_Super minimal!_

However, this gives you the responsibility to be specific about your error message.

I didn't know that _by convention, the error message starts with a lowercase letter and not end with a period._

> Since most functions in Go include an error as one of the return values, you will see/use the if err != nil pattern all over the place in Go code.

You can use a struct to create a custom error type, as shown below:

```go
type MyCustomError struct {
  message string
  details string
}

func (e *MyCustomError) Error() string {
  return fmt.Sprintf("%s, details: %s", e.message, e.details)
}

func someFunction() error {
  // ...
  return &MyCustomError{
    message: "...",
    details: "...",
  }
}
```

Besides this, I also learned about Go's `regexp`.

# Zero values

Go does not have a concept of empty, null, or undefined for variable values. Variables declared without an explicit initial value default to the zero value for their respective type.

| Type          | Zero Value |
| ------------- | ---------- |
| **boolean**   | false      |
| **numeric**   | 0          |
| **string**    | ""         |
| **pointer**   | nil        |
| **function**  | nil        |
| **interface** | nil        |
| **slice**     | nil        |
| **channel**   | nil        |
| **map**       | nil        |

# First class functions

This is the last concept on Exercism that I need to learn.

Functions are first-class values. This means that you can do with functions the same things you can do with all other values - assign functions to variables, pass them as arguments to other functions or even return functions from other functions.

For instance:

```go
import "fmt"

func engGreeting(name string) string {
	return fmt.Sprintf("Hello %s, nice to meet you!", name)
}

// greeting is a variable of type func(string) string
greeting := engGreeting
fmt.Println(greeting("Alice"))

func dialog(name string, greetingFunc func(string) string) {
	fmt.Println(greetingFunc(name))
	fmt.Println("I'm a dialog bot.")
}
dialog("Alice", greeting)
```
