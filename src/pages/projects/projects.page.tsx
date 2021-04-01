import {projectsdata} from '../../data/projects.data'; 
import {Section} from '../../components/section/section.component';

export default function ProjectsPage() { 
  const projects:IProjectItem[] = []; 
  const sections = projectsdata.map( p => { 
    return {...p, component:ProjectItem} 
  }); 
  return <div> 
    <h1>Projects</h1> 
    {sections.map( section => { 
      return <Section key={section.title} {...section} /> 
    })} 
  </div> 
} 

export function ProjectItem({item}:{item:IProjectItem}) { 
  const {title, description, href, technical} = item; 
  return <div> 
    <h3><a href={href} target="_blank">{title}</a></h3> 
    <div className={'technical'}> 
      {technical.map( t => { return <span>[{t}]</span> })} 
    </div> 
    <div>{description}</div> 
    <br/> 
  </div> 
} 
