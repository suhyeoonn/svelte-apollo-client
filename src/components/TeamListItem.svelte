<script>
	import { createEventDispatcher } from 'svelte';

	export let id, manager, members;

	const roleIcons = {
		developer: '💻',
		designer: '🎨',
		planner: '📝'
	};

	const dispatch = createEventDispatcher();
</script>

<li class="p-2">
	<span class="font-bold text-lg" on:click={() => dispatch('set-id', id)}>
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
