// options 

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}



// create map
const map = L.map('mapid', options).setView([-27.2199484,-49.6485941], 15);

// Create and Add Tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);


// Create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})



// Create and Add marker
L.marker([-27.2199484,-49.6485941], { icon })
.addTo(map)

/*Image Gallery */

function selectImage(event) {
  const button = event.currentTarget
  
  console.log(button.children)

  //Remover todas as classes .active 
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)


  function removeActiveClass(button) {
    button.classList.remove('active');
}

  //selecionar imagem clicada

  const image = button.children[0]
  const imageContainer = document.querySelector('.orphanage-details > img')

  //Atualizar o container da imagem 
  imageContainer.src = image.src

  //adicionar a classe active para este botão
  
  button.classList.add('active')


}