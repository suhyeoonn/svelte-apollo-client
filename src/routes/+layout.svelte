<script>
	import '../app.css';
	import Header from '../components/Header.svelte';

	import { ApolloClient, InMemoryCache } from '@apollo/client/core';
	import { setClient } from 'svelte-apollo';

	const client = new ApolloClient({
		uri: 'http://localhost:4000',
		cache: new InMemoryCache()
	});
	// ...
	setClient(client);
</script>

<div class="wrapper bg-gray-100">
	<Header />
	<slot />
	<aside>Aside</aside>
</div>
