<script context="module" lang="ts">
  import Header from '$lib/header/Header.svelte'
  import type { Menu } from '$lib/header/types'
  import '../app.css'

  export const menuItems: Menu = [
    {
      title: 'Home',
      path: '',
      icon: 'home',
    },
    {
      title: 'Contact',
      path: '#footer',
      icon: 'contact',
    },
  ]
</script>

<main id="main-element">
  <Header {menuItems} />
  <slot />
</main>

<style>
  main {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-y: hidden;
  }
</style>
