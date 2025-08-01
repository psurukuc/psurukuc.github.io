---
layout: page
permalink: /research_publications/
title: Publications
description: "Comprehensive list of scientific publications from Surukuchi Lab."
seo_title: "Publications - Neutrino Physics Research Papers | Surukuchi Lab"
keywords: "neutrino physics publications, CUORE papers, CUPID research, Project 8 publications, neutrino mass, double-beta decay papers, particle physics research, University of Pittsburgh physics publications, peer-reviewed articles"
current_year: 2025
paper_types: [Thesis, Refereed, Under Review, Preprint, Proceedings]
nav: true
order: 6
---


<div class="pooled_publications">
<p>
{% for p in page.paper_types %}
     {{p}}: {% bibliography_count -f papers -q @*[publication_type={{p}}]* %} &nbsp;&nbsp;&nbsp;
{% endfor %}
</p>
</div>

<div class="publications">
{% for p in page.paper_types %}
    <h2 class="year">{{p}}</h2>
    {% bibliography -f papers -q @*[publication_type={{p}}]* %}
{% endfor %}
</div>


<!-- <div class="publications">
  <p>
    {% for p in {{site.data.projects}} %}
      <abbr class="listbadge"><a href="{{p[1].url}}">{{p[0]}}</a></abbr>
    {% endfor %}
  </p>
</div>

<div class="publications">
  {% for p in {{site.data.projects}} %}
    <a href="{{p[1].url}}" class="badge badge-primary">{{p[0]}} 
      <span class="badge badge-light">{%bibliography_count -f papers -q @*[abbr={{p[0]}}]* %}</span>
    </a>
  {% endfor %}
</div>

<div class="publications">
  {% for p in {{site.data.projects}} %}
    {%bibliography_count -f papers -q @*[abbr={{p[0]}}]* %}
  {% endfor %}
</div> -->