const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
 // INSERIR DADOS NA TABELA
  await saveOrphanage(db,{    
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Lar das meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "997003928",
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

  //Consultar somente um orfanato, pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  
  //Deletar dado da TABELA
  //console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))

  
})