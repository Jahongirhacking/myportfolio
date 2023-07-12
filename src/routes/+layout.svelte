<!-- NAVBAR -->
<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/normalize.scss';
</script>

<!-- NAVBAR -->
<Navbar />
<!-- MAIN -->
<slot />
<!-- FOOTER -->
<Footer />
