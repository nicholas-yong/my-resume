<script lang="ts">
  import type { Menu } from './types'
  export let menuItems: Menu
</script>

<nav id="header">
  <div class="nameHeader">
    <span>Nicholas Yong</span>
  </div>
  <div class="rightAligned">
    {#each menuItems as { title, path }}
      <div class="menuItem">
        <a href={path}>{title}</a>
      </div>
    {/each}
  </div>
</nav>

<style type="text/scss" lang="scss">
  @use '../../helpers/styles' as styles;
  #header {
    width: 100%;
    padding: styles.$margins-normal styles.$margins-xlarge;
    display: flex;
    background-color: black;
    position: fixed;
    z-index: 1;
  }

  span {
    font-size: styles.$font-size-large;
  }

  .rightAligned {
    margin-left: auto;
    margin-top: 6px;
    display: flex;
    // This is outside the margin range, so treat it as an exception.
    gap: 60px;
  }

  .nameHeader {
    color: white;
  }

  .menuItem > a {
    position: relative;
    color: white;
  }

  .menuItem > a:hover {
    text-decoration: none;
  }

  .menuItem > a::after {
    content: '';
    position: absolute;
    width: 0;
    background-color: white;
    height: 2px;
    bottom: -3px;
    left: 0;
  }

  .menuItem:hover > a::after {
    transition: width 0.5s;
    width: 100%;
  }
</style>
