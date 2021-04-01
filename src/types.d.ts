interface IPageLink { 
  href: string; 
  label: string; 
  component: any; 
  subNav?: any; 
} 

interface IProjectItem { 
  title: string; 
  technical: string[]; 
  description: any; 
  href: string; 
} 

interface IPublicationItem { 
  title: string; 
  reference: string; 
  author: string; 
  href: string; 
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
