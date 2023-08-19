<script>
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<div class="wrapper">
	<Header />
	<Nav />
	<main>Main</main>
	<aside>Aside</aside>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		height: 100vh;
	}

	.wrapper {
		display: grid;
		grid-template: auto 1fr auto / auto 1fr auto;
		height: 100%;
	}
</style>
