---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

My current research focuses on **Visual Reasoning** and **Human-Centered AI**, aiming to make human–AI interaction more natural, adaptive, and trustworthy. Before joining the PhD program at UC Berkeley, my research was dedicated to **Low-Cost Perception**, developing cost-effective visual autonomous systems for the changing world.

Please also see my <a href="https://scholar.google.com.tw/citations?user=ykuVSuEAAAAJ">Google Scholar</a> for the complete publication list.

{% include base_path %}

{% assign topics = "Visual Reasoning,Human-Centered AI,Low-Cost Perception" | split: "," %}
{% assign intros = "Developing grounded visual reasoning through verification and correction in vision-language and diffusion models.,Advancing human--AI interaction under real-world dynamics with a focus on human interruption and preference analyses.,Reducing perception cost with limited labels (active learning), domain adaptation, and cheap sensors." | split: "," %}

{% for topic in topics %}
  {% assign index = forloop.index0 %}
  {% assign topic_slug = topic | slugify %}
  {% assign topic_pubs = site.publications | where: "selected", true | where: "topic", topic | sort: "date" | reverse %}
  
  <div class="topic-section">
    <input type="checkbox" id="toggle-{{ topic_slug }}" class="see-more-checkbox">
    <div class="topic-header">
      <h2 class="archive__subtitle">{{ topic }}</h2>
      {% assign older_pubs_count = 0 %}
      {% for post in topic_pubs %}
        {% unless post.highlight == "New!" %}
          {% assign older_pubs_count = older_pubs_count | plus: 1 %}
        {% endunless %}
      {% endfor %}

      {% if older_pubs_count > 0 %}
        <label for="toggle-{{ topic_slug }}" class="see-more-label"><span class="toggle-text"></span></label>
      {% endif %}
    </div>
    
    <p class="topic-intro"><i>{{ intros[index] }}</i></p>
    
    <div class="new-papers-list">
      {% for post in topic_pubs %}
        {% if post.highlight == "New!" %}
          {% include archive-single-publication.html %}
        {% endif %}
      {% endfor %}
    </div>

    <div class="older-papers-list">
      {% for post in topic_pubs %}
        {% unless post.highlight == "New!" %}
          {% include archive-single-publication.html %}
        {% endunless %}
      {% endfor %}
    </div>
  </div>

{% endfor %}
