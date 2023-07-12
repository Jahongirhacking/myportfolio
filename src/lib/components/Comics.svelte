<main class="comic-section">
	<button class="btn main__btn" id="generator-btn">
		<i class="fa-solid fa-image" /> Generate New Comic
	</button>
	<article class="main__img-container">
		<h2 class="hidden" id="comic-title">Lorem, ipsum.</h2>
		<img draggable="false" id="comic-img" class="comic-img" src="#" alt="default value for alt" />
		<small class="comic-date-wrapper hidden"
			>published date: <span id="comic-date">which date</span></small
		>
		<div class="img-loader overlay hidden">
			<i class="fa-solid fa-spin fa-spinner" />
		</div>
		<div class="sensitive-content overlay">
			<div class="sensitive-content__info">
				<i class="fa-regular fa-eye-slash" />
				<h3>Sensitive Content</h3>
				<p>This photo contains sensitive content</p>
			</div>
			<button class="btn sensitive-content__btn">See Photo</button>
		</div>
	</article>
	<small class="released-wrapper">Released <span id="reslease-time" /></small>
</main>
