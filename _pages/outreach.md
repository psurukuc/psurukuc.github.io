---
layout: page
title: Outreach
permalink: /cortex/
# description: "Outreach and public engagement activities."
nav: true
order: 4
---

<style>
.cortex-outreach {
	--cortex-blue: var(--global-text-color-light);
	--cortex-gold: var(--global-theme-color);
	--cortex-ink: var(--global-text-color);
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
}

@keyframes cortexFadeUp {
	from {
		opacity: 0;
		transform: translateY(12px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes cortexSoftPulse {
	0% {
		box-shadow: 0 10px 24px color-mix(in srgb, var(--cortex-blue) 15%, transparent);
	}
	50% {
		box-shadow: 0 14px 28px color-mix(in srgb, var(--cortex-gold) 25%, transparent);
	}
	100% {
		box-shadow: 0 10px 24px color-mix(in srgb, var(--cortex-blue) 15%, transparent);
	}
}

.cortex-outreach .cortex-subheader {
	font-size: 1.28rem;
	font-weight: 800;
	margin-top: 0.2rem;
	margin-bottom: 0.15rem;
	padding: 0.45rem 0.8rem;
	border-left: 5px solid color-mix(in srgb, var(--cortex-gold) 75%, transparent);
	border-radius: 0.5rem;
	background: linear-gradient(95deg, color-mix(in srgb, var(--cortex-gold) 20%, transparent), color-mix(in srgb, var(--cortex-blue) 10%, transparent));
	color: var(--cortex-blue);
	box-shadow: 0 6px 18px color-mix(in srgb, var(--cortex-blue) 14%, transparent);
	animation: cortexFadeUp 520ms ease-out both;
}

.cortex-outreach .intro-panel,
.cortex-outreach .learning-panel {
	margin-top: 0;
	border: 1px solid color-mix(in srgb, var(--cortex-blue) 30%, transparent);
	border-radius: 14px;
	padding: 1rem 1.1rem;
	background: linear-gradient(150deg, color-mix(in srgb, var(--cortex-gold) 20%, transparent), color-mix(in srgb, var(--cortex-blue) 8%, transparent));
	animation: cortexFadeUp 650ms ease-out both;
}

.cortex-outreach .video-shell {
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	overflow: hidden;
	border-radius: 16px;
	border: 2px solid color-mix(in srgb, var(--cortex-gold) 65%, transparent);
	box-shadow: 0 16px 34px color-mix(in srgb, var(--cortex-blue) 26%, transparent);
	background: linear-gradient(130deg, color-mix(in srgb, var(--cortex-blue) 18%, transparent), color-mix(in srgb, var(--cortex-gold) 20%, transparent));
	animation: cortexFadeUp 700ms ease-out both;
}

.cortex-outreach .video-shell iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.cortex-outreach .mini-cortex-slideshow {
	margin-top: 0;
}

.cortex-outreach .mini-cortex-slideshow .mini-cortex-card {
	position: relative;
	overflow: hidden;
	border-radius: 12px;
	border: 1px solid color-mix(in srgb, var(--cortex-blue) 22%, transparent);
	box-shadow: 0 6px 16px color-mix(in srgb, var(--cortex-blue) 14%, transparent);
	background: color-mix(in srgb, var(--cortex-blue) 5%, transparent);
	animation: cortexFadeUp 550ms ease-out both;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cortex-outreach .mini-cortex-photo-wrap {
	position: relative;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	background: color-mix(in srgb, var(--cortex-blue) 10%, var(--global-bg-color));
}

.cortex-outreach .mini-cortex-slideshow .mini-cortex-photo {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: center;
	animation: cortexFadeUp 550ms ease-out both;
	transition: transform 0.35s ease, filter 0.25s ease;
}

.cortex-outreach .mini-cortex-slideshow .mini-cortex-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 14px 26px color-mix(in srgb, var(--cortex-blue) 30%, transparent);
}

.cortex-outreach .mini-cortex-slideshow .mini-cortex-card:hover .mini-cortex-photo {
	transform: scale(1.035);
	filter: saturate(1.08);
}

.cortex-outreach .mini-cortex-slideshow .carousel-control-prev,
.cortex-outreach .mini-cortex-slideshow .carousel-control-next {
	width: 8%;
	opacity: 0.92;
}

.cortex-outreach .mini-cortex-slideshow .carousel-control-prev-icon,
.cortex-outreach .mini-cortex-slideshow .carousel-control-next-icon {
	background-color: color-mix(in srgb, var(--cortex-blue) 70%, transparent);
	border-radius: 50%;
	padding: 1rem;
	background-size: 60% 60%;
}

.cortex-outreach .mini-cortex-slideshow .carousel-indicators li {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: color-mix(in srgb, var(--cortex-blue) 35%, transparent);
}

.cortex-outreach .mini-cortex-slideshow .carousel-indicators .active {
	background-color: var(--cortex-gold);
}

.cortex-outreach .figure-card {
	border-radius: 14px;
	padding: 0.8rem;
	border: 1px solid color-mix(in srgb, var(--cortex-blue) 28%, transparent);
	background: linear-gradient(170deg, color-mix(in srgb, var(--cortex-gold) 13%, transparent), color-mix(in srgb, var(--cortex-blue) 10%, transparent));
	box-shadow: 0 10px 24px color-mix(in srgb, var(--cortex-blue) 15%, transparent);
	animation: cortexFadeUp 700ms ease-out both;
}

.cortex-outreach .media-frame {
	position: relative;
	width: 100%;
	aspect-ratio: 16 / 9;
	border-radius: 10px;
	overflow: hidden;
	background: color-mix(in srgb, var(--cortex-blue) 8%, var(--global-bg-color));
	border: 1px solid color-mix(in srgb, var(--cortex-gold) 38%, transparent);
}

.cortex-outreach .hero-frame {
	position: relative;
	width: 100%;
	border-radius: 14px;
	overflow: hidden;
	background: #000000;
	border: 1px solid color-mix(in srgb, var(--cortex-gold) 38%, transparent);
	box-shadow: 0 12px 28px color-mix(in srgb, var(--cortex-blue) 14%, transparent);
	margin: 0;
	animation: cortexFadeUp 700ms ease-out both;
}

.cortex-outreach .media-frame video,
.cortex-outreach .media-frame img,
.cortex-outreach .hero-frame img {
	width: 100%;
	height: auto;
	object-fit: contain;
	object-position: center;
	display: block;
}

.cortex-outreach .figure-card:hover {
	animation: cortexSoftPulse 1400ms ease-in-out 1;
}

.cortex-outreach .figure-card img {
	border: 1px solid color-mix(in srgb, var(--cortex-gold) 45%, transparent);
}

.cortex-outreach .figure-card .caption {
	margin-top: 0.55rem;
	line-height: 1.35;
}

.cortex-outreach .caption {
	color: var(--cortex-ink);
	font-size: 0.92rem;
	margin: 0.1rem 0 0.15rem;
}

.cortex-outreach ul {
	margin-top: 0.45rem;
	margin-bottom: 0.5rem;
}

.cortex-outreach p:last-child {
	margin-bottom: 0;
}

@media (prefers-reduced-motion: reduce) {
	.cortex-outreach .cortex-title,
	.cortex-outreach .intro-panel,
	.cortex-outreach .learning-panel,
	.cortex-outreach .video-shell,
	.cortex-outreach .mini-cortex-card,
	.cortex-outreach .mini-cortex-photo,
	.cortex-outreach .figure-card {
		animation: none !important;
	}

	.cortex-outreach .mini-cortex-card,
	.cortex-outreach .mini-cortex-photo,
	.cortex-outreach .figure-card {
		transition: none !important;
	}
}

@media (max-width: 768px) {
	.cortex-outreach .mini-cortex-photo-wrap {
		aspect-ratio: 4 / 3;
	}

	.cortex-outreach .media-frame {
		aspect-ratio: 4 / 3;
	}

}
</style>

<section class="cortex-outreach">
	<div class="hero-frame">
		<img src="{{ '/assets/img/cortex/main/DSC02945.jpg' | relative_url }}" alt="Highlighted CoRTEx detector work" />
	</div>
	<div class="caption">mini-CoRTEx displaying a reconstructed muon.</div>

<h3 class="cortex-subheader">What Are Muons?</h3>

<div class="intro-panel">
Cosmic rays come from many astrophysical sources, including the Sun, stars in our galaxy, and sources beyond the Milky Way. When these high-energy particles interact in Earth's atmosphere, they produce secondary particles, including muons.

Muons were discovered in 1936 by Carl Anderson and Seth Neddermeyer. Since then, they have played an important role in both fundamental physics and practical applications, from astroparticle studies to large-scale muon imaging.

Why muons are useful for undergraduate outreach and labs:

<ul>
	<li>They are naturally available, so no particle beam is required.</li>
	<li>They can be studied safely with educational detector systems.</li>
	<li>They connect ideas from astrophysics to hands-on measurement in the lab.</li>
	<li>They offer real examples of how scientists detect and analyze invisible particles.</li>
</ul>

Watch the lecture by Kyle Mo below to learn more about muons and CoRTEx.
</div>

<div class="row">
	<div class="col-sm">
		<div class="video-shell">
			<iframe
				src="https://www.youtube.com/embed/6MHdgi45BlQ"
				title="Sanielevici Lecture by Kyle Mo"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>

<h3 class="cortex-subheader">Cosmic Ray Tracking Experiment (CoRTEx)</h3>

<div class="learning-panel">
Pittsburgh Cosmic Ray Tracker Experiment (Pitt-CoRTEx) is a modular detector platform designed for both outreach and undergraduate training. It combines visually engaging event displays with research-style data collection and analysis.

The detector concept is based on modular scintillator bars, optical readout, and silicon photomultiplier-based electronics. This design supports robust operation, easy replacement of modules, and flexible educational use.

Through CoRTEx, students gain experience across the full detector workflow:
<ul>
	<li>Design and develop detector subsystems.</li>
	<li>Fabricate and assemble detector components.</li>
	<li>Characterize detector response and performance.</li>
	<li>Analyze and interpret collected data.</li>
	<li>Apply machine learning methods to detector and event data.</li>
</ul>

The goal is to make detector physics approachable while developing practical instrumentation and data-analysis skills.

Because it is portable, robust, and visually intuitive, CoRTEx also functions as a strong standalone outreach detector.
</div>

<div class="row">
	<div class="col-12">
		<div class="figure-card">
			<div class="media-frame">
				<video autoplay loop muted playsinline>
					<source src="{{ '/assets/img/cortex/8x8x8/CortexSimulation.mp4' | relative_url }}" type="video/mp4">
					Your browser does not support the video tag.
				</video>
			</div>
			<div class="caption">Simulation of muons passing through CoRTEx, including scintillator bar hits.</div>
		</div>
	</div>
</div>

<h3 class="cortex-subheader">mini-CoRTEx</h3>

<div class="intro-panel">
mini-CoRTEx is the proof-of-principle and training-scale version of Pitt-CoRTEx. It is used for hands-on learning, outreach demonstrations, and detector characterization.

Student involvement is central to mini-CoRTEx, with students contributing to design iteration, assembly, debugging, and early data validation.

This training model gives undergraduates broad exposure to experimental particle physics methods that are usually encountered later in graduate-level research.
</div>

{% assign mini_cortex_files = site.static_files | where_exp: "file", "file.path contains '/assets/img/cortex/'" | sort: "path" %}
<div id="miniCortexCarousel" class="carousel slide mini-cortex-slideshow" data-ride="carousel" data-interval="3400" data-pause="hover">
	<ol class="carousel-indicators">
		{% assign slide_index = 0 %}
		{% for file in mini_cortex_files %}
			{% assign ext = file.extname | downcase %}
			{% unless file.path contains '/assets/img/cortex/8x8x8/' %}
				{% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.gif' or ext == '.webp' %}
					<li data-target="#miniCortexCarousel" data-slide-to="{{ slide_index }}"{% if slide_index == 0 %} class="active"{% endif %}></li>
					{% assign slide_index = slide_index | plus: 1 %}
				{% endif %}
			{% endunless %}
		{% endfor %}
	</ol>

	<div class="carousel-inner">
		{% assign slide_index = 0 %}
		{% for file in mini_cortex_files %}
			{% assign ext = file.extname | downcase %}
			{% unless file.path contains '/assets/img/cortex/8x8x8/' %}
				{% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.gif' or ext == '.webp' %}
					<div class="carousel-item{% if slide_index == 0 %} active{% endif %}">
						<div class="card mini-cortex-card">
							<div class="mini-cortex-photo-wrap">
								<img class="img-fluid mini-cortex-photo" src="{{ file.path | relative_url }}" alt="mini-CoRTEx photo {{ slide_index | plus: 1 }}" />
							</div>
						</div>
					</div>
					{% assign slide_index = slide_index | plus: 1 %}
				{% endif %}
			{% endunless %}
		{% endfor %}
	</div>

	<a class="carousel-control-prev" href="#miniCortexCarousel" role="button" data-slide="prev" aria-label="Previous slide">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#miniCortexCarousel" role="button" data-slide="next" aria-label="Next slide">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>

<div class="row">
	<div class="col-12">
		<div class="figure-card">
			<div class="media-frame">
				<img src="{{ '/assets/img/cortex/8x8x8/track_visualization.gif' | relative_url }}" alt="CoRTEx track visualization" data-zoomable />
			</div>
			<div class="caption">Animated event display showing how detector hits are turned into reconstructed particle tracks.</div>
		</div>
	</div>
</div>

<h3 class="cortex-subheader">The Team</h3>

<div class="intro-panel">

<p>CoRTEx is led by Prof. Pranava Teja Surukuchi and Prof. Tae Min Hong. Technical leadership and hands-on training are provided by Yuvaraj Elangovan. Undergraduate students play a central role in detector development, simulation, and data analysis.</p>

<p><strong>PIs:</strong> Prof. Pranava Teja Surukuchi, Prof. Tae Min Hong</p>

<p><strong>Project Lead:</strong> Yuvaraj Elangovan</p>

<p><strong>Students:</strong> Kyle Mo, Sean Maloney, Cooper Gray, Viviana Fiverson, Al Riska, and Brent Clelland (now at NIU)</p>
</div>
</section>
