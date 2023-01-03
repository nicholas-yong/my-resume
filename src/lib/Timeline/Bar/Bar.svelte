<script lang="ts">
    import Icon from "$lib/Icons/Icon.svelte"
    import type { TimelineContentProps, TimelinePostTypes } from "../types"
    import cssVars from 'svelte-css-vars'


    export let timelineContent: TimelineContentProps;

    type BarCustomisation = {
        buttonColor: string
        iconColor: string
    }
    
    // Local functions to the component
    const mapPostTypeToColor = (postType: TimelinePostTypes): BarCustomisation => {
        switch(postType)
        {
            case 'education':
                return {
                    buttonColor: 'lightblue',
                    iconColor: 'black',
                }
            case 'work':
                return {
                    buttonColor: 'black',
                    iconColor: 'white',
                }
            case 'volunteering':
                return {
                    buttonColor: 'green',
                    iconColor: 'white',
                }
            default: {
                return {
                    buttonColor: 'black',
                    iconColor: 'white'
                }
            }
        }
    }

    const currentCustomisation = mapPostTypeToColor(timelineContent.type)

    $: styleVars = {
        backgroundColor: currentCustomisation.buttonColor,
        iconColor: currentCustomisation.iconColor
    };


</script>

<div class = "timeline-middle">
    <div class = "timeline-point" use:cssVars="{styleVars}">
        <Icon
            iconName = {timelineContent.type}
            width = {25}
            height = {25}
            className={'timeline-icon'}
        ></Icon>
    </div>
</div>


<style type="text/scss">
    .timeline-middle {
        position: relative;
        background: black;
    }

    div {
        color: var(--titleColor);
    }

    .timeline-point {
        position: absolute;
        top: 32px;
        width: 45px;
        height: 45px; 
        background-color: var(--backgroundColor);
        border-radius: 50%;
        transform: translate(-1.5rem);

        div {
            margin: 0 auto;
        }

        .timeline-icon {
            color: var(--iconColor);
            margin-left: 12px;
            margin-right: 12px;
        }
    }

</style>
