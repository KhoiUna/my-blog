---
title: "What are packet sniffers & how to use Snort"
description: "What are packet sniffers & how to use Snort"
date: "2023-10-03"
ogImage: /assets/images/posts/snort.webp
tags:
  - tech
  - cybersecurity
---

# Packet sniffers

## How they work

- Packet sniffers work by **intercepting** and **logging network traffic** via the wired or wireless network interface on its host computer.

<!-- excerpt -->

- Once the **raw** packet data is captured, the packet sniffing software analyzes it and **presents it in a readable form** so that the person using the software can make sense of it.

## Ways to intercept traffic

**Port Mirroring:** Used on a network switch to send a copy of network packets seen on one switch port to a network monitoring connection on another switch port.

**Network Tap:** A device that allows you to monitor and access data that is transmitted over a network.

## **Tools To Perform Packet Capture**

- Wireshark

- Tcpdump

- **Snort:** a **packet sniffer** that monitors network traffic, scrutinizing each packet closely to detect a dangerous payload or suspicious anomalies.

# Snort

## What it is

> [Snort](https://www.snort.org/) is the foremost Open Source Intrusion Prevention System (IPS) in the world.

Snort IPS uses a series of rules that help define malicious network activity and uses those rules to find packets that match against them and generates alerts for users.

Snort has 3 primary uses:

- As a **packet sniffer** like tcpdump.
- As a **packet logger** - which is useful for network traffic debugging.
- As a _full-blown_ **network intrusion prevention system**.

## How it works

Snort works by taking in a text file - where you define all the rules - as an input, then Snort will act based on these rules.

The below picture shows you what makes a Snort rule:

![Components of a Snort rule](https://cyvatar.ai/wp-content/uploads/2022/01/Post15Graphic_6.1.22_-1536x768.png)
<em><sub>Source: https://cyvatar.ai/write-configure-snort-rules/</sub></em>

## How to use it

To use Snort, first I write my rule in `local.rules` file:

```txt
alert icmp any any -> any any ( msg:"ICMP Traffic Detected"; sid:10000001; metadata:policy security-ips alert;)
```

This rule alerts me any `icmp` traffic on the network. Make sure to change Snort config file `snort.lua` to include the `local.rules` file.

```txt
ips =
{
  enable_builtin_rules = true,
  include = RULE_PATH .. "/local.rules",
  variables = default_variables
}
```

Then run:

```sh
sudo snort -c /usr/local/etc/snort/snort.lua -i eth0 -A alert_fast -s 65535 -k none
```

- `sudo`: This command is run with superuser privileges, as Snort typically requires administrative access to capture and analyze network traffic.

- `snort`: This is the actual Snort command-line tool.

- `-c /usr/local/etc/snort/snort.lua`: This option specifies the configuration file for Snort. In this case, it points to the configuration file located at `/usr/local/etc/snort/snort.lua`.

- `-i eth0`: This option specifies the network interface to monitor. In this case, it's set to `eth0`, which is a common network interface name in Linux systems. Snort will listen on this network interface to capture network traffic.

- `-A alert_fast`: This option specifies the alerting mode to use. The `alert_fast` mode is a more efficient alerting mode that quickly alerts on suspicious traffic without extensive packet logging.

- `-s 65535`: This option sets the _snaplen_ (snap length) for packet capture. It determines the maximum number of bytes to capture from each packet. A snaplen of 65535 means that Snort will capture the entire packet, up to the maximum allowed by the Ethernet frame size.

- `-k none`: This option specifies how to handle sticky buffers. In this case, it's set to `none`, meaning that sticky buffers are not used.

_That's it! Hope you enjoy this brief intro to Snort!_
