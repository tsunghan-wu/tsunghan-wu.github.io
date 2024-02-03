---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also see my <a href="https://scholar.google.com.tw/citations?user=ykuVSuEAAAAJ&hl=zh-TW&authuser=1">Google Scholar Profile</a> for the complete publication list.

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
