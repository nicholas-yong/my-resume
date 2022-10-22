<script lang="ts">
import type { Menu } from "./types";
import  { isMobile } from '../../helpers/styling'
import SideBar from "./SideBar.svelte";
import Header from "./FullWidthHeader.svelte";

export let menuItems: Menu
let mobileViewport: boolean

$: if(typeof window !== 'undefined')
{
    window.addEventListener('resize', () => {
        mobileViewport = isMobile()
    })
}

$: renderObject = mobileViewport || isMobile() ? SideBar:Header
</script>

<header>
    <svelte:component this = {renderObject} menuItems = {menuItems}/>
</header>
