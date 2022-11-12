<script lang="ts">
    import { Menu } from "./types"
    import { isSideBarOpen } from '../../helpers/store'
    import Icon from "../Icons/Icon.svelte"
    import { onMount } from "svelte"
    
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
                    <div>{title}</div>
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
        transition: width 0.6s;
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
    }

    .hamburger-menu-container {
        padding-left: 1.5rem;
        padding-top: 0.5rem;

        li {
            padding: 1rem 0rem;
            list-style: none;
        }

        a {
            color: black;
            font-size: 14px;
            line-height: 14px;
            font-weight: 700;
        }
    }

    .hamburger-menu-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: white;
   

        svg {
            fill: white;
        }

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
