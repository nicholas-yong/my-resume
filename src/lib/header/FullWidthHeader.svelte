<script lang="ts">
import type { Menu } from "./types";
export let menuItems: Menu
</script>

<nav>
	<div class = "nameHeader">
		<span>Nicholas Yong</span>
	</div>
	<div class = "rightAligned">
		{#each menuItems as {title, path}}
		<div class = "menuItem">
			<a href = {path}>{title}</a>
		</div>
		{/each}
	</div>
</nav>

<style type="text/scss">
	@use "../../helpers/styles" as styles;
	nav {
		width: 100%;
		margin-bottom: styles.$margins-xxlarge;
		padding: styles.$margins-normal styles.$margins-xlarge;
		display: flex;
	}

	span {
		font-size: styles.$font-size-large;
	}

	.rightAligned
	{
		margin-left: auto;
		display: flex;
		// This is outside the margin range, so treat it as an exception.
		gap: 60px;
	}

	.menuItem > a
	{
		position: relative;
		color: black;
	}

	.menuItem > a:hover 
	{
		text-decoration: none;
	}

	.menuItem > a::after
	{
		content: "";
		position: absolute;
		width: 0;
		background-color: black;
		height: 2px;
		bottom: -3px;
		left: 0;
	}

	.menuItem:hover > a::after
	{
		transition: width 0.5s;
		width: 100%;
	}
</style>
