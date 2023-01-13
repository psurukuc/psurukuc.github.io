---
layout: page
title: Research Projects
permalink: /research_projects/
# description: My interest is neutrinos...
nav: true
order: 2
# display_categories: [collaboration, fun]
display_categories: [Neutrino Mass, Neutrinoless Double Beta Decay, Reactor Neutrinos]
horizontal: false
---

<p>
My research interests lie at the intersection of particle and nuclear physics with a focus on understanding the fundmental properties of neutrinos.
</p>

<p>
My current research is driven primarily by the following questions:
What is the mass of neutrinos?
How do they acquires their mass?

<p>
I have also spent a substantial part of my research career studying reactor neutrinos. 
I have investigated the possibility of the existence of additional neutrino flavors in addition to the already known three neutrino flavors. Conversly, I have also into using reactor neutrinos to better understand the nuclear physics associated with reactors.
</p>

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
