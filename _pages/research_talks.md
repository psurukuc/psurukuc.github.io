---
layout: page
permalink: /research_talks/
title: Talks 
description: "Browse scientific talks and presentations by Surukuchi Lab members."
seo_title: "Scientific Talks & Presentations | Surukuchi Lab Neutrino Physics"  
keywords: "physics talks, neutrino conferences, CUORE, CUPID, PROSPECT, double-beta decay"
types: ["Invited","Conference","Poster"]
nav: true
order: 5
---

<!-- <div class="talks-intro">
  <div class="talks-summary">
    <h3 style="margin-bottom: 0.8rem; color: var(--global-theme-color);">📊 Talk Summary</h3>
    <div class="talk-counts">
      {% for t in page.types %}
        <a href="#{{ t | downcase }}-presentations" class="talk-type-badge">
          <strong>{{t}}:</strong> {% bibliography_count -f talks -q @*[abbr={{t}}]*  %}
        </a>
      {% endfor %}
    </div>
  </div>
</div> -->

<div class="talks-content">
  <div class="publications">
    {% for t in page.types %}
      <div class="talk-category" id="{{ t | downcase }}-presentations">
        <h2 class="category-header">
          {% if t == "Invited" %}🎯{% endif %}
          {% if t == "Conference" %}🏛️{% endif %}
          {% if t == "Poster" %}📋{% endif %}
          {{ t }} Presentations
        </h2>
        <div class="category-line" style="background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-bg-color) 100%); height: 2px; width: 100%; margin: 8px 0 20px 0; border-radius: 2px;">
        </div>
        
        <div class="talk-list">
          {% bibliography -f talks -q @*[abbr={{t}}]* %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>
