import { Link, withRouter } from 'react-router-dom'; 
import { pagesLinks } from './pageslist.data'; 


interface INav { 
  history:any; 
  location:any; 
  match:any; 
  staticContext:any; 
} 
function Nav({history}:INav) { 
  const pathName = history ? history['location'] ? history['location']['pathname']: '/': '/'; 
  const currentPageLink = GetCurrentPageLink(pathName); 

  return <nav> 
    <div> 
      {pagesLinks.map( pagelink => { 
        const isCurrent = currentPageLink === pagelink; 
        const className = isCurrent ? 'activeLink': 'normalLink'; 
        return <span key={pagelink.label}> 
          <Link className={className} to={pagelink.href}>{pagelink.label}</Link> 
        </span> 
      })} 
    </div> 
  </nav> 
} 
export default withRouter(Nav); 


function GetCurrentPageLink(pathName:string) { 
  return pagesLinks.find( link => (pathName === `/${link.href}`)); 
} 