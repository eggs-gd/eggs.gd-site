<script lang="ts">
	import { base } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.catalog.title}</title>
	<meta
		name="description"
		content={data.catalog.intro.join(' ') || 'eggs.gd project catalog'}
	/>
	<meta property="og:title" content={data.catalog.title} />
	<meta
		property="og:description"
		content={data.catalog.intro.join(' ') || 'eggs.gd project catalog'}
	/>
</svelte:head>

<main class="page">
	<header class="hero" aria-labelledby="brand">
		<div class="title-row">
			<img
				class="mark"
				src="{base}/earwig-dark.png"
				alt=""
				width="160"
				height="160"
			/>
			<h1 id="brand">{data.catalog.title}</h1>
		</div>
		{#each data.catalog.intro as paragraph}
			<p class="lede">{paragraph}</p>
		{/each}

		{#if data.catalog.categories.length}
			<nav class="toc" aria-label="Categories">
				{#each data.catalog.categories as category}
					<a href="#{category.id}">{category.title}</a>
				{/each}
			</nav>
		{/if}
	</header>

	{#each data.catalog.categories as category}
		<section class="category" id={category.id} aria-labelledby="{category.id}-title">
			<h2 id="{category.id}-title">{category.title}</h2>
			<ul class="projects">
				{#each category.projects as project}
					<li class="project">
						<div class="project-title">
							{#if project.ico}
								<img
									class="ico"
									src="{base}/{project.ico}"
									alt=""
									width="48"
									height="48"
								/>
							{/if}
							{#if project.link}
								<a class="name" href={project.link}>{project.name}</a>
							{:else}
								<span class="name">{project.name}</span>
							{/if}
						</div>
						{#if project.note}
							<p class="note">{project.note}</p>
						{/if}
						{#if project.stack.length}
							<ul class="stack" aria-label="Stack">
								{#each project.stack as tag}
									<li>{tag}</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<footer>
		<span>© {new Date().getFullYear()} {data.catalog.title}</span>
	</footer>
</main>
