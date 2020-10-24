// create map
const map = L.map("mapid").setView([-27.2199484, -49.6485941], 15);

// Create and Add Tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});


let marker;

// Create and Add marker
map.on('click',(event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;


   //Remove Icon
   marker && map.removeLayer(marker)

   //add icon layer
   marker = L.marker([lat,lng], {icon})
   .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  //Verificar se esta vazio, se sim, não adicionar ao container de imagens  
  const input = newFieldContainer.children[0]

  if (input.value == ""){
    return
  } 
  //Limpar o campo antes de adicionar ao container de images
  input.value = ""

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1){
    // limpar o campo
    span.parentNode.children[0].value = ''
    return
  }
   
  // deletar o campo
  span.parentNode.remove()

}


// select yes or no 
function toggleSelect(event){
 
  // retirar a class .active (dos botoes)
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))

// colocar a class active no botão clicado
  const button = event.currentTarget
  button.classList.add("active")

 // Atualizar input hidden com o valor selecionado
 
 const input = document.querySelector('[name="open_on_weekends"]')

 input.value = button.dataset.value
}