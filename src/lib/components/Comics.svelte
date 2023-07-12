<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faImage } from '@fortawesome/free-solid-svg-icons';
	import moment, { type Moment } from 'moment';
	const myEmail = 'j.hayitov@innopolis.university';
	const baseUrl = new URL('https://fwd.innopolis.university/api/');

	interface IimgInfo {
		alt: string;
		img: string;
		safe_title: string;
		year: string;
		month: string;
		day: string;
	}

	let isSensitive = true;
	let gradientColor = 'var(--comic-background)';
	// Store New Date
	let date: Moment;
	let imageInfo: IimgInfo;
	let isPending = false;

	const generateRGB = () => {
		const rgbValues = [];
		for (let i = 0; i < 3; i++) rgbValues.push(Math.floor(Math.random() * 256));
		return rgbValues.join(', ');
	};

	const generateDegree = (): number => {
		return Math.floor(Math.random() * 360);
	};

	const generateBackgroundGradient = () => {
		gradientColor = `linear-gradient(${generateDegree()}deg, rgb(${generateRGB()}), rgb(${generateRGB()}))`;
	};

	const fetchImageId = async () => {
		const idUrl = new URL('./hw2', baseUrl);
		const searchParam = new URLSearchParams();
		searchParam.append('email', myEmail);
		return await fetch(`${idUrl}?${searchParam.toString()}`).then((res) => res.json());
	};

	const fetchImageInfo = async (imgId: string) => {
		const imgUrl = new URL('./comic', baseUrl);
		const searchParam = new URLSearchParams();
		searchParam.append('id', imgId);
		return await fetch(`${imgUrl}?${searchParam.toString()}`).then((res) => res.json());
	};

	const setDate = (
		year: string | undefined,
		month: string | undefined,
		day: string | undefined
	) => {
		date = moment(`${year}-${month}-${day}`);
	};

	const getPublishedDate = (date: Moment) => {
		return date && date.format('LL');
	};

	const getReleasedDate = (date: Moment) => {
		return date && date.fromNow();
	};

	const generateImage = async () => {
		try {
			isPending = true;
			// TODO: get all info about the image
			const imgId: string = await fetchImageId();
			const imgInfo: IimgInfo = await fetchImageInfo(imgId);
			// It's taking some time to load image from url
			setDate(imgInfo.year, imgInfo.month, imgInfo.day);
			imageInfo = imgInfo;
			generateBackgroundGradient();
			isPending = false;
		} catch (err) {
			console.error('Error! Cannot fetch the image, maybe a wrong url', (err as Error).message);
		}
	};

	onMount(() => {
		generateImage();
	});
</script>

<main class="comic-section" style={`background: ${gradientColor}`}>
	<button class="btn main__btn" id="generator-btn" on:click={generateImage}>
		<Fa icon={faImage} /> Generate New Comic
	</button>
	<article class="main__img-container">
		{#if isPending}
			<h2>Loading...</h2>
		{:else if imageInfo}
			<h2 class="hidden" id="comic-title">{imageInfo?.safe_title}</h2>
			<img
				draggable="false"
				id="comic-img"
				class="comic-img"
				src={imageInfo?.img}
				alt={imageInfo?.alt}
			/>
			<small class="comic-date-wrapper hidden"
				>published date: <span id="comic-date">{getPublishedDate(date)}</span></small
			>
		{:else}
			<h2>Some Error Occured</h2>
		{/if}

		<!-- Sensitive Content -->
		{#if isSensitive}
			<div class="sensitive-content overlay">
				<div class="sensitive-content__info">
					<i class="fa-regular fa-eye-slash" />
					<h3>Sensitive Content</h3>
					<p>This photo contains sensitive content</p>
				</div>
				<button class="btn sensitive-content__btn" on:click={() => (isSensitive = false)}
					>See Photo</button
				>
			</div>
		{/if}
	</article>
	<small class="released-wrapper">Released {getReleasedDate(date)}</small>
</main>

<style>
	:root {
		--comic-background: radial-gradient(
			circle farthest-corner at 10% 20%,
			rgba(14, 174, 87, 1) 0%,
			rgba(12, 116, 117, 1) 90%
		);
		--bg-color: rgb(13, 13, 13);
		--black-alpha: rgba(0, 0, 0, 0.6);
		--blue-alpha: rgba(3, 51, 79, 0.73);
	}

	.btn {
		font-size: 1rem;
		border: none;
		padding: 8px 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	main {
		min-height: 60vh;
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.main__btn {
		background-color: var(--text-color);
		color: var(--bg-color);
		font-weight: 600;
		transition: 0.3s ease;
		transition-property: background-color, color;
	}

	.main__btn:hover {
		color: var(--text-color);
		background-color: var(--bg-color);
	}

	.main__img-container {
		width: fit-content;
		position: relative;
		overflow: hidden;
		border-radius: 5px;
	}

	.comic-img {
		display: block;
		max-width: 90vw;
		z-index: 0;
		cursor: pointer;
	}

	article:hover #comic-title {
		display: block !important;
	}

	article:hover .comic-date-wrapper {
		display: block !important;
	}

	.sensitive-content {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--black-alpha);
		backdrop-filter: blur(10px);
		left: 0;
		top: 0;
		display: flex;
		gap: 5px;
		flex-direction: column;
		align-items: center;
		padding: 5px 25px;
		z-index: 2;
	}

	.sensitive-content__info {
		flex: 1;
		display: flex;
		gap: 10px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--text-color);
		overflow: hidden;
	}

	.sensitive-content__info > i.fa-eye-slash {
		font-size: 30px;
	}

	.sensitive-content__btn {
		padding: 10px 0;
		width: 100%;
		font-weight: 600;
		background-color: transparent;
		border-top: 1px solid var(--text-color);
		color: var(--text-color);
		border-radius: 0;
	}

	#comic-title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 15pt;
		padding: 10px 20px;
		display: block;
		z-index: 0;
		background-color: var(--black-alpha);
		backdrop-filter: blur(8px);
		color: var(--text-color);
		user-select: none;
	}

	.comic-date-wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 10pt;
		padding: 8px 10px;
		display: block;
		z-index: 0;
		background-color: var(--black-alpha);
		backdrop-filter: blur(8px);
		color: var(--text-color);
		user-select: none;
	}

	.released-wrapper {
		background-color: white;
		color: black;
		font-weight: 600;
		font-size: 11pt;
		padding: 5px 8px;
		border-radius: 5px;
	}

	@media screen and (max-width: 450px) {
		.btn {
			font-size: 10pt;
		}

		#comic-title {
			font-size: 10pt;
		}

		.comic-date-wrapper {
			font-size: 6pt;
		}

		.sensitive-content {
			padding: 3px 8px;
		}

		.sensitive-content__info {
			gap: 3px;
		}

		.sensitive-content__info > h3 {
			font-size: 12pt;
		}

		.sensitive-content__info > p {
			font-size: 10pt;
		}

		.sensitive-content__info > i.fa-eye-slash {
			font-size: 30px;
		}
		.comic-img {
			max-width: 96vw;
		}
	}
</style>
