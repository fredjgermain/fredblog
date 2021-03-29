import { Link, withRouter } from 'react-router-dom'; 
import { pagesLinks } from './pageslist.data'; 

import '../../css/nav.css'; 

interface INav { 
  history:any; 
  location:any; 
  match:any; 
  staticContext:any; 
} 
function Nav({history}:INav) { 
  return <nav> 
    <div> 
      {pagesLinks.map( pagelink => { 
        return <span key={pagelink.label} >
          <Link to={pagelink.href}>{pagelink.label}</Link>
        </span> 
      })} 
    </div> 
  </nav> 
} 
export default withRouter(Nav);
