export type SkillCategory = 'languages' | 'framework' | 'tools'

export interface SkillList {
  category: SkillCategory
  skills: Array<string>
}

export const Skills: Array<SkillList> = [
  {
    category: 'languages',
    skills: ['TypeScript', 'HTML', 'CSS/SCSS', 'SQL', 'Python', 'Bash'],
  },
  {
    category: 'framework',
    skills: ['Node', 'React', 'Pulumi', 'AWS (CDK)', 'Chakra', 'Emotion', 'NX'],
  },
  {
    category: 'tools',
    skills: ['Jest', 'Figma', 'Docker', 'AWS', 'JIRA', 'Linear'],
  },
]
