---
layout: page
title: Research interests
permalink: /sub/projects/
# description: My interest is neutrinos...
nav: false
order: 10
# display_categories: [collaboration, fun]
display_categories: [Neutrino Mass, Neutrinoless Double Beta Decay, Reactor Neutrinos]
horizontal: false
---

My research interests lie in the intersection of partcile and nuclear physics with focus on neutrinos. 
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{ category }}</h2>
      <!-- k;jsd fkljsd fls dfjklsdh fjkhs fksh fjksh fkjsh jhsjhkhsfuiy sduofhs dolghdsofgiuw pdfueruoty;cj;lshfsjdy fiowuf;sjdhfo;isdfu i -->
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for project in sorted_projects %}
            {% include projects.html %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>
