<!-- NAVBAR -->
<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import "$lib/styles/normalize.scss";
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="Brief introduction about myself" />
</svelte:head>

<!-- NAVBAR -->
<Navbar />
<!-- MAIN -->
<slot />
<!-- FOOTER -->
<Footer />