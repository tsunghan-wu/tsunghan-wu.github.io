---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can check my <a href="https://scholar.google.com.tw/citations?user=ykuVSuEAAAAJ&hl=zh-TW&authuser=1">Google Scholar profile</a> or <a href="https://tsunghan-wu.github.io/files/cv.pdf">CV</a> to see the complete publication list.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
