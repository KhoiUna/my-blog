---
title: "What are SIEM and UEBA?"
description: "Let's dive into Security Information & Event Management (SIEM) and User and entity behavior analytics (UEBA)"
date: "2023-10-18"
ogImage:
tags:
  - tech
---

### Content

- [Security Information & Event Management (SIEM)](<#security-information-%26-event-management-(siem)>)
  - [Next-gen SIEM capabilitites](#next-gen-siem-capabilitites)
- [User and entity behavior analytics (UEBA)](<#user-and-entity-behavior-analytics-(ueba)>)
  - [3 pillars of UEBA](#3-pillars-of-ueba)
  - [Insider threats](#insider-threats)

Week 5 of my {%newtab_link 'https://www.codepath.org/courses/cybersecurity' 'CodePath'%}'s Intermediate Cybersecurity course!

# Security Information & Event Management (SIEM)

SIEM tools use rules and statistical correlations to turn log entries and events from security systems into actionable information.

- Detect threats in real time
- Manage incident response
- Forensic investigation on past security incidents
- Prepare audits for compliance purposes

SIEM combines 2 functions:

- SIM &mdash; security information management.
- SEM &mdash; security event management.

&rarr; Makes SIEM more well-rounded and an ubiquitous tool for any Security Operation Center (SOC).

Some SIEM tools include: Splunk Enterprise Security, Datadog Security Monitoring, Fortinet FortiSIEM, etc.

> In short, SIEM is a solution that helps organizations detect, analyze, and respond to security threats before they harm business operations. &mdash; {%newtab_link 'https://www.microsoft.com/en-us/security/business/security-101/what-is-siem' 'Microsoft'%}

## Next-gen SIEM capabilitites

Next-gen SIEM utilizes [User and entity behavior analytics (UEBA)](<#user-and-entity-behavior-analytics-(ueba)>) to go beyond rules and correlations, leveraging AI and deep learning techniques to look at patterns of human behavior.

- **Security orchestration and automation response (SOAR):** Next-gen SIEMs integrate with enterprise systems and _automate_ incident response. Eg: SIEM detects an alert for ransomware &rarr; SIEM performs containment steps automatically on affected systems before attackers encrypt the data &rarr; simultaneously creating communications or other notifications.

- **Complex threat identification:** Correlation rules can’t capture many complex attacks, because they lack context, or can’t respond to new types of incidents. With _automatic behavioral profiling_, SIEMs detect behavior that suggests a threat.

- **Detection without rules or signatures:** Many threats can't be captured with manually-defined rules or known attack signatures. SIEMs use _machine learning_ to detect incidents without pre-existing definitions.

- **Lateral movement:** SIEMs analyze data from across the network and multiple system resources to detect lateral movements &mdash; attackers move across network, IP addresses, etc.

- **Entity behavior analysis:** Critical assets on the network &mdash; servers, medical equipments, etc. &mdash; have unique behavioral patterns. SIEMs learn these patterns and _automatically_ discover anomalies suggesting a threat.

# User and entity behavior analytics (UEBA)

UEBA provides information on the behavior of users and other entities in the corporate network — [malicious insider](#insider-threats), compromised user, etc.

## 3 pillars of UEBA

**Analytics:** detects anomalies using a variety of analytics approaches — machine learning, statistical modeling, etc.

**Data sources:** ingest data from a general data repository such as a data lake or data warehouse, or through a SIEM. Can be from:

- Business context
- HR and user context
- External threat intelligence
- Events and logs
- Network flows and packets

## Insider threats

**Negligent insider:** An employee with privileged access to IT systems unintentionally puts their org at risk because they don’t follow the procedures.

**Malicious Insider:** employee intends to perform a cyber attack against the org.

**Compromised insider:** infiltrate an org and compromise a privileged user account.

<img width="580" height="610" src="https://info.varonis.com/hs-fs/hubfs/Imported_Blog_Media/ueba-vs-siem-2.png?width=1241&height=1304&name=ueba-vs-siem-2.png" alt="UEBA and SIEM comparison image"/>

<sub>Source: {%newtab_link 'https://info.varonis.com/hs-fs/hubfs/Imported_Blog_Media/ueba-vs-siem-2.png?width=1241&height=1304&name=ueba-vs-siem-2.png' 'Varonis'%}</sub>
