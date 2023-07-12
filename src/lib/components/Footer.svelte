<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faYoutube,
		faGithub,
		faInstagram,
		faTelegram,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	import { faCode, faRobot, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

	interface Ilinks {
		href: string;
		id: string;
		icon: object;
	}

	const footerLinks: Ilinks[] = [
		{
			href: 'https://www.youtube.com/channel/UCcCMHnnX5p9yfZ-ZtaCaGCw?sub_confirmation=1',
			id: 'yt-link',
			icon: faYoutube
		},
		{ href: 'https://github.com/Jahongirhacking', id: 'gh-link', icon: faGithub },
		{ href: 'https://www.instagram.com/jahongir_khayitov/', id: 'ig-link', icon: faInstagram },
		{ href: 'https://t.me/JahongirKhayitov', id: 'tg-link', icon: faTelegram },
		{
			href: 'https://www.linkedin.com/in/jahongir-hayitov-633b9a1b3/',
			id: 'ln-link',
			icon: faLinkedin
		},
		{ href: 'https://leetcode.com/Jahongirhacking/', id: 'lc-link', icon: faCode },
		{ href: 'https://www.instagram.com/jahongir_khayitov/', id: 'ig-link', icon: faInstagram },
		{ href: 'https://robocontest.uz/profile/jahongir_khayitov', id: 'rb-link', icon: faRobot },
		{ href: 'mailto:Jahongirhacking@gmail.com', id: 'email', icon: faEnvelope }
	];
</script>

<footer id="footer">
	<h3 class="footer__title">Contact Me</h3>
	<div class="footer__links link-container">
		{#each footerLinks as footerLink}
			<a class="footer__link" href={footerLink.href} id={footerLink.id}
				><Fa class="icon" icon={footerLink.icon} /></a
			>
		{/each}
	</div>
	<p class="footer__info">
		&copy; Jahongir Hayitov 2021 - {new Date().getFullYear()} | Made with
		<Fa icon={faHeart} class="red-color" />
	</p>
	<small class="footer__small">last update: 12 Jul, 2023</small>
</footer>

<style>
	/*----->   FOOTER SECTION   <-----*/

	#footer {
		background-color: var(--secondary-color);
		margin: auto;
		padding: 50px 10px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 25px;
	}

	.footer__title {
		margin: auto;
		font-size: 21pt;
		letter-spacing: 5px;
		width: fit-content;
		text-transform: uppercase;
	}

	.footer__links {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-content: space-between;
		align-items: center;
		width: 70%;
		margin: 20px auto;
		gap: 15px;
	}

	.footer__link {
		text-align: center;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		display: block;
		transition: 0.6s ease;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer__link:hover {
		background-color: var(--primary-color);
	}

	.footer__info {
		letter-spacing: 1.5px;
		font-size: 12pt;
		font-weight: 500;
		margin: auto;
	}

	.footer__small {
		font-size: 8pt;
		color: var(--text-color-shadow);
	}

	/* Max 400px */
	@media (max-width: 400px) {
		.footer__title {
			font-size: 18pt;
		}

		.footer__links {
			width: 85%;
		}

		.footer__link {
			width: 40px;
			height: 40px;
		}

		.footer__info {
			letter-spacing: 1px;
			font-size: 8pt;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		.footer__title {
			font-size: 18pt;
		}

		.footer__links {
			width: 85%;
		}

		.footer__link {
			width: 45px;
			height: 45px;
		}

		.footer__info {
			letter-spacing: 1px;
			font-size: 8pt;
		}
	}
</style>
