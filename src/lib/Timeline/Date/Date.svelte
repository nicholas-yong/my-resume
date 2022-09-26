<script lang="ts">
	import type { TimelineDateProps } from "../types";

    export let timelineDate: TimelineDateProps
    export let timelineClass = 'timeline-component ' + (timelineDate.alingment === 'right' ? 'timeline-date-right' : '')
</script>

<div class = {timelineClass}>
    <span>{timelineDate.date}</span>
</div>


<style>
    .timeline-date-right {
        text-align: right;
    }
</style>
