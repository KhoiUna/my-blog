---
title: "Lessons from developing an app for my university"
date: "2022-01-24"
tags:
  - tech
---

# **TL;DR**

I build an app for my university. Here are some things I learn:

<!-- excerpt -->

- Focus on minimal UI.
- Utilize UI library.
- To maximize speed, prioritize usability over scalability.
- Pick a tech stack that you are comfortable with to build the product faster.

---

Building an app for my university is my first attempt to make a product for more than 200 users. Not a lot since the app is only used by a small group of international students on campus.

The app is a student engagement tracking app. However, it is still simpler than that. The purpose of the app is for students to upload their selfies taken at events, and in return, they will have a signature or a proof of participation which is given by the _navigators_ - the ones who help manage international students.

Anyway, before building an app, you should ask yourself why. _How can it improve the experience for the targeted users?_ In this case, I know this app will save a lot of time. Before this app, most of the things were done on paper. Students took their photos, brought them to the office, and showed them to the navigators. Navigators will then give them a signature on paper which they had to keep and tried not to lose it. With this app, students do not have to carry their signature sheets around. And, navigators do not have to deal with students coming to the office and give them the signatures. Additionally, the number of international students coming to the university was expected to rise.

When making this app, there are 2 sides I have to focus on: the navigators and the students. I have to design a simple user experience for navigators to easily approve or reject students’ submissions. And for the students, a single page where they can submit their photos without logging in so they do not have to deal with the hassle of creating an account and forgetting their passwords.

It was winter. And new students were supposed to arrive during the spring around January. I started developing the app around November. However, I wanted to build fast, get feedback from navigators, and iterate.

My initial step was planning:

- Sketching the user interface to get the basic components of the app.
- Think of what kind of data the app will display.
- Design the databases and relationships.

My second step was coding the app’s UI:

- Focus on minimal UI. Don’t spend time trying to add a hover effect on a button.
- Utilize UI library (I used Material UI) to avoid writing CSS code.

The third step was building the prototype to show it to the navigators. I did not even use any database for this:

- I coded a little bit of Express and Socket.IO for the backend.
- The uploaded image was encoded to base64 and would be sent through the socket.
- On the admin page, I received data sent through the socket and stored it in the browser’s local storage.

A prototype was made with not much coding!

After getting feedback and iterating the MVP, it is time to move to the next step: code the complete product! Here are some things I notice:

- To maximize speed, prioritize usability over scalability. In this case, I know my users are a small group of international students and the information I am collecting is not sensitive so there are no reasons to implement a bunch of security measures.
- Pick a tech stack that you are comfortable with to build the product faster.

After the launch, it was thrilling to see people start using what you had built. But problems would arise. For instance:

- Students use different phones. And the app won’t work on some phones or browsers. One thing I remembered was that my website was blocked by WeChat’s in-app browser saying that “_This is an insecure website_”.
- Some students want to see their submissions even though they are yet to be approved. So I put a text after they submit to tell them to wait for the approval. However, it was not read or ignored by some students probably because the text was green.

So the lesson here is there will always be incompatibility somewhere along the road. And there will be ways to get around with it. Design is important, in this case, text placement, and color.

In the end, the great thing after all of this is that I gain more experience as a developer, also as a designer. Another thing is, not trying to show off but, I was offered a $500 scholarship for the service.

<hr/>
<br/>

# Resources

[GitHub | Global Lions Community Super App for University of North Alabama](https://github.com/KhoiUna/glc-apps)
