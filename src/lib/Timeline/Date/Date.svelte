<script lang="ts">
  import type { TimelineDateProps } from '../types'
  import { isMobile } from '../../../helpers'

  export let timelineDate: TimelineDateProps
  export let timelineClass =
    'timeline-component ' +
    (timelineDate.alingment === 'right'
      ? 'timeline-date-right'
      : 'timeline-date-left')
  let localIsMobile = isMobile()
</script>

{#if !localIsMobile}
  <div class={timelineClass}>
    <span>{timelineDate.date}</span>
  </div>
{/if}

<style type="text/scss" lang="scss">
  @use '../../../helpers/styles.scss' as styles;

  span {
    color: black;
    white-space: pre-line;
  }

  .timeline-component {
    margin-top: styles.$margins-xlarge;
    margin-bottom: styles.$margins-xlarge;
  }

  .timeline-date-right {
    text-align: right;
    margin-right: 60px;
  }

  .timeline-date-left {
    margin-left: 60px;
  }
</style>
