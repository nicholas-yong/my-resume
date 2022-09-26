export interface BaseTimelineProps {
    alingment: 'left' | 'right'
}


export interface TimelineDateProps extends BaseTimelineProps {
    date: string 
}

export interface TimelineContentProps extends BaseTimelineProps {
    // I'm not sure if we'll actually need the alingment.., but lets leave it there in case its used in the future.
    content: string
    title: string 
}

export interface TimelineItem  {
    content: string
    title: string
    date: string
    color?: string  // Defaults to white
}

export type TimelinePost = TimelineItem & BaseTimelineProps
