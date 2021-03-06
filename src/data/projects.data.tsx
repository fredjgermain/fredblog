export const projectsdata = [
  // PROJECTS ----------------------------------------------------


  {title:'Web project', 
    items: [
      /*{title: "React-mongoose-demo app", 
        technical: ['React', 'Typescript/Javascript', 'Mongoose/MongoDb', 'Heroku'], 
        description: <div>
          <p>This is a fullstack projects using <em>React</em>, <em>Mongoose/MongoDb</em> and <em>Expess</em>. Both front and back-ends are written in <em>Typescript</em>. The project is deployed on <em>Heroku</em>, and its database hosted on <em>MongoDb Atlas</em>.</p> 
          
          <p>This project has 2 main sections; <br/> 
            - an <em>admin section</em> allowing an hypothetical admin or researcher to create, edit questionnaires addressed at patients, <br/> 
            - and a <em>patient section</em> allowing a patient to complete questionnaires.</p> 
          </div>, 
        href:'https://react-mongoose-demo.herokuapp.com',} 
     */
      {title: "Backend-Typegraphql-Typegoose", 
        technical: ['Typescript', 'Apollo', 'Typegraphql', 'Typegoose', 'Heroku'], 
        description: <div>
          <p> This project is a demontration backend which including an apollo-server connecting to a mongodb database. It is written in typescript and uses Apollo, Typegraphql and Typegoose.</p> 

          <p>The business model definitions combine both Typegraphql and Typegoose to avoid code redundancy, for ease of reading and modifications. They map graphql object, queries and mutations with mongodb documents. Business model can have One-To-One or One-To-Many relations, such that nested documents can be queried in graphql playground easily.</p> 

          <p>Most resolvers are generics and 'factoried'; factoried resolvers can accomodate any/most business models without the need to 'hardcode' specific resolver for each model. These resolvers include CRUD like functionalities (create, read, update, delete, and validate).</p> 

          <p>The data and business models in this demo are for demonstration purposes.</p> 

          <p>A matching front-end will soon be available. Meanwhile the API can be still be tested in a graphql playground at <a href={'https://www.graphqlbin.com/v2/new'}>graphqlbin</a> and copy paste <em>https://fjg-demo-typegql-typegoose.herokuapp.com/graphql</em> as the endpoint url. </p>

          <p>You may also consult the code itself <a href={'https://github.com/fredjgermain/gql_mongoose_tsc'}>on github.</a></p>
          
        </div>, 
        href:'https://react-mongoose-demo.herokuapp.com'
      }
    ] as IProjectItem[],
  }, 

  {title:'Misc', 
    items: [ 
      {title: "File system simulation", 
        technical: ['C'], 
        description: <div> 
          <p>This project was a practical assignement in the context of the course <a href={'https://etudier.uqam.ca/cours?sigle=INF3172'}>INF3172 - Principes des syst??mes d'exploitation</a> at UQAM University.</p> 
          
          <p>The this project simulates a file systems which can create/delete/write/read simulated files and directories. On execution this program generate a series of <em>.txt</em> files which keeps track of information relative to the simulated files and directories as would a files system keeping track of real files and directories and their respective simulated memory space. Albeit this simulation is extremely simplied. The project's code is available <a href={'https://github.com/fredjgermain/Demo/tree/master/05-Assembly_MineSweeper'}>on github.</a></p> 
          </div>, 
          href:'https://github.com/fredjgermain/Demo/tree/master/01-FileSystemSimulation'}, 

      /*{title: "CsharpXlClass", 
        technical: ['C#'], 
        description: <div> 
          
        </div>, 
        href:'https://github.com/fredjgermain/Demo/tree/master/03-CsharpXlClass'}, */

      {title: "Assembly Mine sweeper", 
        technical: ['pep8 (Assembly)'], 
        description: <div> 
          <p>This project was written as a practical assignment in the context of the <a href={'https://etudier.uqam.ca/cours?sigle=INF2170&p=0433'}>INF2170-Organisation des ordinateurs et assembleur</a> at UQAM University. </p>
          
          <p>The purpose was to itiates student to computer architecture and assembly programming. Testing this project requires using pep8 which simulates a processeur. The project's assembly code is available <a href={'https://github.com/fredjgermain/Demo/tree/master/05-Assembly_MineSweeper'}>on github.</a></p> 
          </div>, 
        href:'https://github.com/fredjgermain/Demo/tree/master/05-Assembly_MineSweeper'}, 
    ] as IProjectItem[], 
  }, 
  
  {title:'Teaching assistance', 
    items: [ 
      {title: "Stata lab notes", 
        technical: ['Stata'], 
        description: <div> 
          <p>I wrote these notes as a teaching assistant for the course <a href={'https://etudier.uqam.ca/cours?sigle=ECO5072'}>ECO5072-activit?? de synth??se</a> at UQAM university.</p> 
          
          <p>This course aimed to link economic theory and quantitative methods and econometric. It also initiated students to empirical research; including review of academic literature, and results replication of empirical study.</p> 

          <p>As a teaching assistant I had to initiate, teach and support students with the usage of the software <em>Stata</em> and empirical work. For that purpose I wrote a series of notes listed <a href={'https://github.com/fredjgermain/Demo/tree/master/08-Laboratoire_Stata'} >on github</a>.</p>
          </div>, 
        href:'https://github.com/fredjgermain/Demo/tree/master/08-Laboratoire_Stata'},
    ] as IProjectItem[] 
  }, 
] 

export const feature = projectsdata[0].items[0] as IProjectItem; 
