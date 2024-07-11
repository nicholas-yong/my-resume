export type AllowedTypes = 'email' | 'linkedIn' | 'github' | 'stackOverflow'

export type IconSize = 'sm' | 'md'

export type ExternalLinks = {
    name: string
    externalLink: string 
    rawValue: string
  }

export const defaultIcons: Array<ExternalLinks> = [
{
    name: 'github',
    externalLink: 'https://github.com/nicholas-yong',
    rawValue: 'github.com/nicholas-yong'
    
},
{
    name: 'stackOverflow',
    externalLink: 'https://stackoverflow.com/users/6099144/nicholas-yong',
    rawValue: 'stackoverflow.com/users/6099144/nicholas-yong'
},
{
    name: 'linkedin',
    externalLink: 'https://www.linkedin.com/in/nicholasyong97/',
    rawValue: 'linkedin.com/in/nicholasyong97'
},
{
    name: 'mail',
    externalLink: 'mailto:nicholas.yong1997@gmail.com',
    rawValue: 'nicholas.yong1997@gmail.com'
},
]
