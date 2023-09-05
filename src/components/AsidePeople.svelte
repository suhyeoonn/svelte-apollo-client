<script>
	import { createEventDispatcher } from 'svelte';

	export let people;
	const dispatch = createEventDispatcher();
	function peopleFaces(sex, id) {
		const bySex = {
			male: ['🧑🏿', '👨🏻', '👦🏼', '‍🧓🏽', '🧔🏾'],
			female: ['👩🏻', '👧🏼', '👩🏽‍🦰', '👩🏾‍🦱', '👱🏿‍♀️']
		};
		return bySex[sex][id % bySex[sex].length];
	}
</script>

<ul>
	{#each people as { id, sex, first_name, last_name, blood_type }}
		<li on:keydown on:click={() => dispatch('set-id', id)}>
			<span class="face">{peopleFaces(sex, id)}</span>
			<span class="bloodType">{blood_type}</span>
			<span class="peopleName">{first_name} {last_name}</span>
		</li>
	{/each}
</ul>
