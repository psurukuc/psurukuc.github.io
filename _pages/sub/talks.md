---
layout: page
permalink: /sub/talks/
title: Talks 
# description: List of talks and presentattions arranged in reverse chronological order
types: ["Invited","Conference","Poster"]
nav: false
order: 10
---

<div class="select_publications">
{% for t in page.types %}
  <p>
    {% bibliography_count -f talks -q @*[abbr={{t}}]*  %} {{t}}
  </p>
{% endfor %}
</div>
<div class="publications">
{% for t in page.types %}
  <h2 class="year">{{t}}</h2>
  {% bibliography -f talks -q @*[abbr={{t}}]* %}
{% endfor %}
</div>
