---
title: What is a network layer?
date: "2023-09-25"
tags:
  - tech
---

I am getting into Cybersecurity and trying to learn a few things about the fundamentals.

# What is a network?

A network is a group of two or more connected computing devices.

<!-- excerpt -->

Usually all devices in the network are connected to a central hub — for instance, a [router](https://www.cloudflare.com/learning/network-layer/what-is-a-router/). A network can also include [subnetworks](https://www.cloudflare.com/learning/network-layer/what-is-a-subnet/), or smaller subdivisions of the network.

Subnetworking is how very large networks, such as those provided by ISPs, are able to manage thousands of IP addresses and connected devices.

Think of the **Internet as a network of networks**: computers are connected to each other within networks, and these networks connect to other networks. This enables these computers to connect with other computers both near and far.

# What is a packet?

All data sent over the Internet is broken down into smaller chunks called _packets_.

At the network layer, networking software attaches a header to each packet when the packet is sent out over the Internet, and on the other end, networking software can use the header to understand how to handle the packet.

A header contains information about the content, source, and destination of each packet (somewhat like stamping an envelope with a destination and return address).

---

> 💡 <em>Protocol</em> is an agreed-upon way of formatting data so that two or more devices are able to communicate with and understand each other.

# OSI model

{% asset_img 'osi.png' 'OSI Model' %}

# TCP/IP model

**4. Application layer:** This corresponds, approximately, to layer 7 in the OSI model.

**3. Transport layer:** Corresponds to layer 4 in the OSI model.

**2. Internet layer:** Corresponds to layer 3 in the OSI model.

**1. Network access layer:** Combines the processes of layers 1 and 2 in the OSI model.
