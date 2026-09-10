<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Privacy Policy · eggs.gd</title>
	<meta name="description" content="Privacy Policy for eggs.gd and its applications." />
</svelte:head>

<main class="legal">
	<a class="back" href="{base}/">eggs.gd</a>

	<article>
		<h1>Privacy Policy</h1>
		<p class="updated">Last updated: 10 September 2026</p>

		<p>
			eggs.gd is a small, independent project studio. It publishes this website and a number of
			applications. This policy explains what data is collected, why, and how it is handled.
		</p>

		<h2>Scope</h2>
		<p>
			This policy covers the <a href="https://eggs.gd">eggs.gd</a> website and any eggs.gd application
			that does not provide its own privacy policy. An application with its own policy links to it from
			within the app; that policy takes precedence for that application.
		</p>

		<h2>The website</h2>
		<p>
			The website does not require an account and does not ask for personal information. It uses
			Google Tag Manager and Google Analytics to collect anonymous, aggregated usage statistics
			(such as page views and referrers). This data is not used to identify individual visitors.
		</p>

		<h2>Signing in with Google</h2>
		<p>
			Some eggs.gd applications let you optionally sign in with your Google account to sync your
			data across your devices. This is never required to use an application.
		</p>
		<p>
			If you choose to sign in, we receive and store your Google account identifier, name, and email
			address, together with the content you create in that application, in Google Firebase. This
			information is used solely to provide the sync feature — to identify your account and share
			your data between your own signed-in devices.
		</p>
		<p>
			We do not use this information for advertising, profiling, or any purpose unrelated to the
			feature you signed in for.
		</p>

		<h2>Sharing</h2>
		<p>
			We do not sell personal data and do not use advertising networks. Data is processed only by
			the infrastructure providers required to run the services — currently Google (Firebase, Google
			Analytics) — under their respective terms.
		</p>

		<h2>Retention and deletion</h2>
		<p>
			You can stop syncing at any time by signing out within the application. Signing out does not
			delete data already stored in Firebase. To have your stored data removed, contact us at the
			address below and we will delete it.
		</p>

		<h2>Changes</h2>
		<p>
			This policy may be updated from time to time. The date at the top reflects the most recent
			revision.
		</p>

		<h2>Contact</h2>
		<p><a href="mailto:eggs.gd@gmail.com">eggs.gd@gmail.com</a></p>
	</article>
</main>

<style>
	.legal {
		width: min(100%, 43rem);
		margin: 0 auto;
		padding: clamp(2.5rem, 8vw, 5rem) clamp(1.25rem, 4vw, 2rem) 4rem;
	}

	.back {
		display: inline-block;
		margin-bottom: clamp(2rem, 5vw, 3rem);
		color: var(--text-muted);
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.back:hover {
		color: var(--amber);
	}

	article {
		color: var(--text-soft);
		font-size: 1.02rem;
		line-height: 1.65;
	}

	h1 {
		margin: 0;
		color: var(--text);
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 9vw, 3.5rem);
		font-weight: 400;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.updated {
		margin: 0.6rem 0 2rem;
		color: var(--text-muted);
		font-size: 0.9rem;
	}

	h2 {
		margin: 2.25rem 0 0.5rem;
		color: var(--text);
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1.15;
	}

	p {
		margin: 0 0 0.9rem;
	}
</style>
