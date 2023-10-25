---
layout: default
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
  title: "{{ tag | capitalize }}"
---

{% for post in collections[tag] %}

<div class="py-5">
  <p>
    <span class="text-xl font-bold hover:underline"><a class="urls" href="{{ post.url }}">{{ post.data.title }}</a></span>
  </p>
  <em class="text-gray">{{ post.date | date: "%Y-%m-%d" }}</em>
  <p class="mt-4 text-gray">  
    {% if post.data.description %}{{ post.data.description | strip_newlines | slice: 0,161 | append: "..." }}{% endif %}
    {% if not post.data.description %}{{ post.data.post_excerpt | strip_newlines | strip_html | slice: 0,161 | append: "..." }}{% endif %}    
    <span class="hover:underline text-indigo-500"><a class="urls" href="{{ post.url }}">Read More</a></span>
  </p>
</div>
{% endfor %}
