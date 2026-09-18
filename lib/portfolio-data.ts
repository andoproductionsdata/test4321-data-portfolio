import config from "./portfolio-config.json"

export const profile = config.profile
export const about = (config as any).about ?? { bio: "", focus: "", coreStack: "" }
export const technicalSkills = config.technicalSkills
export const certifications = config.certifications
export const workExperience: WorkExperience[] = (config as any).workExperience ?? []

export type WorkExperience = {
  title: string
  company: string
  location: string
  duration: string
  type: string
  responsibilities: string[]
}

export type Project = {
  slug: string
  title: string
  company?: string
  industry?: string
  role?: string
  duration?: string
  summary: string
  tools: string[]
  preview: string
  challenge: string[]
  requirements: string[]
  customSections?: { title: string; content: string }[]
  whatIBuilt: string[]
  sqlSnippet?: string
  sqlDescription?: string
  buildImage?: string
  outcomeImage?: string
  dashboardTitle?: string
  dashboardDescription?: string
  dashboardSlides?: { title: string; description: string | string[]; bullets?: string[]; image: string }[]
  outcome: string[]
  keyDeliverables?: string[]
  kpiTargets?: string[]
  impact?: string[]
  githubUrl?: string | null
  liveUrl?: string | null
  gallery: { src: string; caption: string }[]
}

export const projects: Project[] = config.projects as Project[]
