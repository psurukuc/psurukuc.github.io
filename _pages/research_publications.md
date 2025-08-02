---
layout: page
permalink: /research_publications/
title: Publications
description: "Comprehensive list of scientific publications from Surukuchi Lab covering neutrino physics research, neutrinoless double-beta decay studies, reactor neutrino detection, and detector development. Our work contributes to major collaborations including CUORE, CUPID, and Project 8 experiments."
seo_title: "Publications - Neutrino Physics Research Papers | Surukuchi Lab"
keywords: "neutrino physics publications, CUORE papers, CUPID research, PROSPECT publications, double-beta decay papers, particle physics research, University of Pittsburgh physics publications, peer-reviewed articles"
current_year: 2025
paper_types: [Thesis, Refereed, Under Review, Preprint, Proceedings]
nav: true
order: 6
---

<div class="publications-intro">
  <div class="publications-summary">
    <h3 style="margin-bottom: 0.8rem; color: var(--global-theme-color);">📊 Publication Summary</h3>
    <div class="publication-counts">
      {% for p in page.paper_types %}
        <a href="#{{ p | downcase | replace: ' ', '-' }}-publications" class="publication-type-badge">
          <strong>{{p}}:</strong> {% bibliography_count -f papers -q @*[publication_type={{p}}]* %}
        </a>
      {% endfor %}
    </div>
  </div>
</div>

<div class="publications-content">
  <div class="publications">
    {% for p in page.paper_types %}
      <div class="publication-category" id="{{ p | downcase | replace: ' ', '-' }}-publications">
        <h2 class="category-header">
          {% if p == "Thesis" %}🎓{% endif %}
          {% if p == "Refereed" %}📄{% endif %}
          {% if p == "Under Review" %}⏳{% endif %}
          {% if p == "Preprint" %}📝{% endif %}
          {% if p == "Proceedings" %}📚{% endif %}
          {{ p }} Publications
        </h2>
        <div class="category-line" style="background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-bg-color) 100%); height: 2px; width: 100%; margin: 8px 0 20px 0; border-radius: 2px;">
        </div>
        
        <div class="publication-list">
          {% bibliography -f papers -q @*[publication_type={{p}}]* %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>