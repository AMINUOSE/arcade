<script>
	import ContactLink from '#lib/components/ContactLink.svelte';
	import { contactLinks } from '#lib/data/contact.js';
</script>

<svelte:head>
	<title>Contact | Side Quest</title>
	<meta name="description" content="How to reach Zekai Chen: email, GitHub, and LinkedIn." />
</svelte:head>

<h1>Contact</h1>
<p class="page-intro">
	I'm based in Seattle, WA. The best way to reach me is by email, and I'm happy to connect on
	LinkedIn or take a look at my code on GitHub.
</p>

<section class="page-section" aria-labelledby="links-title">
	<h2 id="links-title">Where to find me</h2>
	<ul role="list">
		{#each contactLinks as link (link.href)}
			<ContactLink {...link} />
		{/each}
	</ul>
</section>

<style>
	ul {
		display: grid;
		gap: var(--space-3);
		max-width: 34rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
