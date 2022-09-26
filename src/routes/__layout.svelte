<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<main>
	<Header/>
	<slot />
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		overflow-y:hidden;
	}
</style>
