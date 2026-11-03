<script>
	import Button from '#lib/components/Button.svelte';
	import GameCard from '#lib/components/GameCard.svelte';
	import LinkCard from '#lib/components/LinkCard.svelte';

	const games = [
		{
			number: '01',
			title: 'Mini Crossword',
			description:
				'A 5×5 puzzle you can solve right in the page, with a button to reveal the solution.',
			href: '/crossword',
			image: '/images/hero.svg',
			imageAlt: 'A five by five crossword grid with the word CLASS across the top row'
		},
		{
			number: '02',
			title: '2048',
			description: 'Slide the tiles, merge the equal ones, and try to reach 2048.',
			href: '/2048'
		},
		{
			number: '03',
			title: 'Coming soon',
			description: 'The next project will land here.',
			soon: true
		}
	];

	const pages = [
		{ href: '/about', title: 'About me', description: 'Education, projects, and work experience.' },
		{ href: '/contact', title: 'Contact', description: 'Email, GitHub, and LinkedIn.' }
	];
</script>

<svelte:head>
	<title>Side Quest | Zekai Chen</title>
	<meta
		name="description"
		content="Side Quest is Zekai Chen's project site: a mini crossword, 2048, plus experience and contact details."
	/>
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<p class="eyebrow">Welcome to Side Quest</p>
	<h1 id="hero-title">Hi, I'm Zekai. <span>Come play.</span></h1>
	<p class="page-intro">
		I'm a Computer Science master's student at Northeastern University in Seattle. This is where my
		course projects live, starting with a mini crossword.
	</p>
	<Button href="/crossword">Play the crossword &rarr;</Button>
</section>

<section class="page-section" aria-labelledby="games-title">
	<h2 id="games-title">The games</h2>
	<ul class="game-list" role="list">
		{#each games as game (game.number)}
			<GameCard {...game} />
		{/each}
	</ul>
</section>

<section class="page-section" aria-labelledby="more-title">
	<h2 id="more-title">More about me</h2>
	<ul class="link-list" role="list">
		{#each pages as page (page.href)}
			<LinkCard {...page} />
		{/each}
	</ul>
</section>

<style>
	.hero {
		padding: var(--space-5) 0 var(--space-6);
		text-align: center;
	}

	.eyebrow {
		display: inline-block;
		margin-bottom: var(--space-3);
		padding: var(--space-1) var(--space-3);
		border-radius: var(--radius-pill);
		background-color: var(--color-paper-alt);
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	h1 {
		max-width: 14ch;
		margin: 0 auto var(--space-3);
		font-size: var(--text-display);
		line-height: 1.02;
	}

	h1 span {
		color: var(--color-accent);
	}

	.hero .page-intro {
		margin: 0 auto var(--space-4);
	}

	.game-list,
	.link-list {
		display: grid;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.game-list {
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: var(--space-4);
	}

	.link-list {
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: var(--space-3);
	}
</style>
