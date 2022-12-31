export interface BaseTimelineProps {
    alingment: 'left' | 'right'
}

export interface TimelineBarProps 
{
    icon: string
    buttonColor: string
}

export interface TimelineDateProps extends BaseTimelineProps {
    date: string 
}

export interface TimelineContentProps extends BaseTimelineProps {
    // I'm not sure if we'll actually need the alingment.., but lets leave it there in case its used in the future.
    content: string
    shortDesc: string
    title: string 
    icon: string
}

export interface TimelineItem extends Omit<TimelineContentProps, 'alingment'> {
    date: string
    color?: string  // Defaults to white
}

export type TimelinePost = TimelineItem & BaseTimelineProps
