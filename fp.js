'use strict';

function initMap() {
  var uluru = {lat: 47.60, lng: -122.33};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
