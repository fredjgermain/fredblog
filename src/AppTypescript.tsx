import { BrowserRouter } from 'react-router-dom'; 
import Nav from './components/nav/nav.component'; 
import Footer from './components/footer/footer.component'; 

import './css/main.css'; 

import {Switcher} from './components/nav/switcher.component'; 
import {pagesLinks} from './components/nav/pageslist.data'; 



// Page 
/*import HomePage from './pages/home/home.page'; 
import CvPage from './pages/cv/cv.page'; 
import ProjectsPage from './pages/projects/projects.page'; 
import ContactPage from './pages/contact/contact.page'; 
import AboutPage from './pages/about/about.page'; */

// App Typescript =========================================
export default function AppTypescript() { 
  return <div> 
    <BrowserRouter> 
    <Nav/> 
    <main> 
      <Switcher pagesLinks={pagesLinks} /> 
    </main> 
    <Footer/>
    </BrowserRouter>
  </div> 
} 

/*<Switch> 
<Route exact path={'/'} component={HomePage}/> 
<Route path={'/cv'} component={CvPage}/> 
<Route path={'/projects'} component={ProjectsPage}/> 
<Route path={'/contact'} component={ContactPage}/> 
</Switch> */