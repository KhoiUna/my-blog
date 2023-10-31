---
title: "Threat intelligence APT and MISP"
description: Advanced Persistent Threat aims to infiltrate a company’s computer systems and steal information or disrupt operations. APT is persistent, meaning they keep trying even if they fail at first, and adapt their tactics to get around defenses. They attack over a long period of time, trying to achieve their goals
date: "2023-10-29"
ogImage: /assets/images/og/threat-intel.jpeg
tags:
  - tech
  - cybersecurity
---

### Content

- [Advanced Persistent Threat (APT)](<#advanced-persistent-threat-(apt)>)
  - [Who is concerned about APTs?](#who-is-concerned-about-apts%3F)
  - [Who uses APTs?](#who-uses-apts%3F)
  - [Dangers of APTs](#dangers-of-apts)
- [Threat Intelligence & Response](#threat-intelligence-%26-response)
- [Threat Intelligence Information Sharing](#threat-intelligence-information-sharing)
- [MISP - Threat Intelligence Sharing Platform](#misp---threat-intelligence-sharing-platform)
  - [Threat Intelligence Feeds](#threat-intelligence-feeds)

This is Week 7 of {%newtab_link 'https://www.codepath.org/' 'CodePath'%}.

# Advanced Persistent Threat (APT)

APT aims to infiltrate a company’s computer systems and steal information or disrupt operations. APT is persistent, meaning they keep trying even if they fail at first, and adapt their tactics to get around defenses. They attack over a long period of time, trying to achieve their goals.

## Who is concerned about APTs?

- Governments
- Corporations
- Any organizations holding sensitive info

## Who uses APTs?

- Nation-States — steal military secrets or to gain access to sensitive government systems.
- Criminal Organizations — steal credit card information or other valuable data that can be sold on the black market.
- Insiders — steal data or intellectual property from their own organization for personal gain.

## Dangers of APTs

**They are persistent:** they will continue to try to penetrate defenses until they succeed.

**They are adaptive:** they can change their tactics as defenders improve their security measures.

**They are a serious threat:** cause significant financial harm and/or compromise national security.

# Threat Intelligence & Response

{%newtab_link 'https://attack.mitre.org/' 'Adversarial Tactics, Techniques & Common Knowledge (ATT&CK)'%}: a framework that describes different tactics and techniques used by attackers during a cyber attack.

{%newtab_link 'https://car.mitre.org/' 'Cyber Analytics Repository (CAR)'%}: A collection of analytics and rules that can be used to detect and respond to cyber threats. CAR is like a set of tools that help an organization monitor its network for signs of an attack.

{%newtab_link 'https://capec.mitre.org/' 'Common Attack Pattern Enumeration and Classification (CAPEC)'%}: a catalog of different types of attacks that organizations might face; helps security teams understand the tactics and techniques used by attackers to exploit known weaknesses in cyber-enabled capabilities (e.g., SQL Injection, XSS, Session Fixation, Clickjacking); is like a _dictionary_ of different cyber attacks, with each attack type having a unique identifier and description.

# Threat Intelligence Information Sharing

The exchange of relevant data and insights about potential cyber threats among individuals or organizations.

Occurs via formal agreements or informal networks, and can involve the sharing of indicators of compromise, malware samples, or other data that can help identify and mitigate threats.

> It's like sharing information about suspicious activities with your neighbors so that everyone can take measures to protect themselves and their properties.

Sharing threat indicators with other organizations is mutually beneficial but comes with challenges as well.

You need to make sure **not to share confidential information**. You need to share it in a way that makes it both timely and actionable. etc.

# MISP - Threat Intelligence Sharing Platform

{%newtab_link 'https://misp-project.org/' 'Malware Information Sharing Platform (MISP)'%} is an open source software solution for collecting, storing, distributing and sharing cyber security indicators and threats about cyber security incidents analysis and malware analysis. MISP is designed by and for incident analysts, security and ICT professionals or malware reversers to support their day-to-day operations to share structured information efficiently.

## Threat Intelligence Feeds

These are _continuous_ streams of valuable info that provide timely and actionable details about potential or current threats. This info is collected from a variety of sources, analyzed, and then distributed by organizations dedicated to improving cybersecurity awareness. The content of these feeds varies widely, from comprehensive lists of malicious IPs and URLs to detailed malware analysis reports and risk ratings.

### Advantage

**Visibility**: By adding this feed, you get visibility into potential threats that are using the TOR network to mask their activities.

**Threat Intelligence**: This feed helps you understand and identify trends or patterns that might indicate a threat.

**Incident Response**: If you detect activity from an IP address on this list, it could be an indicator of a security incident that needs to be investigated.

### Caching a feed

When you cache a feed in MISP, you are essentially storing a local copy of the feed data in your MISP instance allowing you to:

- Access and analyze the data faster because you don't need to fetch the data from the feed source each time.
- Reduces the load on the feed source and can help prevent your access from being rate-limited or blocked if the feed source has such restrictions.

> You don't want to repeatedly ask the source for the exact same data!
