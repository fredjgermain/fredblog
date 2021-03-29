

export default function Contact() { 
  const fullName = "Frédéric Jean-Germain"; 
  const email = 'fredjgermain@gmail.com'; 
  const linkedin = { 
    label: "Linkedin", 
    link: "Frédéric Jean-Germain", 
  }; 
  const facebook = { 
    label: "Facebook", 
    link: "Frédéric Jean-Germain", 
  }; 
  

  return <div> 
    <h1>Contact</h1> 
    <div>{email}</div> 
    <a href={linkedin.link}>{linkedin.label}</a> 
  </div> 
} 