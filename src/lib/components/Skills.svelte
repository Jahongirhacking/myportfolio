<script lang="ts">
	import htmlLogo from '$lib/images/Logos/html.png';
	import cssLogo from '$lib/images/Logos/css.png';
	import jsLogo from '$lib/images/Logos/js.png';
	import sassLogo from '$lib/images/Logos/sass.png';
	import reactLogo from '$lib/images/Logos/react.png';
	import expLogo from '$lib/images/Logos/express.png';
	import svelteLogo from '$lib/images/Logos/svelte.png';
	import typeLogo from '$lib/images/Logos/typescript.png';
	import cppLogo from '$lib/images/Logos/cpp.png';
	import psLogo from '$lib/images/Logos/photoshop.png';
	import figLogo from '$lib/images/Logos/figma.png';

	interface Icard {
		image: string;
		content: string;
	}

	const usingSkills: Icard[] = [
		{ image: htmlLogo, content: 'HTML' },
		{ image: cssLogo, content: 'CSS' },
		{ image: jsLogo, content: 'JavaScript ES6' },
		{ image: sassLogo, content: 'SASS' }
	];

	const learningSkills: Icard[] = [
		{ image: reactLogo, content: 'React JS' },
		{ image: expLogo, content: 'Express JS' },
		{ image: svelteLogo, content: 'Svelte' },
		{ image: typeLogo, content: 'TypeScript' }
	];

	const otherSkills: Icard[] = [
		{ image: cppLogo, content: 'C++ for Competitive Programming' },
		{ image: psLogo, content: 'Photoshop' },
		{ image: figLogo, content: 'UI/UX Designing' }
	];
</script>

<!-- SKILLS SECTION -->
<section id="skills">
	<h2 class="skills__title">Skills</h2>
	<!-- USING -->
	<div class="skills__using skill-container">
		<h3 class="skills__using__title skill-title">Using Now</h3>
		<div class="card-container skills__using__cards">
			{#each usingSkills as usingSkill}
				<div class="skills__using__card card">
					<img class="card__image" src={usingSkill.image} alt={`${usingSkill.content} logo`} />
					<p class="card__info">{usingSkill.content}</p>
				</div>
			{/each}
		</div>
	</div>
	<!-- LEARNING -->
	<div class="skills__learning skill-container">
		<h3 class="skills__learning__title skill-title">Learning</h3>
		<div class="card-container skills__learning__cards">
			{#each learningSkills as learningSkill}
				<div class="skills__learning__card card">
					<img
						class="card__image"
						src={learningSkill.image}
						alt={`${learningSkill.content} logo`}
					/>
					<p class="card__info">{learningSkill.content}</p>
				</div>
			{/each}
		</div>
	</div>
	<!-- OTHERS -->
	<div class="skills__others skill-container">
		<h3 class="skills__others__title skill-title">Other Skills</h3>
		<div class="card-container skills__others__cards">
			{#each otherSkills as otherSkill}
				<div class="skills__others__card card">
					<img class="card__image" src={otherSkill.image} alt={`${otherSkill.content} logo`} />
					<p class="card__info">{otherSkill.content}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#skills {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 60px;
	}

	.skills__title {
		text-transform: uppercase;
		letter-spacing: 5px;
		padding: 15px 45px;
		border: 5px solid var(--primary-color);
		color: var(--primary-color);
		width: fit-content;
		margin: auto;
		margin-bottom: 10px;
		font-weight: 700;
		transition: 0.4s ease;
	}

	@media (max-width: 400px) {
		#skills {
			gap: 40px;
		}

		.skills__title {
			padding: 10px 40px;
			font-size: 16pt;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		#skills {
			gap: 40px;
		}

		.skills__title {
			padding: 10px 40px;
			font-size: 16pt;
		}

		.skill-title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 601px) and (max-width: 750px) {
		#skills {
			gap: 40px;
		}

		.skills__title {
			padding: 10px 40px;
			font-size: 16pt;
		}

		.skill-title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 751px) and (max-width: 850px) {
		#skills {
			gap: 40px;
		}

		.skills__title {
			padding: 10px 40px;
			font-size: 16pt;
		}

		.skill-title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 851px) and (max-width: 1150px) {
		#skills {
			gap: 45px;
		}

		.skills__title {
			padding: 10px 40px;
			font-size: 16pt;
		}

		.skill-title {
			letter-spacing: 4px;
			font-size: 16pt;
		}
	}
</style>
