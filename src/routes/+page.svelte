<script>
	import { query } from 'svelte-apollo';
	import Team from '../components/Team.svelte';
	import TeamListItem from '../components/TeamListItem.svelte';
	import { GET_TEAMS, GET_TEAM } from '$lib/queries';

	const teams = query(GET_TEAMS);

	let id = 0;
	const setContentId = ({ detail: _id }) => {
		id = _id;
	};

	let team;

	$: {
		team = query(GET_TEAM, {
			variables: { id }
		});
	}
</script>

<nav class="bg-gray-600 text-white p-5">
	<ul class="divide-y divide-gray-50">
		{#if $teams.loading}
			<li>Loading...</li>
		{:else if $teams.error}
			<li>ERROR: {$teams.error.message}</li>
		{:else}
			{#each $teams.data.teams as { id, manager, members }}
				<TeamListItem {id} {manager} {members} on:set-id={setContentId} />
			{/each}
		{/if}
	</ul>
</nav>
<main>
	{#if !id}
		<p>select team</p>
	{:else if $team.loading}
		<p>Loading...</p>
	{:else if $team.error}
		<p>ERROR: {$team.error.message}</p>
	{:else}
		<Team inputs={$team.data.team} />
	{/if}
</main>
