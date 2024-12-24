export interface Experience {
  companyName?: string
  companyImage?: ImageMetadata
  roles: Role[]
}

export interface Role {
  title: string
  type: RoleType
  startDate: string
  endDate?: string
  description: string[]
}

export enum RoleType {
  FullTime = 'Full time',
  Internship = 'Internship',
  Freelance = 'Freelance'
}
