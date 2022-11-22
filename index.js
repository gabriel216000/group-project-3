// Initialize and add the map
function initMap() {
  

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 64.1466, lng: -21.9426},
    zoom: 16,
    mapId: 'f4ce3575160e107d',
    
    });

  let marker = makeMarker(32, map);
  
  map.addListener("zoom_changed", () => {
    marker.setMap(null);
    if (map.getZoom()> 15){
       marker = makeMarker(32, map);
      
    } else if (map.getZoom()> 11) {
      marker = makeMarker(20, map);
    }

    
  });
 };

 const makeMarker = (size, map) => {
  var image = {
    url: 'images/pinkSlide.png',
    scaledSize: new google.maps.Size(size, size),
  };
  
  let marker = new google.maps.Marker({
    position:{lat: 64.1466, lng: -21.9426},
    map:map,  
    icon: image, 
  });
  return marker;
 }
 



