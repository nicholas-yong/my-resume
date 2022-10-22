<script lang="ts">
    import { Menu } from "./types"
    import { isSideBarOpen } from '../../helpers/store'
    import Icon from "../Icons/Icon.svelte"
    import { onMount } from "svelte"
    
    export let menuItems: Menu
    let localSideBarOpen: boolean;
        let sideBarContainer;

    onMount(() => {


    isSideBarOpen.subscribe((val) => {
        val = localSideBarOpen
    })

    export const openHamburgerMenu = () => {
        localSideBarOpen = !localSideBarOpen
    }

    // Setup global listener to close the side bar menu
    (function (){
        if(typeof window !== 'undefined')
        {
            const mainElement = window.document.getElementById('main-element')
            mainElement.addEventListener('click', (event) => {
                if(localSideBarOpen)
                {
                    // Check to see if we are clicking outside of the hamburger menu container
                    const {clientX, clientY} = event
                    const hamburgerMenuContainerLocation = 
                    if(clientX)
                    {

                    }
                    openHamburgerMenu()
                }
         
            })
        }
    })()
    })
</script>


<div bind:this = {sideBarContainer} class= {`${localSideBarOpen ? 'open': 'closed'}`}>
    <Icon className = {`${localSideBarOpen ? 'active':'inactive'}`} onClick = {openHamburgerMenu}/>
    <ul class = "hamburger-menu-container">
        {#each menuItems as {title, path, icon} }
        <li>
            <a href="/${path}">
                <div class = "hamburger-menu-item">
                    <Icon iconName = {icon}></Icon>
                    <span>{title}</span>
                </div>
            </a>
        </li>
        {/each}
    </ul>
</div>


<style type="text/scss">
    @use "../../helpers/styles" as styles;

    .hamburger-menu {
        z-index: styles.$zIndex-sidebar-menu;
        background-color: black;
        // These will be set relative to the browser window
        position: absolute;
        height: 100%;
    
        &.open
        {
            width: 80%;
        }

        &.closed
        {
            width: 0%;
        }
    }

    .hamburger-menu-container {
        padding-left: 1rem;
        padding-top: 0.5rem;

        li {
            padding: 1rem 0rem;
        }

        a {
            color: white;
            font-size: 14px;
            line-height: 14px;
            font-weight: 700px;
        }
    }

    .hamburger-menu-item {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            text-align: center;
        }
    }

    :global(.active) {
        display: block;
    }


    :global(.inactive) {
        display: none;
    }

</style>
