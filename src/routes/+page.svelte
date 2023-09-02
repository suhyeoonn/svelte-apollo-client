<script>
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	const roleIcons = {
		developer: '💻',
		designer: '🎨',
		planner: '📝'
	};

	const GET_TEAMS = gql`
		query GetTeams {
			teams {
				id
				manager
				members {
					id
					first_name
					last_name
					role
				}
			}
		}
	`;
	const teams = query(GET_TEAMS);
</script>

<nav class="bg-gray-600 text-white p-5">
	<ul class="divide-y divide-gray-50">
		{#if $teams.loading}
			<li>Loading...</li>
		{:else if $teams.error}
			<li>ERROR: {$teams.error.message}</li>
		{:else}
			{#each $teams.data.teams as { id, manager, members }}
				<li class="p-2">
					<span class="font-bold text-lg">
						Team {id} : {manager}'s
					</span>
					<ul class="px-2 divide-y divide-gray-300 text-gray-300">
						{#each members as { id, first_name, last_name, role }}
							<li>
								{roleIcons[role]}
								{first_name}
								{last_name}
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
