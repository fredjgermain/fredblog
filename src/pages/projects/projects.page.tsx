

export default function ProjectsPage() { 
  const projects:IProjectItem[] = []; 
  return <div> 
    <h1>Projects page</h1> 
    <div> 
      {projects.map( project => { 
        return <div> 
          <ProjectItem {...{project}}/> 
        </div> 
      })} 
    </div> 
  </div> 
} 



function ProjectItem({project}:{project:IProjectItem}) { 
  const {title, link, description} = project; 
  return <div> 
    <h2>{title}</h2> 
    <a href={link.href}>{link.label}</a> 
    <div className={'description'}> 
      {description} 
    </div> 
  </div>
} 