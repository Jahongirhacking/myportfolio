<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
	import logo from '$lib/images/logo.png';
	import { base } from '$app/paths';

	interface Ilinks {
		href: string;
		content: string;
		isBadged: boolean;
	}

	const navLinks: Ilinks[] = [
		{ href: `${base}/`, content: 'About Me', isBadged: false },
		{ href: `${base}/portfolio`, content: 'Portfolio', isBadged: false },
		{ href: `${base}/comics`, content: 'Comics', isBadged: true }
	];
	console.dir(base);

	// We can toggle this via fa-bar icon
	$: innerWidth = 0;

	$: isOverlay = innerWidth <= 620;
	$: isHidden = isOverlay;

	const showOverlay = (): void => {
		isHidden = !isHidden;
	};

	const handleNavigate = () => {
		if (isOverlay && !isHidden) isHidden = true;
	};
</script>

<svelte:window bind:innerWidth />

<nav id="nav" class="nav">
	<img src={logo} class="nav__logo" alt="the website's logo" />
	<!-- If width is small, render Hamburger Menu -->
	<ul class={`nav__list ${isOverlay ? 'overlay' : ''} ${isHidden ? 'hidden' : ''}`} id="nav__list">
		{#each navLinks as navLink}
			<li class="nav__item">
				<a class="nav__link" href={navLink.href} on:click={handleNavigate}
					>{navLink.content}
					{#if navLink.isBadged}
						<span class="badge new-badge">new</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
	{#if isOverlay}
		<button on:click={showOverlay} id="nav__overlay-menu-bars"
			><Fa
				icon={isHidden ? faBars : faXmark}
				class="fa-solid fa-bars {!isOverlay ? 'hidden' : ''}"
			/></button
		>
	{/if}
</nav>

<style>
	/* NAVBAR */
	#nav {
		position: fixed;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px var(--default-padding);
		background: var(--secondary-color-shadow);
		backdrop-filter: blur(12px);
		z-index: 999;
		top: 0;
		left: 0;
	}

	.nav__logo {
		width: 50px;
	}

	/* NAV LIST */

	#nav > .nav__list {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		gap: 40px;
	}

	.nav__list > .nav__item {
		list-style: none;
		display: block;
	}

	.nav__list > .nav__item > .nav__link {
		text-decoration: none;
		color: var(--text-color);
		font-size: 15pt;
		font-weight: 500;
		transition-property: color;
		transition: 0.4s ease;
		position: relative;
	}

	.nav__list > .nav__item > .nav__link:hover {
		color: var(--primary-color);
	}

	/* NAV OVERLAY */

	#nav__overlay-menu-bars {
		cursor: pointer;
		font-size: 25pt;
		z-index: 101;
		color: var(--text-color);
		background-color: transparent;
		border: none;
	}

	#nav > .overlay {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		padding: 90px 0;
		z-index: 100;
		background-color: #0b0b0be6;
		backdrop-filter: blur(13px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		transition: 0.4s ease;
	}

	.overlay > .nav__item {
		background-color: var(--secondary-color);
		border-radius: 5px;
		border: 1px solid var(--text-color);
		text-align: center;
		font-size: 18pt;
		transition: 0.4s ease;
		position: relative;
	}

	.overlay > .nav__item > .nav__link {
		display: block;
		padding: 15px 55px;
		color: var(--text-color);
		transition: 0.4s ease;
	}

	.overlay > .nav__item > .nav__link > .new-badge {
		right: 5px;
		top: 5px;
		font-size: 8pt;
	}

	.overlay > .nav__item > .nav__link:hover {
		color: var(--primary-color);
	}

	.overlay > .nav__item:last-child > .nav__link {
		padding: 20px 55px;
		border-radius: 0;
	}
	@media (min-width: 401px) and (max-width: 600px) {
		.nav__logo {
			width: 40px;
		}
	}

	@media (min-width: 601px) and (max-width: 750px) {
		.nav__logo {
			width: 50px;
		}
	}
</style>
