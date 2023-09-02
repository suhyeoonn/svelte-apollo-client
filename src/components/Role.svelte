<script>
	import { gql } from '@apollo/client/core';
	import { query } from 'svelte-apollo';

	export let id;
	const GET_ROLE = gql`
		query GetRole($id: ID!) {
			role(id: $id) {
				id
				requirement
				members {
					id
					last_name
					serve_years
				}
				equipments {
					id
				}
				softwares {
					id
				}
			}
		}
	`;
	let role;
	$: {
		role = query(GET_ROLE, {
			variables: { id }
		});
	}
</script>

<main>
	{#if $role.loading}
		<li>Loading...</li>
	{:else if $role.error}
		<li>ERROR: {$role.error.message}</li>
	{:else}
		<div class="bg-white border border-gray-300 rounded-md m-10 p-5">
			<h2 class="text-2xl font-bold capitalize">{$role.data.role.id}</h2>
			<div><span class="text-blue-500">{$role.data.role.requirement}</span> required</div>
			<h3 class="text-xl text-gray-500 font-bold mt-5">Members</h3>
			<ul class="flex gap-2">
				{#each $role.data.role.members as member}
					<li class="bg-gray-100 p-1 px-2 rounded-sm">{member.last_name}</li>
				{/each}
			</ul>
			<h3 class="text-xl text-gray-500 font-bold mt-5">Equipments</h3>
			<ul class="flex gap-2">
				{#each $role.data.role.equipments as equipment}
					<li class="bg-gray-100 p-1 px-2 rounded-sm">{equipment.id}</li>
				{/each}
			</ul>
			<h3 class="text-xl text-gray-500 font-bold mt-5">Softwares</h3>
			<ul class="flex gap-2">
				{#each $role.data.role.softwares as software}
					<li class="bg-gray-100 p-1 px-2 rounded-sm">{software.id}</li>
				{/each}
			</ul>
		</div>
	{/if}
</main>
