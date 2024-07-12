<script lang="ts">
  import Icon from '$lib/Icons/Icon.svelte'
  import type { TimelineContentProps, TimelineDateProps } from '../types'
  import cssVars from 'svelte-css-vars'

  export let timelineContent: TimelineContentProps
  export let timelineDate: TimelineDateProps
  $: styleVars = {
    backgroundColor: timelineContent.color || 'white',
  }
</script>

<div class="timeline-middle">
  <div class="timeline-point" use:cssVars={styleVars}>
    <Icon
      className={'timeline-point-icon'}
      iconName={timelineContent.type}
      width={35}
      height={35}
    />
  </div>
</div>

<style type="text/scss" lang="scss">
  .timeline-middle {
    position: relative;
    background: black;
  }

  :global(.timeline-point) {
    width: 50px;
    height: 50px;
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 20%),
      0 1px 1px 0 rgb(0 0 0 / 14%),
      0 2px 1px -1px rgb(0 0 0 / 12%);
    border-radius: 50%;
    background-color: var(--backgroundColor);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -1.4rem;
  }
</style>
