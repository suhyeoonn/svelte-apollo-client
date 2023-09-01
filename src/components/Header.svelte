<script lang="ts">
	const menus = ['Roles', 'Teams', 'Pepole'];
</script>

<header class="bg-white flex gap-5 items-center">
	<h1 class="text-2xl font-bold">Company management</h1>
	<nav>
		<ul class="flex gap-5">
			{#each menus as menu}
				<li>{menu}</li>
			{/each}
		</ul>
	</nav>
</header>
