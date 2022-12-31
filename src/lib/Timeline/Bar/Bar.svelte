<script lang="ts">
    import Icon from "$lib/Icons/Icon.svelte"
    import type { TimelineBarProps, TimelineContentProps, TimelineDateProps } from "../types"


    export let timelineContent: TimelineContentProps;
    export let timelineDate: TimelineDateProps;
    export let timelineBar: TimelineBarProps
</script>

<div class = "timeline-middle">
    <div class = "timeline-point">
        <Icon
            iconName = {timelineContent.icon}
        ></Icon>
    </div>
</div>

<style>
    .timeline-middle {
        position: relative;
        background: #ffffff
    }

    .timeline-point {
        position: absolute;
        top: 1rem;
        left: 50%;
        width: 15px;
        height: 15px; 
        background-color: lightgray;
        border-radius: 50%;
        transform: translate(-0.4rem)
    }

</style>
