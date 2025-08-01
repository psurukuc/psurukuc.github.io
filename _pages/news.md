---
layout: page
title: News
permalink: /news/
description: "Stay updated with the latest news, achievements, and announcements from Surukuchi Lab. Follow our research breakthroughs, student accomplishments, conference presentations, awards, and collaborative milestones in neutrino physics research."
seo_title: "Latest News & Updates | Surukuchi Lab Neutrino Physics Research"
keywords: "Surukuchi Lab news, neutrino physics updates, research announcements, student achievements, conference news, physics awards, University of Pittsburgh physics news, CUORE CUPID PROSPECT updates"
announcements:
  limit: 15
  scrollable: true
nav: true
order: 6
---

<div class="news-intro">
  <div class="news-summary">
    <h3 style="margin-bottom: 1rem; color: var(--global-theme-color);">📰 Recent Updates</h3>
    <p style="font-size: 1.1rem; line-height: 1.6; text-align: justify; margin-bottom: 1.5rem;">
      Stay up-to-date with the latest developments, achievements, and announcements from our research group. Here you'll find news about publications, conferences, awards, new team members, and other exciting updates from our ongoing work in neutrino physics.
    </p>
  </div>
</div>

<div class="news-content">
  <h2 class="section-header">
    📅 All Announcements
  </h2>
  <div style="background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-bg-color) 100%); height: 3px; width: 100%; margin: 10px 0 30px 0; border-radius: 2px;"></div>
  
  <div class="news-list">
    {% include news.liquid limit=false %}
  </div>
</div>