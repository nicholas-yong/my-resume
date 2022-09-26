<script lang="ts">
	import type { TimelineContentProps } from "$lib/Timeline/types";


    export let timelineContent: TimelineContentProps
    $: alignmentStyles = `margin-left: ${timelineContent.alingment === 'left' ? 'auto': '16px'}; margin-right: ${timelineContent.alingment === 'left' ? '16px': 'auto'}`
           
</script>

<div class="timeline-component timeline-post" style="{alignmentStyles}">
    <div class = "timeline-post-text">
        <h2>{timelineContent.title}</h2>
        <span>{timelineContent.content}</span>
    </div>
</div>


<style>
    .timeline-post {
        background: lightgray;
        border-radius: 20px;
        max-width: 400px;
    }

    .timeline-post-text {
        padding: 1rem;
    }

    .timeline-post-text > h2 
    {
        margin-bottom: 8px;
    }
</style>
