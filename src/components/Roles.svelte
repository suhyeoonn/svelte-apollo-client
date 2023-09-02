<script>
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	const icons = ['💻', '🎨', '📝'];
	// ...
	const GET_ROLES = gql`
		query GetRoles {
			roles {
				id
			}
		}
	`;

	const roles = query(GET_ROLES);
</script>

<nav class="bg-gray-600 text-white p-5">
	<ul>
		{#if $roles.loading}
			<li>Loading...</li>
		{:else if $roles.error}
			<li>ERROR: {$roles.error.message}</li>
		{:else}
			{#each $roles.data.roles as book, i}
				<li>{icons[i]} {book.id}</li>
			{/each}
		{/if}
	</ul>
</nav>
