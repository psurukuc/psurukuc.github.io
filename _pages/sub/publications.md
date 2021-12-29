---
layout: page
permalink: /sub/publications/
title: Publications
# description: List of publications by reverse chronological order. Authors are typically listed in the alphabetical order of the last names.
# years: [2021, 2020, 2019, 2018, 2016, 2015]
current_year: 2021
paper_types: [Thesis, Refereed, Preprint, Proceedings]
nav: false
order: 10
---

<div class="select_publications">
{% for p in page.paper_types %}
  <p>
    {% bibliography_count -f papers -q @*[publication_type={{p}}]* %} {{p}}
  </p>
{% endfor %}
</div>

<div class="publications">
{% for p in page.paper_types %}
    <h2 class="year">{{p}}</h2>
    {% bibliography -f papers -q @*[publication_type={{p}}]* %}
{% endfor %}
</div>