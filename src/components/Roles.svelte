<script>
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	import Role from './Role.svelte';

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

	$: id = 'developer';
	const onClick = (_id) => {
		console.log(_id);
		id = _id;
	};
</script>

<nav class="bg-gray-600 text-white p-5">
	<ul>
		{#if $roles.loading}
			<li>Loading...</li>
		{:else if $roles.error}
			<li>ERROR: {$roles.error.message}</li>
		{:else}
			{#each $roles.data.roles as role, i}
				<li class="cursor-pointer" on:keydown on:click={() => onClick(role.id)}>
					{icons[i]}
					{role.id}
				</li>
			{/each}
		{/if}
	</ul>
</nav>

<Role {id} />
