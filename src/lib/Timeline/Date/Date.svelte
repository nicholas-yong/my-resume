<script lang="ts">
	import type { TimelineDateProps } from "../types";

    export let timelineDate: TimelineDateProps
    export let timelineClass = 'timeline-component ' + (timelineDate.alingment === 'right' ? 'timeline-date-right' : 'timeline-date-left')
</script>

<div class = {timelineClass}>
    <span>{timelineDate.date}</span>
</div>


<style type="text/scss">
    @use '../../../helpers/styles.scss' as styles;

    .timeline-component
    {
        margin-top: styles.$margins-xlarge;
        margin-bottom: styles.$margins-xlarge;
    }

    .timeline-date-right {
        text-align: right;
        margin-right: styles.$margins-xlarge;
    }

    .timeline-date-left {
        margin-left: styles.$margins-xlarge;
    }
</style>
