---
title: "Slowloris DDoS & how to mitigate with NGINX"
description: "What is denial-of-service (DDoS) attack? Here's a brief explanation. It's a malicious attempt to disrupt the normal traffic of a targeted server by overwhelming the target with a flood of Internet traffic"
date: "2023-10-16"
ogImage: /assets/images/posts/loris.webp
tags:
  - tech
---

### Content

- [What is denial-of-service (DDoS) attack?](<#what-is-denial-of-service-(ddos)-attack%3F>)
- [Slowloris DDoS](#slowloris-ddos)
  - [Slowloris attack occurs in 4 steps](#slowloris-attack-occurs-in-4-steps)
  - [Best way to stop a Slowloris attack](#best-way-to-stop-a-slowloris-attack)
- [Mitigate DDoS with NGINX](#mitigate-ddos-with-nginx)
- [References](#references)

# What is denial-of-service (DDoS) attack?

It's a malicious attempt to disrupt the normal traffic of a targeted server by overwhelming the target with a flood of Internet traffic.

> A DDoS attack is like an unexpected traffic jam clogging up the highway, preventing regular traffic from arriving at its destination.

Different types of DDoS attacks target varying components of a network connection. A network connection on the Internet is composed of many different components or “layers”.

The OSI model is a conceptual framework used to describe network connectivity in 7 distinct layers.

{% asset_img 'osi.png' 'OSI Model' %}

# Slowloris DDoS

A Slowloris DDoS attack is a type of DDoS attack targeting Layer 7 of the OSI model.

It was designed to overwhelm a single computer, web server, database, or API by opening and maintaining many simultaneous TCP connections to a target Fully Qualified Domain Name (FQDN) and generating a low rate and/or volumes of HTTP requests or HTTP connections per connected session.

> FQDN is written with the hostname and the domain name, including the top-level domain, in that order: *[hostname].[domain].[tld]*.<br/>
> Eg: www.microsoft.com, en.wikipedia.org, etc.

This type of DDoS attack is a simple but elegant method that allows an attacker to take down a web server with very low complexity.

Traditional application DDoS attacks are designed to take down a server by flooding it with an overwhelming number of HTTP requests. In contrast, a Slowloris attack only requires a few hundred requests at long, low, and regular intervals, rather than tens of thousands of HTTP requests on an ongoing basis.

> Fun fact: it's named after the slow loris — a slow-moving, Asian primate.

## Slowloris attack occurs in 4 steps

1. Attacker opens multiple connections sending multiple partial HTTP request headers to the targeted server.

2. The targeted server opens a thread for each incoming request with the intent of closing the thread once the connection is completed, or if a connection takes too long, the server will timeout the exceedingly long connection, freeing the thread up for the next request.

3. To prevent the target from timing out the connections, the attacker periodically sends partial request headers to the target in order to keep the request alive. In essence saying, _I’m still here! I’m just slow, please wait for me_.

4. The targeted server is unable to release any of the open partial connections, eventually, the server will be unable to respond to additional requests made from regular traffic, resulting in DoS.

## Best way to stop a Slowloris attack

1. **Rate limit incoming requests**
   - Limiting the number of connections a single IP address may request to open.
   - Increasing the minimum transfer speed allowed for any connection.
   - Limiting the time a client is allowed to stay connected.
2. **Increase server availability**
   - Increasing the maximum number of clients making requests to the server will increase the number of connections the attacker must make before they can overload the server. Realistically, an attacker may scale the number of attacks to overcome server capacity regardless of increases.
3. **Cloud-based protection**
   - Use a service that can function as a reverse proxy, protecting the origin server.
   - Deploying robust cloud mitigation services, configuring robust load balancers, using web application firewalls (WAFs) or other virtual patching techniques, and rate-limiting the number of requests per source.

# Mitigate DDoS with NGINX

NGINX is designed to be a _shock absorber_ for your site/application. It has a non‑blocking, event‑driven architecture that copes with huge amounts of requests without a noticeable increase in resource utilization.

Here are some code snippets to do so.

1. **Limit the rate of requests**

```conf
limit_req_zone $binary_remote_addr zone=one:10m rate=30r/m;

server {
    # ...
    location /login.html {
        limit_req zone=one;
    # ...
    }
}
```

2. **Limiting the Number of connections**

```conf
limit_conn_zone $binary_remote_addr zone=addr:10m;

server {
    # ...
    location /store/ {
        limit_conn addr 10;
        # ...
    }
}
```

3. **Closing Slow Connections**

```conf
server {
    client_body_timeout 5s;
    client_header_timeout 5s;
    # ...
}
```

4. **Denylisting IP Addresses**

```conf
location / {
    deny 123.123.123.0/28;
    # ...
}
```

Or

```conf
location / {
    deny 123.123.123.3;
    deny 123.123.123.5;
    deny 123.123.123.7;
    # ...
}
```

5. **Allowlisting IP Addresses**

```conf
location / {
    allow 192.168.1.0/24;
    deny all;
    # ...
}
```

6. **Blocking Requests**

```conf
location /foo.php {
    deny all;
}
```

Or if you discover that DDoS attack requests have a `User-Agent` header value of `foo` or `bar`, you can block those requests.

```conf
location / {
    if ($http_user_agent ~* foo|bar) {
        return 403;
    }
    # ...
}
```

7. **Limiting the Connections to Backend Servers**

```conf
upstream website {
    server 192.168.100.1:80 max_conns=200;
    server 192.168.100.2:80 max_conns=200;
    queue 10 timeout=30s;
}
```

There're probably way more! But as an intermediate cyber enthusiasts, I only got my hand on a few of these.

Thank you for reading this blog!

> Also, check out {%newtab_link 'https://amplify.nginx.com/login' 'this free tool'%} to monitor requests for your NGINX server!

# References

{%newtab_link 'https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/' 'Cloudflare | What is a DDoS attack?'%}

{%newtab_link 'https://www.cloudflare.com/learning/ddos/ddos-attack-tools/slowloris/' 'Cloudflare | Slowloris DDoS attack'%}

{%newtab_link 'https://www.akamai.com/glossary/what-is-a-slowloris-ddos-attack' 'Akamai | What Is a Slowloris DDoS Attack?'%}

{%newtab_link 'https://www.nginx.com/blog/mitigating-ddos-attacks-with-nginx-and-nginx-plus/' 'NGINX | Mitigating DDoS Attacks with NGINX and NGINX Plus'%}
