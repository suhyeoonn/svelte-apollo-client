<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div class="wrapper">
	<Header />
	<slot />
	<aside>Aside</aside>
</div>
