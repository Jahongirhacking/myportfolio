<!-- ABOUT ME SECTION -->
<section id="about_me">
	<h3 class="about_me__title">About Me</h3>
	<p class="about_me__info">
		I am a <span id="my-age" />-year-old Front-End Developer from Uzbekistan. Currently, I am
		studying at Innopolis University in Tatarstan, Russia and learning modern web frameworks like
		React JS, also already have generated some small projects so far. During my university courses,
		I have learned basic concepts of Software Design Patterns, Data Structures and Algorithms
		especially Graph Theory. Everyday I practice my skills using my favourite programming languages
		JavaScript and C++ on Leetcode platform. In my opinion, these concepts what I have learned will
		help you!
	</p>

	<a
		target="_blank"
		href="https://www.linkedin.com/in/jahongir-hayitov-633b9a1b3/"
		class="about_me__link">More Info</a
	>
</section>

<style>
	/* ABOUT ME SECTION */

	#about_me {
		position: relative;
		width: 100%;
		padding: 20px var(--default-padding);
		background: linear-gradient(
			90deg,
			rgba(5, 64, 53, 1) 0%,
			rgba(9, 110, 91, 1) 70%,
			rgba(13, 154, 128, 1) 100%
		);
		color: var(--text-color);
	}

	.about_me__title {
		letter-spacing: 3px;
		font-size: var(--heading-font-size);
		margin: 25px 0;
	}

	.about_me__info {
		width: 100%;
		font-size: var(--info-font-size);
		line-height: 23pt;
		max-height: 235px;
		overflow: auto;
		padding-right: 8px;
	}

	.about_me__link {
		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		display: block;
		padding: 10px 20px;
		margin: 25px 0;
		font-weight: 700;
		border-left: 2px solid var(--text-color);
		border-right: 2px solid var(--text-color);
		width: fit-content;
		transition: 0.8s ease;
		transition-property: color, background-color;
	}

	.about_me__link:hover {
		background-color: white;
		color: var(--primary-color-dark);
	}

	/* max 400 */
	@media (max-width: 400px) {
		.about_me__info {
			line-height: 20pt;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		.about_me__info {
			line-height: 21pt;
		}
	}
</style>
