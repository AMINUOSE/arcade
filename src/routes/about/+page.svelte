<script>
	import Entry from '#lib/components/Entry.svelte';
	import { education, projects, work, skills } from '#lib/data/about.js';
</script>

<svelte:head>
	<title>About | Side Quest</title>
	<meta name="description" content="Zekai Chen's education, projects, and work experience." />
</svelte:head>

<section class="intro" aria-labelledby="about-title">
	<div class="intro-text">
		<h1 id="about-title">About me</h1>
		<p class="page-intro">
			I'm a Computer Science master's student at Northeastern University in Seattle, with a
			background in hospitality management. I'm looking for internship opportunities for Summer 2027
			and full-time roles after I graduate in May 2027.
		</p>
	</div>
	<img
		class="photo"
		src="/images/portrait.jpg"
		width="900"
		height="598"
		alt="Portrait of Zekai Chen, wearing glasses and a black puffer jacket, standing in a brightly lit city square at night"
	/>
</section>

<section class="page-section" aria-labelledby="education-title">
	<h2 id="education-title">Education</h2>
	{#each education as entry (entry.title)}
		<Entry {...entry} />
	{/each}
</section>

<section class="page-section" aria-labelledby="projects-title">
	<h2 id="projects-title">Projects</h2>
	{#each projects as entry (entry.title)}
		<Entry {...entry} />
	{/each}
</section>

<section class="page-section" aria-labelledby="work-title">
	<h2 id="work-title">Work experience</h2>
	{#each work as entry (entry.title)}
		<Entry {...entry} />
	{/each}
</section>

<section class="page-section" aria-labelledby="skills-title">
	<h2 id="skills-title">Technical skills</h2>
	<ul class="skills" role="list">
		{#each skills as skill (skill)}
			<li>{skill}</li>
		{/each}
	</ul>
</section>

<style>
	.intro {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-4) var(--space-5);
		margin-bottom: var(--space-6);
	}

	.intro-text {
		flex: 1 1 20rem;
	}

	.photo {
		flex: 0 1 18rem;
		width: 18rem;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: 50% 30%;
		margin: 0 auto;
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-lg);
		box-shadow: 6px 6px 0 var(--color-accent);
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.skills li {
		padding: var(--space-1) var(--space-3);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-pill);
		background-color: var(--color-surface);
		font-weight: 700;
		transition:
			background-color var(--transition),
			color var(--transition);
	}

	.skills li:hover {
		background-color: var(--color-accent);
		border-color: var(--color-accent);
		color: var(--color-on-accent);
	}
</style>
