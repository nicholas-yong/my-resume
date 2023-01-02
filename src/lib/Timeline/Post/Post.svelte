<script lang="ts">
	import type { TimelineContentProps } from "../types"


    export let timelineContent: TimelineContentProps
    $: alignmentStyles = `margin-left: ${timelineContent.alingment === 'left' ? 'auto': '32px'}; margin-right: ${timelineContent.alingment === 'left' ? '32px': 'auto'}`
           
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
        max-width: 400px;
        margin-top: styles.$margins-xlarge;
        margin-bottom: styles.$margins-xlarge;
        box-shadow: 0px 1px 10px black;
    }

    .timeline-post-text {
        padding: styles.$margins-normal;
        color: black;

        span {
            white-space: pre-line;
        }

        h3 {
            font-weight: 500;
        }

        span {
            font-weight: 300;
        }
    }

    .timeline-post-text > h2 
    {
        margin-bottom: 8px;
    }
</style>
