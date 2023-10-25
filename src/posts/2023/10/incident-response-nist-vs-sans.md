---
title: "Incident response &mdash; NIST vs SANS"
description: "Placed side-by-side in a list format, NIST and SANS have all the same components and the same flow. The biggest difference lies in Step 3, where NIST believes that containment, eradication, and recovery overlap – meaning you should not wait to contain all threats before beginning to eradicate them"
date: "2023-10-24"
ogImage: /assets/images/posts/incident-response.webp
tags:
  - tech
---

### Content

- [NIST and SANS](#nist-and-sans)
- [Comparing NIST and SANS incident response steps](#comparing-nist-and-sans-incident-response-steps)
  1. [Preparation](#preparation)
  2. [Detection and Analysis](#detection-and-analysis)
  3. [Containment, Eradication, & Recovery](#containment%2C-eradication%2C-%26-recovery)
  4. [Post Incident Activity](#post-incident-activity)

This is part of Week 6 of {%newtab_link 'https://www.codepath.org/' 'CodePath'%}'s Intermediate Cybersecurity course.

# NIST and SANS

**National Institute of Standards and Technology** ({%newtab_link 'https://www.nist.gov/' 'NIST'%}) is a U.S. government agency that specializes in all kinds of tech. The {%newtab_link 'https://www.nist.gov/cyberframework' 'NIST Cybersecurity Framework'%} is one of the most popular methodologies for better understanding and managing cybersecurity risk.

**Sysadmin, Audit, Network, and Security** ({%newtab_link 'https://www.sans.org/' 'SANS'%}) is a private org that researches and educates industries in the 4 key cyber disciplines. The SANS framework _primarily focuses on security_ as opposed to NIST, which has a wider domain of operation.

# Comparing NIST and SANS incident response steps

| NIST                                      | SANS              |
| ----------------------------------------- | ----------------- |
| 1. Preparation                            | 1. Preparation    |
| 2. Detection and Analysis                 | 2. Identification |
| 3. Containment, Eradication, and Recovery | 3. Containment    |
|                                           | 4. Eradication    |
|                                           | 5. Recovery       |
| 4. Post-Incident Activity                 | 6. Lesson Learned |

Placed side-by-side, NIST and SANS have all the same components and the same flow.

The biggest difference lies in Step 3, where NIST believes that containment, eradication, and recovery overlap – meaning _you should not wait to contain all threats before beginning to eradicate them_.

## Preparation

> No organization can spin up an effective Incident Response (IR) on a moment’s notice. A plan must be in place to both prevent and respond to events.

- Defining the CSIRT (Computer Security Incident Response Team)
- Developing and updating a plan
- Acquiring and maintain the proper infrastructure tools
- Possessing up to date threat intelligence capabilities

Having tools and resources available that may be of value during an incident handling.

- **Incident Handler Communication Facilities:** Contact information for IR team members, incident reporting mechanisms (such as phone numbers, email addresses, forms, etc), smartphones, war room, secure storage facility.
- **Incident Analysis Hardware & Software:** Laptops, digital forensics workstations, blank removable media, portable printer, packet sniffers, digital forensic software.
- **Incident Analysis Resources:** Port lists, documentation (for OSs, applications, IDS, antivirus), network diagrams and lists of critical assets, current baselines, cryptographic hashes.
- **Incident Mitigation Software:** Access to images of clean OS and application installations for restoration and recovery purposes.

**Preventing incident:** Keeping the number of incidents reasonably low with recommended practices: risk assessments, host and network security, malware prevention, user awareness and training.

## Detection and Analysis

1. **Attack vectors:** Some common ones include: external/removable media, attrition, web, email, etc.
2. **Signs of an incident**
3. **Incident analysis:** Once identified, the IR team has to determine if a precursor or indicator is part of an attack or if it is a false positive.
4. **Incident documentation:** If the signal proves valid, the IR team must begin documenting all facts in relation to the incident and continue logging all actions taken throughout the process.
5. **Incident Prioritization:** NIST designates this step as the **most critical decision point** in the IR process. The IR team can’t simply prioritize incidents on a first come, first serve basis. Instead, they must score incidents on the impact it will have on the business functionality, the confidentiality of affected information, and the recoverability of the incident.
6. **Incident notification**

## Containment, Eradication, & Recovery

> The purpose of the this phase is to halt the effects of an incident before it can cause further damage. Once an incident is contained, the IR team can take the time necessary to tailor its next steps.

1. **Containment:** an essential part of containment is decision-making (e.g. shut down a system, disconnect it from a network, disable certain functions). Criteria for determining the appropriate strategy include:
   - Potential damage to & theft of resources, need for evidence preservation, service availability, time & resources needed to implement strategy, effectiveness of strategy, & duration of solution.
   - In some cases, the attacker is redirected to a sandbox so that they can monitor the attacker’s activity.
2. **Evidence gathering and handling**
3. **Identifying the attacking hosts**
4. **Eradication and recovery:** during eradication, it is important to identify all affected hosts within the organization so that they can be remediated. For some incidents, eradication is either not necessary or is performed during recovery.

## Post Incident Activity

> Every incident should be an opportunity to learn and improve, but many organizations give little time or attention to this step.

1. **Lessons learned:** each incident response team should evolve to reflect new threats, improved technology, and lessons learned. If an organization doesn’t improve their systems after an incident, they are bound to have a repeat of events
2. **Using collected incident data:** this data can be put back into the risk assessment process, ultimately leading to the selection and implementation of additional controls.
3. **Audit:** Audits will identify problems and deficiencies that  can then be corrected.
4. **Evidence retention:**  A policy for how long evidence from an incident should be retained. Most choose to retain all evidence for months or years after the incident ends depending on data retention policies, cost, and potential legal actions.
