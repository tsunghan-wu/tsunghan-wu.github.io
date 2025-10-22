---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

My recent research aims to make human–AI interaction more natural and adaptive. Models should handle diverse user inputs (e.g.,  false premises, long contexts, and interruptions) while producing outputs that self-correct, avoid hallucination, and align human preference. Please also see my <a href="https://scholar.google.com.tw/citations?user=ykuVSuEAAAAJ">Google Scholar</a> for the complete publication list.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single-publication.html %}
{% endfor %}
