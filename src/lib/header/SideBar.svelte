<script lang="ts">
    import { isSideBarOpen } from '../../helpers/store'
    import Icon from "../Icons/Icon.svelte"
    import { onMount } from "svelte"
    import type { Menu } from './types'
    
    export let menuItems: Menu
    let localSideBarOpen: boolean;
    let sideBarContainer: HTMLDivElement
    let hamburgerIcon: HTMLDivElement

    const openHamburgerMenu = () => {
        localSideBarOpen = !localSideBarOpen
    }

    onMount(() => {
        // Setup a click handler on the window - this should be unmounted once the sidebar is unmounted
        window.document.addEventListener('click', (event) => {
            if(!sideBarContainer.contains(event.target as Node) && !hamburgerIcon.contains(event.target as Node) && localSideBarOpen)
            {
                localSideBarOpen = !localSideBarOpen
            }
        })

        isSideBarOpen.subscribe((val) => {
            val = localSideBarOpen
        })
    })
</script>

<div class = {localSideBarOpen ? 'inactive':'active'} bind:this={hamburgerIcon}>
    <Icon 
        className = {`hamburger-icon`} 
        iconName = {'hamburger'} 
        onClick = {openHamburgerMenu}
    />
</div>
<div bind:this = {sideBarContainer} class= {`hamburger-menu ${localSideBarOpen ? 'open': 'closed'}`}>
    <ul class = "hamburger-menu-container">
        {#each menuItems as {title, path, icon} }
        <li>
            <a href="/{path}">
                <div class = "hamburger-menu-item {localSideBarOpen ? 'active':'inactive'}">
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
        background-color: grey;
        // These will be set relative to the browser window
        position: absolute;
        height: 100%;
        transition: width 0.4s;
        transition-delay: 0.1s;
        transition-timing-function: ease;
    
        &.open
        {
            width: 70%;
        }

        &.closed
        {
            width: 0%;
        }
    }

    :global(.hamburger-icon) {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        cursor: pointer;


    }

    .hamburger-menu-container {
        padding-left: styles.$margins-large;
        padding-top: styles.$margins-small;

        li {
            padding: styles.$margins-small 0rem;
            list-style: none;
        }

        a {
            color: black;
            font-size: styles.$font-size-normal;
            line-height: 14px;
            font-weight: 700;
        }
    }

    .hamburger-menu-item {
        display: flex;
        align-items: center;
        gap: styles.$margins-normal;
        color: white;
        text-decoration: none;

        span {
            text-align: center;
        }
    }

    :global(.active) {
        visibility: visible;
    }


    :global(.inactive) {
        visibility: hidden;
    }

</style>
