<script lang="ts">
  import Icon from '$lib/Icons/Icon.svelte'
  import type { TimelineContentProps, TimelinePostTypes } from '../types'
  import cssVars from 'svelte-css-vars'

  export let timelineContent: TimelineContentProps

  type BarCustomisation = {
    buttonColor: string
    iconColor: string
  }

  const mapPostTypeToColor = (
    postType: TimelinePostTypes,
  ): BarCustomisation => {
    switch (postType) {
      case 'education':
        return {
          buttonColor: 'rgb(0, 143, 248)',
          iconColor: 'white',
        }
      case 'work':
        return {
          buttonColor: 'black',
          iconColor: 'white',
        }
      case 'volunteering':
        return {
          buttonColor: 'green',
          iconColor: 'white',
        }
      default: {
        return {
          buttonColor: 'black',
          iconColor: 'white',
        }
      }
    }
  }

  const currentCustomisation = mapPostTypeToColor(timelineContent.type)

  $: styleVars = {
    backgroundColor: currentCustomisation.buttonColor,
    iconColor: currentCustomisation.iconColor,
  }
</script>

<div class="timeline-middle">
  <div class="timeline-point" use:cssVars={styleVars}>
    <Icon iconName={timelineContent.type} width={25} height={25} />
  </div>
</div>

<style type="text/scss" lang="scss">
  .timeline-middle {
    position: relative;
    background: black;
  }

  div {
    color: var(--titleColor);
  }

  :global(.timeline-point) {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--backgroundColor);
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 20%),
      0 1px 1px 0 rgb(0 0 0 / 14%),
      0 2px 1px -1px rgb(0 0 0 / 12%);
    border-radius: 50%;
    transform: translate(-1.4rem, 1.5rem);

    :global(div) {
      margin: 0 auto;
      color: var(--iconColor);
      position: absolute;
      bottom: 0.7rem;
      left: 0.7rem;
    }
  }
</style>
