import {cvdata} from '../../data/cv.data'; 
import {Section} from '../../components/section/section.component'; 

export default function CvPage() { 
  const cvSections = [ 
    {title: 'Publication', items:cvdata.publications, component:PublicationItem}, 
    {title: 'Professional experiences', items:cvdata.experiences, component:ExperienceItem}, 
    {title: 'Qualifications', items:cvdata.qualifications, component:QualificationItem}, 
    {title: 'Educations', items:cvdata.educations, component:EducationItem} 
  ];   

  return <div> 
    <h1>CV page</h1> 
    {cvSections.map( section => { 
      return <span><a href={`/cv#${section.title}`}>{section.title}</a><br/></span> 
    })} 
    
    <a href={''}>Printable version (french)</a> 
    <a href={''}>Printable version (english)</a> 
    {cvSections.map( section => { 
      return <Section key={section.title} {...section} /> 
    })} 
  </div> 
} 


function FromTo({from, to}:{from:string|undefined, to:string|undefined}) { 
  if(from && to) 
    return <span className={'fromto'}>{from} - {to}</span> 
  if(from && !to) 
    return <span className={'fromto'}>{from}</span> 
  if(!from && to) 
    return <span className={'fromto'}>{to}</span> 
  return <span className={'fromto'}></span> 
}


function PublicationItem({item}:{item:IPublicationItem}) {
  const {title, reference, link} = item; 
  return <div> 
    <h3><a href={link.href}>{title}</a></h3> 
    <div>{reference}</div> 
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

function ExperienceItem({item}:{item:IExperienceItem}) { 
  const {title, employer, descriptions, from, to} = item; 
  return <div> 
    <h3><span>{title}</span> <FromTo {...{from,to}}/></h3> 
    <div>{employer}</div> 
    <ul>
      {descriptions.map( (description,i) => { 
        return <li key={i}>{description}</li> 
      })} 
    </ul> 
    <br/>
  </div> 
} 


function QualificationItem({item}:{item:IQualificationItem}) { 
  const {title, subItems} = item; 
  return <div> 
    <h3>{title}</h3> 
    <ul> 
      {subItems.map( (subItem, i) => { 
        return <li key={i}><QualificationSubItem {...{subItem}} /></li> 
      })} 
    </ul> 
    <br/>
  </div> 
}

function QualificationSubItem({subItem}:{subItem:IQualificationSubItem}) { 
  return <span> 
    {subItem.title} {subItem.level} 
  </span> 
}

function EducationItem({item}:{item:IEducationItem}) { 
  const {title, from, to, institution, note} = item; 
  return <div> 
    <h3><span>{title}</span> <FromTo {...{from,to}}/></h3> 
    <div>{institution}</div> 
    {note && <div>{note}</div>} 
    <br/>
  </div> 
} 