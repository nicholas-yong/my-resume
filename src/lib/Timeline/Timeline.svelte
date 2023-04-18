<script lang="ts">
	import TimelineRow from "./TimelineRow.svelte";
import type { TimelineItem } from "./types";
export let timelinePosts: Array<TimelineItem>
</script>

<div class = "timeline-container">
<!--I guess we ideally want to start left then right-->
{#each timelinePosts as timelineRow, index}
    <TimelineRow timelinePost = {
       {
         content: timelineRow.content,
         shortDesc: timelineRow.shortDesc,
         type: timelineRow.type,
         color: timelineRow.color,
         date: timelineRow.date,
         title: timelineRow.title,
         alingment: index % 2 === 0 ? 'left': 'right'
       }
    }
    />
{/each}
</div>

<style type="text/scss">
    @use "../../helpers/styles" as styles;
    .timeline-container
    {
        display: grid;
        margin: 0 auto;
        padding: styles.$margins-large styles.$margins-large;
        color: white;
        width: 100%;
        position: relative;
    }
</style>
