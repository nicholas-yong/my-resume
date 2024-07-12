<script lang="ts">
  import Bar from './Bar/Bar.svelte'
  import Date from './Date/Date.svelte'
  import Post from './Post/Post.svelte'
  import type { TimelinePost } from './types'
  import { isMobile } from '../../helpers'
  import { onMount } from 'svelte'
  export let timelinePost: TimelinePost

  let layout: Array<any> = []

  const renderLayout = () => {
    layout = isMobile()
      ? [Bar, Post]
      : timelinePost.alingment === 'left'
        ? [Post, Bar, Date]
        : [Date, Bar, Post]
  }

  renderLayout()
  onMount(() => {
    window.addEventListener('resize', renderLayout)

    return () => {
      window.removeEventListener('resize', renderLayout)
    }
  })
</script>

<div class="timeline-row">
  {#each layout as item}
    <svelte:component
      this={item}
      timelineContent={{
        content: timelinePost.content,
        title: timelinePost.title,
        type: timelinePost.type,
        alingment: timelinePost.alingment,
        shortDesc: timelinePost.shortDesc,
        color: timelinePost.color,
      }}
      timelineDate={{
        date: timelinePost.date,
        alingment: timelinePost.alingment,
      }}
    />
  {/each}
</div>

<style type="scss" lang="scss">
  @use '../../helpers/styles' as styles;
  @media only screen and (max-width: styles.$breakpoint-mobile) {
    .timeline-row {
      grid-template-columns: 3px 1fr;
      display: grid;
    }
  }

  @media only screen and (min-width: styles.$breakpoint-mobile) {
    .timeline-row {
      grid-template-columns: 1fr 3px 1fr;
      display: grid;
    }
  }
</style>
