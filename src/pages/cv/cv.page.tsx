import {cvdata} from '../../data/cv.data'; 
import {Section} from '../../components/section/section.component'; 

const cvSections = [ 
  {title: '1. Publication', items:cvdata.publications, component:PublicationItem}, 
  {title: '2. Professional experiences', items:cvdata.experiences, component:ExperienceItem}, 
  {title: '3. Qualifications', items:cvdata.qualifications, component:QualificationItem}, 
  {title: '4. Educations', items:cvdata.educations, component:EducationItem} 
]; 

export default function CvPage() { 
  return <div> 
    <h1>CV page</h1> 
    <Printables/> 
    <CvPageSubNav/> 
    {cvSections.map( (section,i) => { 
      return <Section key={section.title} {...{...section}} /> 
    })} 
  </div> 
} 

function Printables() {
  return <div className={'printableCv'}> 
    *<a href={''}>Printable version (french)</a><br/> 
    *<a href={''}>Printable version (english)</a> 
  </div> 
}

function CvPageSubNav() { 
  return <ul className={'cvAnchors'}> 
    {cvSections.map( (section, i) => { 
      //const href = `${i+1}. ${section.title}`; 
      return <li><a href={`/cv#${section.title}`}>{section.title}</a></li> 
    })} 
  </ul> 
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
  const {title, reference, href} = item; 
  return <div> 
    <h3><a href={href} target="_blank">{title}</a></h3> 
    <div>{reference}</div> 
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