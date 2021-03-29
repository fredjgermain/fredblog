// Page 
import HomePage from '../../pages/home/home.page'; 
import CvPage from '../../pages/cv/cv.page'; 
import ProjectsPage from '../../pages/projects/projects.page'; 
import ContactPage from '../../pages/contact/contact.page'; 
import AboutPage from '../../pages/about/about.page'; 


export const pagesLinks:IPageLink[] = [ 
  {href:'', label:'Home', component:HomePage}, 
  {href:'about', label:'About', component:AboutPage}, 
  {href:'projects', label:'Projects page', component:ProjectsPage}, 
  {href:'cv', label:'Curriculum Vitea', component:CvPage}, 
  {href:'contact', label:'Contact', component:ContactPage}, 
] 