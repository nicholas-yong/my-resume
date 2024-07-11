export type TimelinePostTypes = 'education' | 'work' | 'volunteering' | 'other'

export interface BaseTimelineProps {
  alingment: 'left' | 'right'
}

export interface TimelineBarProps {
  type: string
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
  type: TimelinePostTypes
}

export interface TimelineItem extends Omit<TimelineContentProps, 'alingment'> {
  date: string
  color?: string // Defaults to white
}

export type TimelinePost = TimelineItem & BaseTimelineProps
