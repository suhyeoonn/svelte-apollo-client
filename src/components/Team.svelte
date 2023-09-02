<script>
	import { gql } from '@apollo/client/core';
	import { error } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';
	import { query, mutation } from 'svelte-apollo';

	export let inputs;
	console.log(inputs);

	const DELETE_TEAM = gql`
		mutation DeleteTeam($id: ID!) {
			deleteTeam(id: $id) {
				id
			}
		}
	`;

	const deleteTeam = mutation(DELETE_TEAM);
	async function execDeleteTeam() {
		if (!window.confirm('이 항목을 삭제하시겠습니까?')) {
			return;
		}
		try {
			await deleteTeam({ variables: { id: inputs.id } });
			deleteTeamCompleted();
		} catch (e) {
			console.error(e);
		}
	}

	const dispatch = createEventDispatcher();
	function deleteTeamCompleted() {
		alert(`${inputs.id} 항목이 삭제되었습니다.`);
		dispatch('set-id', 0);
	}
	// ...
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
				<td><input type="text" name="manager" value={inputs.manager} /></td>
			</tr>
			<tr>
				<td>Office</td>
				<td><input type="text" name="office" value={inputs.office} /></td>
			</tr>
			<tr>
				<td>Extension Number</td>
				<td><input type="text" name="extension_number" value={inputs.extension_number} /></td>
			</tr>
			<tr>
				<td>Mascot</td>
				<td><input type="text" name="mascot" value={inputs.mascot} /></td>
			</tr>
			<tr>
				<td>Cleaning Duty</td>
				<td><input type="text" name="cleaning_duty" value={inputs.cleaning_duty} /></td>
			</tr>
			<tr>
				<td>Project</td>
				<td><input type="text" name="project" value={inputs.project} /></td>
			</tr>
		</tbody>
	</table>
	<!-- {contentId === 0 ? 
      (<div className="buttons">
        <button on:click={() => {}}>Submit</button>
      </div>
      ) : (
      
      )} -->
	<div className="buttons">
		<button on:click={() => {}}>Modify</button>
		<button on:click={execDeleteTeam}>Delete</button>
		<button
			on:click={() => {
				setContentId(0);
			}}>New</button
		>
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
