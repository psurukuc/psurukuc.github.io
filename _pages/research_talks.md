---
layout: page
permalink: /research_talks/
title: Talks 
description: "Browse scientific talks and presentations by Surukuchi Lab members. Our presentations cover neutrinoless double-beta decay, reactor neutrino physics, cryogenic detector development, and results from CUORE, CUPID, and PROSPECT experiments at international conferences and workshops."
seo_title: "Scientific Talks & Presentations | Surukuchi Lab Neutrino Physics"
keywords: "physics talks, neutrino conferences, CUORE presentations, CUPID talks, PROSPECT seminars, double-beta decay, particle physics presentations, University of Pittsburgh physics talks"
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
