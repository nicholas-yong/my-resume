<script lang="ts">
import Bar from "./Bar/Bar.svelte";
	import Date from "./Date/Date.svelte";
	import Post from "./Post/Post.svelte";
	import type { TimelinePost } from "./types";
    export let timelinePost: TimelinePost
    const layout = timelinePost.alingment === 'left' ? [Post, Bar, Date]: [Date, Bar, Post]
</script>

<div class = "timeline-row">
    {#each layout as item }
    <svelte:component this = {item} timelineContent = {{
        content: timelinePost.content,
        title: timelinePost.title,
        type: timelinePost.type,
        alingment: timelinePost.alingment,
        shortDesc: timelinePost.shortDesc
    }}
    timelineDate = {{
        date: timelinePost.date,
        alingment: timelinePost.alingment
    }}/>
{/each}
</div>


<style>
   .timeline-row{
        grid-template-columns: 1fr 3px 1fr;
        display: grid;
   }
</style>
