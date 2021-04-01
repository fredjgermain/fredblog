

export default function Contact() { 
  const fullName = "Frédéric Jean-Germain"; 
  const email = 'fredjgermain@gmail.com'; 
  const linkedin = { 
    label: "Linkedin", 
    href: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-jean-germain-4965b817a/fr-fr?trk=people-guest_people_search-card", 
  }; 
  const facebook = { 
    label: "Facebook", 
    href: "Frédéric Jean-Germain", 
  }; 
  

  return <div> 
    <h1>Contact</h1> 
    <div>{email}</div> 
    <a href={linkedin.href} target="_blank">{linkedin.label}</a> 
  </div> 
} 