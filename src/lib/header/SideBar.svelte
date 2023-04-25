<script lang="ts">
  import { isSideBarOpen } from '../../helpers/store'
  import Icon from '../Icons/Icon.svelte'
  import { onMount } from 'svelte'
  import type { Menu } from './types'

  export let menuItems: Menu
  let localSideBarOpen: boolean = false
  let sideBarContainer: HTMLDivElement
  let localOverflowVal: string
  let iconName: string = 'hamburger'

  const menuToggle = (event: MouseEvent) => {
    event.preventDefault()

    const { top, right, bottom, left } =
      sideBarContainer.getBoundingClientRect()
    const clickedWithinMenu = isClickedWithin(
      {
        top,
        right,
        bottom,
        left,
      },
      {
        x: event.x,
        y: event.y,
      },
    )

    // We want to close the menu if the click event occured outside of it.
    if (!clickedWithinMenu) {
      iconName = 'hamburger'
      document.body.style.overflow = localOverflowVal
      localSideBarOpen = false
    }
  }

  const openHamburgerMenu = (event: MouseEvent) => {
    event.stopImmediatePropagation()
    localSideBarOpen = !localSideBarOpen

    if (localSideBarOpen) {
      document.body.style.overflow = 'hidden'
      window.document.addEventListener('click', menuToggle)
    } else {
      window.document.removeEventListener('click', menuToggle)
    }
  }

  const isClickedWithin = (
    elementProperties: {
      top: number
      right: number
      bottom: number
      left: number
    },
    clickedLocation: { x: number; y: number },
  ) => {
    return (
      clickedLocation.x >= elementProperties.left &&
      clickedLocation.x <= elementProperties.right &&
      clickedLocation.y >= elementProperties.top &&
      clickedLocation.y <= elementProperties.bottom
    )
  }

  onMount(() => {
    localOverflowVal = document.body.style.overflow
    isSideBarOpen.subscribe((val) => {
      val = localSideBarOpen
    })
  })
</script>

<div
  bind:this={sideBarContainer}
  class={`hamburger-menu ${localSideBarOpen ? 'open' : 'closed'}`}
>
  <Icon
    {iconName}
    onClick={(event) => openHamburgerMenu(event)}
    className={`hamburger-icon ${localSideBarOpen ? 'invisible' : 'visible'}`}
  />
  <ul class="hamburger-menu-container">
    {#each menuItems as { title, path, icon }}
      <li>
        <a href="/{path}">
          <div
            class="hamburger-menu-item {localSideBarOpen
              ? 'active'
              : 'inactive'}"
          >
            <Icon iconName={icon} />
            <span>{title}</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
<div id="overlay" class={localSideBarOpen ? 'active' : 'inactive'} />

<style type="text/scss">
  @use '../../helpers/styles' as styles;

  .hamburger-menu {
    background-color: grey;
    // These will be set relative to the browser window
    position: absolute;
    height: 100%;
    z-index: 3;
    transition: width 0.4s;
    transition-timing-function: ease;

    &.open {
      width: 70%;
    }

    &.closed {
      width: 0%;
    }
  }

  #overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.6);
    opacity: 0.6;
  }

  :global(.hamburger-icon) {
    cursor: pointer;
    margin-left: styles.$margins-large;
    margin-top: styles.$margins-normal;
    transition: background 0.3s ease-in-out;
  }

  :global(.visible) {
    opacity: 1;
    pointer-events: all;
  }

  :global(.invisible) {
    color: white;
    pointer-events: none;
  }

  .hamburger-menu-container {
    margin-left: styles.$margins-large;
    margin-top: styles.$margins-normal;

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
    width: 0;
    height: 0;
  }
</style>
