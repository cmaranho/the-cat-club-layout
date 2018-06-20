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
            <p><b>Cat Club</b>, this is cat club, the best place for cute cats!</p>
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
}

scrollFN()


