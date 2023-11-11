---
title: Threat hunting vs Security analytics
description: In cybersecurity threat hunting, this involves developing a specific hypothesis or theory about a potential security threat, based on available data or information, and then conducting investigations to confirm or refute the hypothesis
date: "2023-11-10"
ogImage: /assets/images/og/threat-hunting.webp
tags:
  - tech
  - cybersecurity
---

### Content

- [Hypothesis-driven investigation](#hypothesis-driven-investigation)
  - [Scenario](#scenario)
- [Threat Hunting vs Security Analytics](#threat-hunting-vs-security-analytics)

This is Week 8 at {%newtab_link 'https://www.codepath.org/courses/cybersecurity' 'CodePath'%}'s Intermediate Cybersecurity course!

# Hypothesis-driven investigation

This involves developing a specific hypothesis or theory about a potential security threat, based on available data or information, and then conducting investigations to confirm or refute the hypothesis.

The hypothesis may be derived from various sources to gather evidence that supports or contradicts the hypothesis:

- Threat intelligence
- Network analysis
- System logs
- User behavior analysis

&rarr; Allows cybersecurity professionals to focus their investigations on potential threats that are most likely to pose a risk to their organization, rather than trying to identify and investigate every potential threat.

&rarr; Speed up the investigation process by providing a clear direction for the investigation and enabling analysts to prioritize their efforts based on the level of risk posed by the threat.

## Scenario

**Hypothesis**: A malicious actor has gained unauthorized access to a company’s network and is exfiltrating sensitive data.

**Investigation:**

- Collect network logs and analyze them for any suspicious activity, such as unusual login attempts or data transfers.
- Check endpoint logs to see if any devices are communicating with known malicious domains or IP addresses.
- _etc._
- If the hypothesis is confirmed, take appropriate actions to remediate the threat, such as isolating affected devices and updating security protocols.

→ By using a hypothesis-driven approach, the investigation is focused on a specific threat scenario and prioritizes the collection and analysis of data that is most likely to confirm or refute the hypothesis.

# Threat Hunting vs Security Analytics

|                     | Threat hunting                                                                                                                                    | Security analytics                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Focus**           | A **proactive** approach that focuses on finding and mitigating threats that may have gone undetected by other security controls                  | A **reactive** approach that analyzes data after an event has occurred to identify indicators of compromise (IoCs) and prevent similar incidents in the future. |
| **Approach**        | **Hypothesis-driven** approach that involves formulating hypotheses about potential threats and searching for evidence to confirm or refute them. | **Data-driven** approach that involves analyzing large volumes of data to identify patterns and anomalies that may indicate a potential threat.                 |
| **Human expertise** | Relies on **human expertise** and intuition to formulate hypotheses, identify potential threats, and make decisions about remediation.            | Can be **automated** and relies on algorithms and machine learning models to analyze data and identify potential threats.                                       |
| **Timeframe**       | An ongoing, continuous process that involves regular assessments of the environment and searching for potential threats.                          | Typically focused on a specific timeframe, such as analyzing data from the past 24 hours or analyzing data related to a specific incident.                      |
