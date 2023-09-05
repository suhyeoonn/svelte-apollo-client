<script>
	const sexes = ['male', 'female'];
	const bloodTypes = ['A', 'B', 'AB', 'O'];
	const roles = ['developer', 'designer', 'planner'];

	export let inputs = {
		first_name: '',
		last_name: '',
		sex: sexes[0],
		blood_type: bloodTypes[0],
		serve_years: 0,
		role: roles[0],
		team: 0,
		from: ''
	};
	let contentId = inputs?.id;
</script>

<div class="inputContainer">
	<table>
		<tbody>
			{#if contentId}
				<tr>
					<td>Id</td>
					<td>{contentId}</td>
				</tr>
			{/if}
			<tr>
				<td>First Name</td>
				<td><input type="text" name="first_name" bind:value={inputs.first_name} /></td>
			</tr>
			<tr>
				<td>Last Name</td>
				<td><input type="text" name="last_name" bind:value={inputs.last_name} /></td>
			</tr>
			<tr>
				<td>Sex</td>
				<td>
					<select name="sex" bind:value={inputs.sex}>
						{#each sexes as sex}
							<option value={sex}>{sex}</option>
						{/each}
					</select>
				</td>
			</tr>
			<tr>
				<td>Blood Type</td>
				<td>
					<select name="blood_type" bind:value={inputs.blood_type}>
						{#each bloodTypes as bloodType}
							<option key={bloodType} value={bloodType}>{bloodType}</option>
						{/each}
					</select>
				</td>
			</tr>
			<tr>
				<td>Serve Years</td>
				<td><input type="number" name="serve_years" bind:value={inputs.serve_years} /></td>
			</tr>
			<tr>
				<td>Role</td>
				<td>
					<select name="role" bind:value={inputs.role}>
						{#each roles as role}
							<option value={role}>{role}</option>
						{/each}
					</select>
				</td>
			</tr>
			<tr>
				<td>Team</td>
				<td><input type="number" name="team" bind:value={inputs.team} /></td>
			</tr>
			<tr>
				<td>From</td>
				<td><input type="text" name="from" bind:value={inputs.from} /></td>
			</tr>
		</tbody>
	</table>
	{#if contentId > 0}
		<ul>
			{#each inputs.tools as tool}
				<li>
					{tool.id}
					{#if tool.__typename === 'Equipment'}
						<span>
							<span class="count">{tool.count}</span>
							<span class="increase"> 🔺 </span>
						</span>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
	<!-- 
    {contentId === 0 ? 
      (<div className="buttons">
        <button onClick={() => {execPostPerson()}}>Submit</button>
      </div>
      ) : (
      <div className="buttons">
        <button onClick={() => {execEditPerson()}}>Modify</button>
        <button onClick={() => {execDeletePerson()}}>Delete</button>
        <button onClick={() => {setContentId(0)}}>New</button>
      </div>
      )} -->
</div>
