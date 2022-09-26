<script lang="ts">
	import TimelineRow from "./TimelineRow.svelte";
import type { TimelineItem } from "./types";
import './timeline.css'
export let timelinePosts: Array<TimelineItem>
</script>

<div class = "timeline-container">
<!--I guess we ideally want to start left then right-->
{#each timelinePosts as timelineRow, index}
    <TimelineRow timelinePost = {
       {
         content: timelineRow.content,
         color: timelineRow.color,
         date: timelineRow.date,
         title: timelineRow.title,
         alingment: index % 2 === 0 ? 'left': 'right'
       }
    }
    />
{/each}
</div>

<style>
    .timeline-container
    {
        display: grid;
        background-color: darkgray;
        margin: 0 auto;
        padding: 25px 25px;
        color: white;
        width: 100%;
    }
</style>
