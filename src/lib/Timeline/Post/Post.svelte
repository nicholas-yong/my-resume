<script lang="ts">
	import type { TimelineContentProps } from "../types"


    export let timelineContent: TimelineContentProps
    $: alignmentStyles = `margin-left: ${timelineContent.alingment === 'left' ? 'auto': '16px'}; margin-right: ${timelineContent.alingment === 'left' ? '16px': 'auto'}`
           
</script>

<div class="timeline-component timeline-post" style="{alignmentStyles}">
    <div class = "timeline-post-text">
        <h2>{timelineContent.title}</h2>
        <h3>{timelineContent.shortDesc}</h3>
        <span>{timelineContent.content}</span>
    </div>
</div>


<style type="text/scss">
   @use '../../../helpers/styles.scss' as styles;
    .timeline-post {
        background: lightgray;
        border-radius: 20px;
        max-width: 400px;
        margin-top: styles.$margins-normal;
        margin-bottom: styles.$margins-normal;
    }

    .timeline-post-text {
        padding: styles.$margins-normal;

        span {
            white-space: pre-line;
        }
    }

    .timeline-post-text > h2 
    {
        margin-bottom: 8px;
    }
</style>
