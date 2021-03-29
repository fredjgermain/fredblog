interface IPageLink { 
  href: string; 
  label: string; 
  component: any; 
} 

type ILink = { 
  href: string; 
  label: string; 
} 

interface IProjectItem { 
  title: string; 
  description: string; 
  link: ILink; 
} 

interface IPublicationItem { 
  title: string; 
  reference: string; 
  author: string; 
  link: ILink; 
} 

interface IEducationItem { 
  title: string; 
  from?: string; 
  to?: string; 
  institution: string; 
  note?: string; 
} 

interface IQualificationItem { 
  title: string; 
  subItems: IQualificationSubItem[]; 
} 

interface IQualificationSubItem {
  title: string; 
  level?: string|number; 
}

interface IExperienceItem { 
  title: string; 
  from?: string; 
  to?: string; 
  employer: string; 
  descriptions: string[]; 
} 
