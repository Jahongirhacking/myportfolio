<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons';
	import todoListScreen from '$lib/images/Projects/todolist.jpg';
	import travelScreen from '$lib/images/Projects/project5.jpg';
	import sciveniaScreen from '$lib/images/Projects/scivenia.jpg';
	import schoolScreen from '$lib/images/Projects/school.jpg';
	import appleScreen from '$lib/images/Projects/apple.jpg';
	import frontScreen from '$lib/images/Projects/frontendmentor.jpg';

	interface Iproject {
		image: string;
		title: string;
		description: string;
		buttons: Array<{ className: string; href: string }>;
	}

	const projects: Iproject[] = [
		{
			image: todoListScreen,
			title: 'Todo List App',
			description: `I used Binary Search Algorithm to make Reactive state manually in JavaScript by efficiently finding the index of the clicked element from
        the list of Todos, this enhanced the process of editing and deleting a list. Before
        deleting, it will show you a modal. I added "Clear All" button to clear everything and a
        new "read the whole text" function since the text content for list is limited`,
			buttons: [
				{
					className: 'github-link',
					href: 'https://github.com/Jahongirhacking/FE-Projects/tree/main/CRUD%20App'
				},
				{ className: 'demo-link', href: 'https://bulalar-todo.netlify.app/' }
			]
		},

		{
			image: sciveniaScreen,
			title: 'Scivenia Beta Project',
			description: `As part of this university software project, we created a specific functionality of a bigger web app. The aim of this functionality is to visualize and demonstrate the scientific collaboration between researchers and scientists. I used Breadth First Search algorithm in the client side to find all collaborators of the researcher. Used technologies: React JS and Sigma JS`,
			buttons: [
				{ className: 'github-link', href: 'https://github.com/Jahongirhacking/SciVenia-beta' }
			]
		},
		{
			image: travelScreen,
			title: 'Travel Planner App',
			description: `Travel Planner App - This project requires me to build out a travel app that, at a
					minimum, obtains a desired trip location & date from the user, and displays weather and an
					image of the location using information obtained from external APIs. I also added
					additional functionalities. Used technologies: HTML, SASS, JavaScript, Express JS and
					Webpack`,
			buttons: [
				{
					className: 'github-link',
					href: 'https://github.com/Jahongirhacking/Udacity-FE-Projects/tree/main/udacity-5'
				},
				{ className: 'demo-link', href: 'https://bulalar-travel.netlify.app/' }
			]
		},
		{
			image: schoolScreen,
			title: '68th School App',
			description: `68-DIMI WebApp - This application was created for students of our school in Uzbekistan. In
					this project, the students can play games, solve problems, take tests and compete to win.
					It has a leaderboard to show top students who collect points by taking tests and exams
					which being organized by the App. Used technologies: HTML, CSS, JavaScript and PHP`,
			buttons: [
				{ className: 'github-link', href: 'https://github.com/Jahongirhacking/68dimi' },
				{ className: 'demo-link', href: 'https://68dimi.netlify.app/' },
				{ className: 'youtube-link', href: 'https://youtu.be/f1KV9d9tQu4' }
			]
		},
		{
			image: appleScreen,
			title: 'Apple Clone Layout',
			description: `I was going to sharpen my CSS skills to work with Flexbox ang Grid Layouts. I choose
					Apple's website and tried to build its clone. I hope this layout looks like the real Apple
					Website. Used technologies: HTML and CSS`,
			buttons: [
				{ className: 'github-link', href: 'https://github.com/Jahongirhacking/apple' },
				{ className: 'demo-link', href: 'https://apple-bulalar.netlify.app/' }
			]
		},
		{
			image: frontScreen,
			title: 'Frontend Mentor',
			description: `You can see my other works related to Front-End stuff. I think this platform is the best for
					learning and gaining some experience, by doing some practice, I
					have achieved a lot of progress on this platform.`,
			buttons: [
				{ className: 'demo-link', href: 'https://www.frontendmentor.io/profile/Jahongirhacking' }
			]
		}
	];
</script>

