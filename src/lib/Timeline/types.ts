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
  content: string
  shortDesc: string
  title: string
  type: string
  color?: string // Defaults to white
  borderRadius?: boolean // Defaults to false
}

export interface TimelineItem extends Omit<TimelineContentProps, 'alingment'> {
  date: string
}

export type TimelinePost = TimelineItem & BaseTimelineProps
