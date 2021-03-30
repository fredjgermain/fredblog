import {projectsdata} from '../../data/projects.data'; 
import {Section} from '../../components/section/section.component';

export default function ProjectsPage() { 
  const projects:IProjectItem[] = []; 
  const section = {title: 'Web projects', items:projectsdata.web, component:ProjectItem}; 
  return <div> 
    <h1>Projects</h1> 
    <Section {...section} /> 
  </div> 
} 

function ProjectItem({item}:{item:IProjectItem}) { 
  const {title, description, link} = item; 
  return <div> 
    <h3>{title}</h3> 
    <div>{description}</div> 
    <a href={link.href}>{link.label}</a> 
  </div> 
} 
