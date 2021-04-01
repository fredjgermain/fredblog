
export default function Footer() { 
  return <footer> 
    {TodayToString()} 
  </footer> 
}

function TodayToString() {
  const today = new Date(); 
  const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today); 
  const m = new Intl.DateTimeFormat('en', { month: 'long' }).format(today); 
  const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(today); 
  return `${d} ${m} ${y}`;  
}