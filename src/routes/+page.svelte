<script>
	import Header from '../components/Header.svelte';
	import Roles from '../components/Roles.svelte';

	import { ApolloClient, InMemoryCache } from '@apollo/client/core';
	import { setClient } from 'svelte-apollo';

	const client = new ApolloClient({
		uri: 'http://localhost:4000',
		cache: new InMemoryCache()
	});
	// ...
	setClient(client);
</script>

<div class="wrapper">
	<Header />
	<Roles />
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
