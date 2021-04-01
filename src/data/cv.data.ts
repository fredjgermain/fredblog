export const cvdata = { 

  // PUBLICATIONS ----------------------------------------------------
  publications: [ 
    {title:"Personal use of the Internet and travel: Evidence from the Canadian General Social Survey\'s 2010 time use module", 
    reference:"Travel Behaviour and Society, Volume 14, January 2019, Pages 81-91", 
    author:"Ugo Lachapelle, Frédéric Jean-Germain (As co-author)", 
    href:'https://www.sciencedirect.com/science/article/abs/pii/S2214367X18301303?via%3Dihub' 
   } 
  ] as IPublicationItem[], 

  experiences: [ 
    {title:'Research Assistant (Urban studies)', from:'Winter 2015', to:'Winter 2017', 
    employer:'ESG-UQAM (École des sciences de la gestion UQAM), Département d’études urbaines', 
    descriptions:[
      `Co-authored a research paper, as mentionned above, published last January in “Travel Behaviour and Society”`,
      `Handling of most the data crunshing part of the paper, while the main author handled the redaction the paper itself and supervised my work.`
    ]}, 

    {title:'Teaching Assistant (Economics)', from:'Fall 2013', to:'Winter 2016', 
    employer:'ESG-UQAM (École des sciences de la gestion UQAM), Département des sciences économiques', 
    descriptions:[
      `Built a 30+ hours worth of pedagogical material introducing students basic statatistical programming using Stata. Despirte the fact that most of them had no prior programming experiences, fast enough they all could at least write simple programs using Stata and Stata language.`, 
      `Taught and supported students in their assignment for 10+ weeks per semester, for 6 semesters.`
    ]}, 

    {title:'Research Assistant (Economics)', from:'Summer 2013', 
    employer:'ESG-UQAM (École des sciences de la gestion UQAM), Département des sciences économiques', 
    descriptions:[ 
      `Assisted a researcher working on in the evaluation of the OLO program. The accronym “OLO” stands for “Oeufs-Lait-Orange” it offers follow-up care and food distribution to vulnerable pregnant womens.`, 
    ]}, 

    {title:'Census agent', from:'Summer 2011', 
    employer:'Statistic Canada, Montreal', 
    descriptions:[ 
      `Contact citizens either by phone, but usually in person at their residence, to remind them to complete the census.`, 
      `Help some people completing the census when needed.`, 
      `Being patient, persistent and adaptive to odd situations while remaining courteous`, 
    ]}, 

    {title:'Warehouse clerk & odd jobs', from:'Intermittently from 2003', to: 'fall 2018', 
    employer:'Divers companies in either Quebec city or Montreal', 
    descriptions:[ 
      `Operating an electric forklift in a warehouse (Reno Depot, Quebec City).`, 
      `Sifting through an inventory using a barcode scanner to either pick up or store clothing items (Centre de distribution Simons, Québec City).`, 
      `Helping students with master projects requiring programming skills (Uqam). Other odd jobs.`, 
    ]}, 
  ] as IExperienceItem[], 

  // QUALIFICATIONS -------------------------------------------------
  qualifications: [ 
    {title:'Language', subItems:[ 
      {title:'French', level:'Native speaker'}, 
      {title:'English', level:'Second language, advanced-level'} 
    ]}, 

    {title:'Programming and markup languages, APIs, libraries', subItems:[ 
      {title:'Typescript/Javascript'}, 
      {title:'React; React with typescript'}, 
      {title:'Mongoose/MongoDb'}, 
      {title:'C#'}, 
      {title:'Entity Framework'}, 
      {title:'Markdown'}, 
      {title:'HTML5/Css'}, 
      {title:'C and C++'}, 
      {title:'Java'}, 
    ]}, 

    {title:'Software/IDE/Dev tools && methodologies', subItems:[ 
      {title:'VsCode'}, 
      {title:'Clean coding'}, 
      {title:'Github'}, 
      {title:'Unity3d', level:'beginner'}, 
      {title:'Unit testing'}, 
    ]}, 

    {title:'Statistic & Research', subItems:[ 
      {title:'Co-authoring a reseach paper. See publication'}, 
      {title:'Research assistances. See professional experiences'}, 
      {title:'Quantitative methods and econometrics', level:'rusty'}, 
      {title:'Statistical programming with Stata(Software)', level:'rusty'}, 
    ]}, 

    {title:'Pedagogy skills', subItems:[ 
      {title:`6 semesters worth of experiences as a pro-active teaching assistant. See Professional experiences as 'Teaching assistant'.`}, 
    ]}
  ] as IQualificationItem[], 

  // EDUCATION -------------------------------------------------
  educations: [
    {title:'Certificate, Computer science and software engineering', 
      from:'completed Fall 2018', 
      institution: 'UQAM (Université du Québec à Montréal)', 
      note: "I was initially going for a B.A.Sc in Computer sciences and software engineering, but I shorten it to a certificate."}, 
    {title:'M.Sc, Economics (Incomplete)', from:'Fall 2013', to:'Automn 2014', 
      institution:`ESG-UQAM (École des sciences de la gestion UQAM)`}, 
    {title:'B.Sc, Economics', from:'Fall 2010', to:'Summer 2013', 
      institution:`ESG-UQAM (École des sciences de la gestion UQAM)`}, 
    {title:'B.Sc, Philosophy', to:'~2008', 
      institution:`Label University, Quebec City`}, 
    {title:'DEC, Multimedia integration', to:'~2004', 
      institution:`Cégep de Sainte-Foy, Quebec city`}, 
  ] as IEducationItem[], 
} 
