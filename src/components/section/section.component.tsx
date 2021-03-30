
export function Section({sectionTitle, items, ...props}:{sectionTitle:string, items:any[], itemComponent:any}) { 
  return <section> 
    <h2>{sectionTitle}</h2> 
    {items.map( (item, i) => { 
      return <props.itemComponent key={i} {...{item}} /> 
    })} 
  </section>
} 