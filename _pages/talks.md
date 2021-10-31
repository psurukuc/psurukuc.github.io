---
layout: page
permalink: /talks/
title: Talks 
description: List of talks and presentattions
types: ["Invited","Conference","Poster"]
nav: false
order: 10
---

<div class="publications">
{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  {% bibliography -f talks -q @*[abbr={{t}}]* %}
{% endfor %}
</div>