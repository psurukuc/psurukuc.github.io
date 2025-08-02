---
layout: page
title: Research
permalink: /research_projects/
description: "Explore the cutting-edge neutrino physics research projects in Surukuchi Lab. Our work spans neutrinoless double-beta decay searches with CUORE and CUPID and neutrino mass measreument with Project 8."
seo_title: "Research Projects - Neutrino Physics Experiments | Surukuchi Lab"
keywords: "neutrinoless double-beta decay, CUORE, CUPID, Project 8, cryogenic detectors, neutrino mass, University of Pittsburgh physics"
nav: true
order: 3
display_categories: [Neutrino Mass, Neutrinoless Double Beta Decay, Reactor Neutrinos]
horizontal: false
---

<div class="research-intro">
  <p style="font-size: 1.1rem; line-height: 1.6; text-align: justify; margin-bottom: 2rem;">
    My group's research focuses on understanding the fundamental properties of neutrinos, with particular emphasis on their mass and the mechanisms by which they acquire it. Neutrinos are the only fundamental particles with unknown mass, making them a unique window into physics beyond the Standard Model. Their tiny, yet nonzero mass has profound implications for our understanding of the universe, influencing the evolution of large-scale cosmic structures and offering clues about the early universe, the nature of mass generation, and potential extensions to current particle physics theories.
  </p>
</div>

<style>
@media (max-width: 768px) {
  .research-intro p {
    font-size: 1rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  .research-category h2.category {
    font-size: 1.3rem;
    margin-top: 1.5rem;
  }
  
  .container .row .col {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

<div class="research-content">
  <div class="projects">
    {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
      {% for category in page.display_categories %}
        <div class="research-category">
          <h2 class="category">{{ category }}</h2>
          <div style="background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-bg-color) 100%); height: 3px; width: 100%; margin: 10px 0 30px 0; border-radius: 2px;"></div>
          
          {% assign categorized_projects = site.projects | where: "category", category %}
          {% assign sorted_projects = categorized_projects | sort: "importance" %}
          
          <!-- Generate cards for each project -->
          {% if page.horizontal %}
            <div class="container">
              <div class="row row-cols-1 row-cols-md-2 g-4">
              {% for project in sorted_projects %}
                {% include projects_horizontal.html %}
              {% endfor %}
              </div>
            </div>
          {% else %}
            <div class="container">
              <div class="row">
                <div class="col">
                {% for project in sorted_projects %}
                  <div class="project-item">
                    {% include projects.html %}
                  </div>
                {% endfor %}
                </div>
              </div>
            </div>
          {% endif %}
        </div>
      {% endfor %}
    {% else %}
      <!-- Display projects without categories -->
      {% assign sorted_projects = site.projects | sort: "importance" %}
      
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="project-grid">
          {% for project in sorted_projects %}
            <div class="project-item">
              {% include projects.html %}
            </div>
          {% endfor %}
        </div>
      {% endif %}
    {% endif %}
  </div>
</div>
