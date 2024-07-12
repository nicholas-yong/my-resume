<script lang="ts">
  import { isMobile } from '../../../helpers'
  import type { TimelineContentProps, TimelineDateProps } from '../types'

  export let timelineContent: TimelineContentProps
  export let timelineDate: TimelineDateProps;

  const onMobile = isMobile();
  $: alignmentStyles = `margin-left: ${
    onMobile ? '60px' : timelineContent.alingment === 'left' ? 'auto' : '60px'
  }; margin-right: ${
    onMobile ? 'auto' : timelineContent.alingment === 'left' ? '60px' : 'auto'
  }`
</script>

<div class="timeline-component timeline-post" style={alignmentStyles}>
  <div class="timeline-post-text">
    <h2>{timelineContent.title}</h2>
    <h3>{timelineContent.shortDesc}</h3>
    <span>{timelineContent.content}</span>
    {#if onMobile}
        <span class="timeline-date">{timelineDate.date}</span>
    {/if}
  </div>
</div>

<style type="text/scss" lang="scss">
  @use '../../../helpers/styles.scss' as styles;
  .timeline-post {
    max-width: 400px;
    margin-top: styles.$margins-xlarge;
    margin-bottom: styles.$margins-xlarge;
    box-shadow: 1px 2px 7px rgb(0, 0, 0, 0.5);
    border-radius: 1%;
  }

  .timeline-post-text {
    padding: styles.$margins-normal;
    color: black;

    h2 {
      font-size: 18px;
      word-wrap: break-word;
    }
    h3 {
      font-size: 16px;
      font-weight: 600;
      word-wrap: break-word;
    }

    span {
      font-size: 14px;
      white-space: pre-line;
      font-weight: 300;
    }

    .timeline-date {
      display: block;
      margin-top: 1rem;
      font-weight: 650;
    }
  }

  .timeline-post-text > h2 {
    margin-bottom: 8px;
  }
</style>
