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
  return <nav> 
    <div> 
      {pagesLinks.map( pagelink => { 
        const isCurrentPage = IsCurrentPage(pathName, pagelink.href); 
        return <span key={pagelink.label} > 
          <Link to={pagelink.href}>{pagelink.label}</Link>
        </span> 
      })} 
    </div> 
  </nav> 
} 
export default withRouter(Nav); 

function IsCurrentPage(pathName:string, linkHref:string) { 
  return (pathName === `/${linkHref}`); 
} 
