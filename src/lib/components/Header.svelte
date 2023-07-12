<script lang="ts">
	import Fa from 'svelte-fa';
	import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faCode } from '@fortawesome/free-solid-svg-icons';
	import profileImage from '$lib/images/profile.png';
	import triangleImage from '$lib/images/traiangle.png';
	import patternImage from '$lib/images/pattern.png';
</script>

<!-- HEADER -->
<header id="header">
	<div class="header__info">
		<span>Hi, Welcome to my Portfolio</span>
		<span>My fullname is</span>
		<h1 class="header__my-name">Hayitov Jahongir Akrom ugli</h1>
		<small class="header__my-job">I am a Front-End Developer</small>
		<ul class="header__network">
			<!-- LINKS CARD -->
			<li class="header__list">
				<a
					class="header__link"
					target="_blank"
					href="https://www.youtube.com/channel/UCcCMHnnX5p9yfZ-ZtaCaGCw?sub_confirmation=1"
					><Fa icon={faYoutube} /></a
				>
			</li>
			<li class="header__list">
				<a class="header__link" target="_blank" href="https://github.com/Jahongirhacking"
					><Fa icon={faGithub} /></a
				>
			</li>
			<li class="header__list">
				<a class="header__link" target="_blank" href="https://leetcode.com/Jahongirhacking/"
					><Fa icon={faCode} /></a
				>
			</li>
		</ul>
	</div>

	<div class="header__img">
		<img class="header__my-img" src={profileImage} alt="my profile" />
		<div class="header__img-shadow" />
		<img class="header__triangle-img animating-shape" src={triangleImage} alt="triangle pattern" />
		<img class="header__pattern-img animating-shape" src={patternImage} alt="animating pattern" />
	</div>
</header>

<style>
	/* HEADER */

	#header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 var(--default-padding);
		padding-top: 75px;
		padding-bottom: 70px;
		width: 100%;
		min-height: 560px;
		height: fit-content;
		background: linear-gradient(135deg, var(--secondary-color), var(--secondary-color-shadow)),
			url('wallpaper.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		color: var(--text-color);
		z-index: 0;
		position: relative;
		overflow: hidden;
	}

	.header__info {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: var(--text-color);
		z-index: 3;
		max-width: 700px;
	}

	.header__info > .header__my-name {
		font-weight: 700;
		font-size: 40pt;
		padding: 10px 0;
		letter-spacing: 2.5px;
		color: var(--primary-color);
		text-shadow: 0 0 7px var(--secondary-color);
	}

	.header__info > span {
		font-size: 20pt;
	}

	.header__info > .header__my-job {
		font-size: 13pt;
		color: var(--text-color-shadow);
	}

	.header__info > .header__network {
		margin-top: 37px;
		display: flex;
		gap: 40px;
		align-items: center;
		justify-content: space-around;
		width: fit-content;
		position: relative;
	}

	.header__network > .header__list {
		width: 75px;
		height: 70px;
		border-radius: 10px;
		text-align: center;
		line-height: 70px;
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.18);
		transition: 0.4s ease;
		transition-property: transform;
	}

	.header__network > .header__list:hover {
		transform: scale(1.05);
	}

	.header__list > .header__link {
		display: block;
		font-size: 40px;
		color: var(--primary-color);
	}

	/*Header Image*/
	#header > .header__img {
		flex: 1;
		max-width: 660px;
		min-width: 250px;
		position: relative;
		text-align: center;
		margin-bottom: 10px;
	}

	.header__img > .header__my-img {
		width: 70%;
		position: relative;
		z-index: 1;
	}

	.header__img > .header__img-shadow {
		position: absolute;
		left: 0px;
		top: -40px;
		width: 90%;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--primary-color), var(--primary-color-shadow));
		z-index: 0;
		transition: transform, 0.4s ease;
	}

	.header__img > .header__triangle-img {
		width: 22%;
		z-index: 2;
		position: absolute;
		left: 46px;
		top: -20px;
		transform: rotate(-85deg);
		animation: animateTriangle 4s ease infinite;
	}

	.header__img > .header__pattern-img {
		position: absolute;
		width: 28%;
		z-index: 0;
		right: 15px;
		bottom: -10px;
		transform: rotate(80deg);
		animation: animatePattern 5s ease infinite;
	}

	/* max 400 */
	@media (max-width: 400px) {
		* {
			--default-padding: 30px;
			--heading-font-size: 20pt;
			--info-font-size: 12pt;
		}
		#header {
			flex-direction: column;
			gap: 20px;
			padding-top: 70px;
		}
		#header > .header__img {
			order: 1;
			margin-left: 15px;
		}
		#header > .header__info {
			order: 2;
			text-align: center;
		}
		.header__info > span {
			font-size: 12pt;
		}
		.header__info > .header__my-name {
			font-size: 18pt;
		}
		.header__info > .header__my-job {
			font-size: 10pt;
		}
		.header__info > .header__network {
			gap: 20px;
			margin: auto;
			margin-top: 20px;
		}
		.header__network > .header__list {
			width: 55px;
			height: 50px;
			line-height: 50px;
		}
		.header__network > .header__list > .header__link {
			font-size: 30px;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		#header {
			flex-direction: column;
			gap: 20px;
			padding-top: 70px;
		}
		#header > .header__img {
			order: 1;
			margin-left: 15px;
			width: 60%;
		}
		#header > .header__info {
			order: 2;
			text-align: center;
		}
		.header__info > span {
			font-size: 14pt;
		}
		.header__info > .header__my-name {
			font-size: 24pt;
			max-width: 90%;
			margin: auto;
		}
		.header__info > .header__my-job {
			font-size: 13pt;
			margin: auto;
		}
		.header__info > .header__network {
			gap: 30px;
			margin: auto;
			margin-top: 20px;
		}
		.header__network > .header__list {
			width: 65px;
			height: 65px;
			line-height: 65px;
		}
		.header__network > .header__list > .header__link {
			font-size: 35px;
		}
	}

	@media (min-width: 601px) and (max-width: 750px) {
		#header {
			flex-direction: column;
			gap: 35px;
			padding-top: 80px;
		}
		#header > .header__img {
			order: 1;
			margin-left: 15px;
			width: 50%;
		}
		#header > .header__info {
			order: 2;
			text-align: center;
		}
		.header__info > span {
			font-size: 16pt;
		}
		.header__info > .header__my-name {
			font-size: 26pt;
			max-width: 90%;
			margin: auto;
		}
		.header__info > .header__my-job {
			font-size: 13pt;
			margin: auto;
		}
		.header__info > .header__network {
			gap: 40px;
			margin: auto;
			margin-top: 20px;
		}
		.header__network > .header__list {
			width: 75px;
			height: 75px;
			line-height: 75px;
		}
		.header__network > .header__list > .header__link {
			font-size: 40px;
		}
	}

	@media (min-width: 751px) and (max-width: 850px) {
		.header__info > span {
			font-size: 15pt;
		}
		.header__info > .header__my-name {
			font-size: 27pt;
		}
		.header__info > .header__network {
			gap: 40px;
			margin-top: 20px;
		}
		.header__network > .header__list {
			width: 65px;
			height: 65px;
			line-height: 65px;
		}
		.header__network > .header__list > .header__link {
			font-size: 35px;
		}
	}
</style>
