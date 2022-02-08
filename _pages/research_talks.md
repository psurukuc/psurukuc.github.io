---
layout: page
permalink: /research_talks/
title: Talks 
# description: List of talks and presentattions arranged in reverse chronological order
types: ["Invited","Conference","Poster"]
nav: true
order: 3
---

<div class="select_publications">
  <p>
    {% for t in page.types %}
     {{t}}: {% bibliography_count -f talks -q @*[abbr={{t}}]*  %} &nbsp;&nbsp;&nbsp; 
    {% endfor %}
  </p>
</div>
<div class="publications">
{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  {% bibliography -f talks -q @*[abbr={{t}}]* %}
{% endfor %}
</div>
