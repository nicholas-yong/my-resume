<script lang="ts">
    import Icon from "$lib/Icons/Icon.svelte"
    import type { TimelineContentProps } from "../types"


    export let timelineContent: TimelineContentProps;
</script>

<div class = "timeline-middle">
    <div class = "timeline-point">
        <Icon
            iconName = {timelineContent.type}
        ></Icon>
    </div>
</div>

<style>
    .timeline-middle {
        position: relative;
        background: black;
    }

    .timeline-point {
        position: absolute;
        top: 32px;
        width: 35px;
        height: 35px; 
        background-color: lightgray;
        border-radius: 50%;
        transform: translate(-0.9rem)
    }

</style>
