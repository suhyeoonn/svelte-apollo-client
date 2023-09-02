<script lang="ts">
	const menus = [
		{ link: '/roles', name: 'Roles' },
		{ link: '/', name: 'Teams' },
		{ link: '/people', name: 'Pepole' }
	];
</script>

<header class="bg-white flex gap-5 items-center">
	<h1 class="text-2xl font-bold">Company management</h1>
	<nav>
		<ul class="flex gap-5">
			{#each menus as menu}
				<li><a href={menu.link}>{menu.name}</a></li>
			{/each}
		</ul>
	</nav>
</header>
