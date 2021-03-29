import { Route, Switch } from 'react-router';


export function Switcher({pagesLinks}:{pagesLinks:IPageLink[]}) { 
  const [home, ...rest] = pagesLinks; 
  return <Switch> 
    <Route exact path={'/'} component={home.component}/> 
    {rest.map( pagelink => { 
      return <Route key={pagelink.label} path={`/${pagelink.href}`} component={pagelink.component} /> 
    })} 
  </Switch> 
}