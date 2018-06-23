scrollFN = () => {
  window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (this.scrollY <= 10) nav.className = 'navColor--transparent'; else nav.className = 'navColor';
  };
}

initMap = () => {
  var locationMap = { lat: -23.5704701, lng: -46.6462687 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: locationMap
  });

  var contentString = `
          <div id="content">  
            <div id="bodyContent">
              <p><b>Cat Club</b>
              <br>
              <br>
              This is cat club, the best place for cute cats!</p>
              <a target="_blank" href="https://www.google.com.br/maps/place/Av.+Paulista,+200/@-23.5703521,-46.6474167,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce59bdf2af644f:0xe67aa8ec85b81657!8m2!3d-23.5703521!4d-46.645228">
              <br>
              See the map</a>
            </div>
          </div> `;

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: locationMap,
    map: map,
    title: 'The cat Club'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
};


buttomMenuHanburguer = () => {

  let clickBtnHB = document.getElementById('touch-btnHb');
  let showMenuHB = document.getElementById('getMenuHB');
  let closeMenuHB = document.querySelectorAll('a.close');

  clickBtnHB.addEventListener('click', () => {
    showMenuHB.setAttribute(
      "style", `right: 0%;
         transition: .5s`)

  })

  closeMenuHB.forEach((index) => {

    index.addEventListener('click', () => {

      showMenuHB.setAttribute(
        "style", `right: -100%;
           transition: .8s`)

    })
    console.log(index);
  })

}

slideFN = () => {
  let imagesSlide = document.querySelectorAll('header > img');

  imagesSlide.forEach((index) => {
    console.log(index)
  })

}


scrollFN()
buttomMenuHanburguer()
slideFN()