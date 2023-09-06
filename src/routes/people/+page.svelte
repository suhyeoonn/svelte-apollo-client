<script>
	import { GET_PEOPLE, GET_PERSON } from '$lib/peopleQuries';
	import { query, mutation } from 'svelte-apollo';
	import PersonInfo from '../../components/PersonInfo.svelte';
	import AsidePeople from '../../components/AsidePeople.svelte';

	const people = query(GET_PEOPLE);

	let contentId;

	let person;
	$: if (contentId) {
		person = query(GET_PERSON, {
			variables: { id: contentId }
		});
	}

	const setContentId = (id) => {
		contentId = id;
	};
</script>

<nav class="bg-gray-600 text-white p-5">
	{#if $people.loading}
		<p>Loading...</p>
	{:else if $people.error}
		<p>ERROR: {$people.error.message}</p>
	{:else}
		<AsidePeople people={$people.data.people} on:set-id={({ detail: id }) => setContentId(id)} />
	{/if}
</nav>
<main>
	{#if !contentId}
		<PersonInfo />
	{:else if $person.loading}
		<p>Loading...</p>
	{:else if $person.error}
		<p>ERROR: {$person.error.message}</p>
	{:else}
		<PersonInfo inputs={$person.data.person} />
	{/if}
</main>