<!-- PORTFOLIO SECTION -->
<section id="portfolio">
	<h2 class="portfolio__heading">Portfolio</h2>
	<div class="project-container portfolio__projects">
		<!-- 1st -->
		{#each projects as project}
			<div class="portfolio__project">
				<img class="portfolio__img" src={project.image} alt={project.title} />
				<div class="portfolio__description">
					<h2 class="portfolio__title">{project.title}</h2>
					<p class="portfolio__info">{project.description}</p>
					<div class="portfolio__links">
						{#each project.buttons as button}
							<a href={button.href} class={`${button.className} portfolio__link`}>
								{#if button.className === 'github-link'}
									GitHub <Fa icon={faGithub} />
								{/if}
								{#if button.className === 'demo-link'}
									Demo <Fa icon={faLink} />
								{/if}
								{#if button.className === 'youtube-link'}
									Play <Fa icon={faVideo} />
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/*----> PORTFOLIO SECTION <----*/

	#portfolio {
		background-image: linear-gradient(#00000084, #00000067), url('../images/wallpaper.jpg');
		background-position: center;
		padding: 0;
		padding-bottom: 80px;
	}

	#portfolio > .portfolio__heading {
		text-align: center;
		background-color: var(--secondary-color-shadow);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		padding: 30px 0;
		border-radius: 0px 0px 30px 30px;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-weight: 500;
		font-size: 22pt;
		color: var(--primary-color);
	}

	.portfolio__projects {
		width: 90%;
		margin: auto;
		margin-top: 80px;
		border-radius: 25px;
		padding: 50px 30px;
		background-color: rgba(0, 0, 0, 0.433);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		display: flex;
		flex-direction: column;
		gap: 50px;
		align-items: center;
	}

	.portfolio__projects > .portfolio__project {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		gap: 40px;
	}

	.portfolio__img {
		flex: 0.7;
		text-align: center;
		border-radius: 5px;
		border: 5px inset var(--primary-color);
		transition: 0.4s ease;
	}

	.portfolio__project:nth-child(2n + 1):hover > .portfolio__img {
		transform: perspective(150px) rotateY(4deg);
	}

	.portfolio__project:nth-child(2n) > .portfolio__img {
		order: 2;
	}

	.portfolio__project:nth-child(2n) > .portfolio__description {
		order: 1;
	}

	.portfolio__project:nth-child(2n):hover > .portfolio__img {
		transform: perspective(150px) rotateY(-4deg);
	}

	.portfolio__description {
		flex: 1;
		text-align: center;
		color: var(--text-color);
	}

	.portfolio__description > .portfolio__title {
		font-size: 20pt;
		margin: auto;
		margin-bottom: 20px;
		color: var(--primary-color);
		font-weight: 500;
	}

	.portfolio__description > .portfolio__info {
		margin: auto;
		font-size: 15pt;
		color: var(--text-color-shadow);
	}

	.portfolio__links {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin: auto;
		margin-top: 20px;
		flex-wrap: wrap;
		gap: 10px;
	}

	.portfolio__link {
		width: fit-content;
		font-weight: 500;
		font-size: 14pt;
		margin: auto;
		padding: 15px 25px;
		transition: 0.6s ease;
		transition-property: background, color;
	}

	.portfolio__link.demo-link {
		border-right: 4px solid rgb(12, 116, 97);
		border-left: 4px solid rgb(12, 116, 97);
	}

	.portfolio__link.demo-link:hover {
		background: rgb(12, 116, 97);
	}

	.portfolio__link.youtube-link {
		border-right: 4px solid #c4302b;
		border-left: 4px solid #c4302b;
	}

	.portfolio__link.youtube-link:hover {
		background: #c4302b;
	}

	.portfolio__link.github-link {
		border-right: 4px solid #ffffff;
		border-left: 4px solid #ffffff;
	}

	.portfolio__link.github-link:hover {
		background: #000000;
		border-right: 4px solid #000000;
		border-left: 4px solid #000000;
	}

	@media (max-width: 400px) {
		.portfolio__projects {
			margin-top: 50px;
			padding: 50px 8px;
		}

		.portfolio__project {
			flex-direction: column;
		}

		.portfolio__img {
			width: 100%;
		}

		.portfolio__project:nth-child(2n) > .portfolio__img {
			order: 1;
		}

		.portfolio__project:nth-child(2n) > .portfolio__description {
			order: 2;
		}

		.portfolio__description > .portfolio__info {
			font-size: 13pt;
			max-height: 260px;
			overflow: auto;
		}

		.portfolio__link {
			font-size: 11pt;
			padding: 10px 20px;
		}
	}

	@media (min-width: 401px) and (max-width: 600px) {
		.portfolio__project {
			flex-direction: column;
		}

		.portfolio__img {
			width: 100%;
		}

		.portfolio__project:nth-child(2n) > .portfolio__img {
			order: 1;
		}

		.portfolio__project:nth-child(2n) > .portfolio__description {
			order: 2;
		}

		.portfolio__description > .portfolio__info {
			font-size: 14pt;
			line-height: 20pt;
			max-height: 280px;
			overflow: auto;
		}

		.portfolio__link {
			font-size: 13pt;
			padding: 12px 22px;
		}
	}

	@media (min-width: 601px) and (max-width: 750px) {
		.portfolio__project {
			flex-direction: column;
		}

		.portfolio__img {
			width: 80%;
		}

		.portfolio__project:nth-child(2n) > .portfolio__img {
			order: 1;
		}

		.portfolio__project:nth-child(2n) > .portfolio__description {
			order: 2;
		}

		.portfolio__description > .portfolio__info {
			font-size: 14pt;
			line-height: 20pt;
			max-height: 280px;
			overflow: auto;
		}
	}

	@media (min-width: 751px) and (max-width: 850px) {
		.portfolio__project {
			flex-direction: column;
		}

		.portfolio__img {
			width: 60%;
		}

		.portfolio__project:nth-child(2n) > .portfolio__img {
			order: 1;
		}

		.portfolio__project:nth-child(2n) > .portfolio__description {
			order: 2;
		}

		.portfolio__description > .portfolio__info {
			font-size: 15pt;
			line-height: 22pt;
			max-height: 280px;
			overflow: auto;
		}
	}
</style>
