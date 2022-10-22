<script lang="ts">
	import Header from '$lib/header/Header.svelte';
    import type { Menu } from '$lib/header/types'
	import '../app.css';
	const menuItems: Menu = [
		{
			title: 'Home',
			path: '/',
			icon: 'home'
			
		},
		{
			title: 'About',
			path: '#about',
			icon: 'about'
		},
		{
			title: 'Contact',
			path: '#contact',
			icon: 'contact'
		}
	]

</script>

<main id="main-element">
	<Header menuItems = {menuItems}/>
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
