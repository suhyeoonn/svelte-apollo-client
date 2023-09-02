<script>
	import { ApolloClient, InMemoryCache } from '@apollo/client/core';
	import { setClient } from 'svelte-apollo';
	import Roles from '../../components/Roles.svelte';

	const client = new ApolloClient({
		uri: 'http://localhost:4000',
		cache: new InMemoryCache()
	});
	// ...
	setClient(client);
</script>

<Roles />

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
