<script lang="ts">
	import grantOfferImage from '$lib/images/Achievements/Scholarship.jpg';
	import nanoDegreeImage from '$lib/images/Achievements/nanodegree.jpg';
	import internationalImage from '$lib/images/Achievements/inter-olymp.jpg';

	import grantOfferPath from '$lib/images/Achievements/real-img/Scholarship.jpg';
	import nanoDegreePath from '$lib/images/Achievements/real-img/nanodegree.jpg';
	import internationalPath from '$lib/images/Achievements/real-img/inter-olymp.jpg';

	interface Iachievement {
		href: string;
		src: string;
		alt: string;
	}

	const achievements: Iachievement[] = [
		{
			href: grantOfferPath,
			src: grantOfferImage,
			alt: 'Scholarship offer from Innopolis University'
		},
		{
			href: nanoDegreePath,
			src: nanoDegreeImage,
			alt: 'Certificate of Udacity Nanodegree Program'
		},
		{
			href: internationalPath,
			src: internationalImage,
			alt: 'Participation of Republic Olympiad stage of International Informatics Olympiad'
		}
	];
</script>

<!-- ACHIEVEMENTS SECTION -->
<section id="achievements">
	<h3 class="achievements__title">Achievements</h3>
	<div class="card-container achievements__cards">
		{#each achievements as achievement}
			<div class="achievements__card card">
				<a href={achievement.href}
					><img class="card__image" src={achievement.src} alt={achievement.alt} /></a
				>
				<p class="card__info">{achievement.alt}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	@media (max-width: 400px) {
		.achievements__card > .card__info {
			font-size: 12pt;
			letter-spacing: 2px;
		}
		.achievements__title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		.achievements__card > .card__info {
			font-size: 12pt;
			letter-spacing: 2px;
		}
	}

	@media (min-width: 601px) and (max-width: 750px) {
		.achievements__card > .card__info {
			font-size: 13pt;
			letter-spacing: 2px;
		}
		.achievements__title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 751px) and (max-width: 850px) {
		.achievements__card > .card__info {
			font-size: 13pt;
			letter-spacing: 2px;
		}
		.achievements__title {
			letter-spacing: 4px;
			font-size: 14pt;
		}
	}

	@media (min-width: 851px) and (max-width: 1150px) {
		.achievements__card > .card__info {
			font-size: 14pt;
			letter-spacing: 2px;
		}
		.achievements__title {
			letter-spacing: 4px;
			font-size: 16pt;
		}
	}
</style>
