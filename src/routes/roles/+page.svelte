<script>
	import Roles from '../../components/Roles.svelte';
</script>

<Roles />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
		height: 100vh;
	}

	.wrapper {
		display: grid;
		grid-template: auto 1fr auto / auto 1fr auto;
		height: 100%;
	}
</style>
