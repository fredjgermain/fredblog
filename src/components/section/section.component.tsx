
export function Section({title, items, ...props}:{title:string, items:any[], component:any}) { 
  return <section id={title}> 
    <h2>{title}</h2> 
    {items.map( (item, i) => { 
      return <props.component key={i} {...{item}} /> 
    })} 
  </section> 
} 