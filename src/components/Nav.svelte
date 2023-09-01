<script lang="ts">
	const menus = ['💻 Developer', '🎨 Designer', '📝 Planner'];
</script>

<nav class="bg-gray-600 text-white p-5">
	<ul>
		{#each menus as menu}
			<li>{menu}</li>
		{/each}
	</ul>
</nav>
