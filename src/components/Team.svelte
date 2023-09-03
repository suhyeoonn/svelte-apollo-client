<script>
	import { gql } from '@apollo/client/core';
	import { createEventDispatcher } from 'svelte';
	import { query } from 'svelte-apollo';

	export let inputs;
	console.log(inputs);

	const dispatch = createEventDispatcher();
</script>

<div class="bg-white p-5 border border-gray-50">
	<table>
		<tbody>
			<!-- {contentId !== 0 && (
          
        )} -->
			<tr>
				<td>Id</td>
				<td>{inputs.id}</td>
			</tr>
			<tr>
				<td>Manager</td>
				<td><input type="text" name="manager" bind:value={inputs.manager} /></td>
			</tr>
			<tr>
				<td>Office</td>
				<td><input type="text" name="office" bind:value={inputs.office} /></td>
			</tr>
			<tr>
				<td>Extension Number</td>
				<td><input type="text" name="extension_number" bind:value={inputs.extension_number} /></td>
			</tr>
			<tr>
				<td>Mascot</td>
				<td><input type="text" name="mascot" bind:value={inputs.mascot} /></td>
			</tr>
			<tr>
				<td>Cleaning Duty</td>
				<td><input type="text" name="cleaning_duty" bind:value={inputs.cleaning_duty} /></td>
			</tr>
			<tr>
				<td>Project</td>
				<td><input type="text" name="project" bind:value={inputs.project} /></td>
			</tr>
		</tbody>
	</table>
	<!-- {contentId === 0 ? 
      (<div className="buttons">
        <button on:click={() => {}}>Submit</button>
      </div>
      ) : (
      
      )} -->
	<div>
		<button on:click={() => dispatch('edit', inputs)}>Modify</button>
		<button on:click={() => dispatch('delete')}>Delete</button>
		<!-- <button
			on:click={() => {
				setContentId(0);
			}}>New</button
		> -->
	</div>
</div>

<style>
	input {
		background-color: white;
		border: 1px solid #eee;
	}
	button {
		background-color: #ddd;
		padding: 2px;
	}
</style>
