---
layout: page
permalink: /research_publications/
title: Publications
# description: List of publications by reverse chronological order. Authors are typically listed in the alphabetical order of the last names.
# years: [2021, 2020, 2019, 2018, 2016, 2015]
current_year: 2021
paper_types: [Thesis, Refereed, Preprint, Proceedings]
nav: true
order: 4
---


<div class="select_publications">
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