<script>
	import { query, mutation } from 'svelte-apollo';
	import Team from '../components/Team.svelte';
	import TeamListItem from '../components/TeamListItem.svelte';
	import { GET_TEAMS, GET_TEAM, DELETE_TEAM } from '$lib/queries';

	let id = 0;
	const setContentId = (_id) => {
		id = _id;
	};

	const teams = query(GET_TEAMS);
	$: teams.refetch({ id });

	let team;

	$: {
		team = query(GET_TEAM, {
			variables: { id }
		});
	}

	async function execDeleteTeam() {
		if (!window.confirm('이 항목을 삭제하시겠습니까?')) {
			return;
		}
		try {
			await deleteTeam({ variables: { id } });
			deleteTeamCompleted();
		} catch (e) {
			console.error(e);
		}
	}
	const deleteTeam = mutation(DELETE_TEAM);
	function deleteTeamCompleted() {
		alert(`${id} 항목이 삭제되었습니다.`);
		setContentId(0);
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
				<TeamListItem {id} {manager} {members} on:set-id={({ detail: id }) => setContentId(id)} />
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
		<Team inputs={$team.data.team} on:delete={execDeleteTeam} />
	{/if}
</main>
