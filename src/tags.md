---
layout: default
title: Tags
---

{% for tag in collections.tagList %}

<span>
    <a href="/tags/{{ tag }}"><button class="bg-white text-black font-semibold py-2 px-4 border border-gray-400 rounded-lg mr-6 mb-4">
        {{ tag }}
    </button>
    </a>
</span>
{% endfor %}
