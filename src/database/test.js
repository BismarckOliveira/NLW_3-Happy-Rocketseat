const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
 // INSERIR DADOS NA TABELA
  await saveOrphanage(db,{    
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dae amor",
    whasapp: "997003928",
    description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    images: [
           "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
           "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1"

  })
   
  // CONSULTAR DADOS
  const selectedOphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOphanages)


  
})