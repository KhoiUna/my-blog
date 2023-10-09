---
title: What is a DNS SOA (Start of Authority)
description: The DNS start of authority (SOA) record stores important information about a domain or zone such as the email address of the administrator, when the domain was last updated, and how long the server should wait between refreshes
date: "2023-10-08"
ogImage: https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80
tags:
  - tech
---

### Content

- [Intro](#intro)
- [What is an SOA](#what-is-an-soa)
- [What makes an SOA](#what-makes-an-soa)
- [Resources](#resources)

# Intro

I was trying to set up 4 VMs to configure a DNS as a class assignment, and _boy, are they confusing_!

There are so many things I've taken for granted like how easy it is to buy a domain, then you just have to configure the A and CNAME record all on the domain registrar's dashboard.

As a result, I spent more time to learn a few things about DNS, and that's how {% newtab_link 'https://www.cloudflare.com/learning/dns/dns-records/dns-soa-record/' 'SOA (Start of Authority)' %} became the subject of this blog post. Here is a brief intro to SOA!

# What is an SOA

The DNS SOA record stores important information about a domain or zone such as the email address of the administrator, when the domain was last updated, how long the server should wait between refreshes, etc.

All DNS zones need an SOA record in order to conform to {% newtab_link 'https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force' 'IETF' %} standards. SOA records are also important for zone transfers.

> In DNS, zone is an area of control over namespace. A zone can include a single domain name, one domain and many subdomains, or many domain names. In some cases, zone is essentially equivalent with domain, but this is not always true.

# What makes an SOA

Given this SOA record:

| name        | <span>example.com</span>          |
| ----------- | --------------------------------- |
| record type | SOA                               |
| MNAME       | <span>ns.primaryserver.com</span> |
| RNAME       | <span>admin.example.com</span>    |
| SERIAL      | 1111111111                        |
| REFRESH     | 86400                             |
| RETRY       | 7200                              |
| EXPIRE      | 4000000                           |
| TTL         | 11200                             |

- **Serial number:** is a version number for the SOA record. In the example above, the serial number is listed next to _SERIAL_. When the serial number changes in a zone file, this alerts secondary nameservers that they should update their copies of the zone file via a zone transfer.
- **MNAME:** is the name of the primary nameserver for the zone. Secondary servers that maintain duplicates of the zone's DNS records receive updates to the zone from this primary server.
- **REFRESH:** The length of time (in seconds) secondary servers should
  wait before asking primary servers for the SOA record to see if it has
  been updated.
- **RETRY:** The length of time a server should wait for asking an unresponsive primary nameserver for an update again.
- **EXPIRE:** If a secondary server does not get a response from the
  primary server for this amount of time, it should stop responding to
  queries for the zone.

Below is what SOA looks like on a Debian VM (that's what I used for the assignment):

```db
$TTL    604800
@       IN      SOA     ns1.computingforgeeks.local. root.ns1.computingforgeeks.local. (
                              3         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
;@      IN      NS      localhost.
;@      IN      A       127.0.0.1
;@      IN      AAAA    ::1

;Name Server Information

@        IN      NS      ns1.computingforgeeks.local.

;IP address of Name Server

ns1     IN      A       192.168.1.12

;Mail Exchanger

computingforgeeks.local.   IN     MX   10   mail.computingforgeeks.local.

;A – Record HostName To Ip Address

www     IN       A      192.168.1.13
mail    IN       A      192.168.1.14

;CNAME record

ftp     IN      CNAME   www.computingforgeeks.local.
```

Hope you learn something today!

# Resources

{%newtab_link 'https://computingforgeeks.com/configure-master-bind-dns-server-on-debian/' 'ComputingforGeeks - Configure BIND Master DNS Server on Debian 11/10'%}
