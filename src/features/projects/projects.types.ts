export interface Project {
  name: string
  description: string[]
  technologies: string[]
  links: ProjectLinks
}

interface ProjectLinks {
  website?: string
  github?: string
  appStore?: string
  playStore?: string
}