---
layout: page
permalink: /research_talks/
title: Talks 
description: List of talks and presentations arranged by type in reverse chronological order
types: ["Invited","Conference","Poster"]
nav: true
order: 5
---

<div class="talks-intro">
  <div class="talks-summary">
    <h3 style="margin-bottom: 1rem; color: var(--global-theme-color);">📊 Talk Summary</h3>
    <div class="talk-counts">
      {% for t in page.types %}
        <span class="talk-type-badge">
          <strong>{{t}}:</strong> {% bibliography_count -f talks -q @*[abbr={{t}}]*  %}
        </span>
      {% endfor %}
    </div>
  </div>
</div>

<div class="talks-content">
  <div class="publications">
    {% for t in page.types %}
      <div class="talk-category">
        <h2 class="category-header">
          {% if t == "Invited" %}🎯{% endif %}
          {% if t == "Conference" %}🏛️{% endif %}
          {% if t == "Poster" %}📋{% endif %}
          {{ t }} Presentations
        </h2>
        <div class="category-line" style="background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-bg-color) 100%); height: 3px; width: 100%; margin: 10px 0 30px 0; border-radius: 2px;">
        </div>
        
        <div class="talk-list">
          {% bibliography -f talks -q @*[abbr={{t}}]* %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
