import {feature} from '../../data/projects.data'; 
import {ProjectItem} from '../projects/projects.page'; 
import {Section} from '../../components/section/section.component';


export default function HomePage() { 
  return <div> 
    <h1>Hey there !</h1> 
    <p>Welcome to my blog. My name is Frédéric Jean-Germain.</p> 
    <Section {...{title:'Web project', items:[feature], component:ProjectItem}} /> 
  </div> 
} 