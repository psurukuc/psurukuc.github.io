---
layout: page
title: Research
permalink: /research_projects/
# description: My interest is neutrinos...
nav: true
order: 4
# display_categories: [collaboration, fun]
display_categories: [Neutrino Mass, Neutrinoless Double Beta Decay, Reactor Neutrinos]
horizontal: false
---

<p> My group’s research focuses on understanding the fundamental properties of neutrinos, with particular emphasis on their mass and the mechanisms by which they acquire it.
Neutrinos are the only fundamental particles with unknown mass, making them a unique window into physics beyond the Standard Model. Their tiny, yet nonzero mass has profound implications for our understanding of the universe, influencing the evolution of large-scale cosmic structures and offering clues about the early universe, the nature of mass generation, and potential extensions to current particle physics theories.
</p>
<!--  -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{ category }}</h2>
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
        <!-- <div class="grid"> -->
        <div class="container">
          <div class="row">
            <div class="col">
            {% for project in sorted_projects %}
              {% include projects.html %}
            {% endfor %}
            </div>
          </div>
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
