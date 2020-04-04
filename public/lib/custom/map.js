function initMap() {
  var bounds = new google.maps.LatLngBounds();
  var map;
  map = new google.maps.Map(document.getElementById("map_canvas"));
  map.setTilt(45);
  var arrow_icon = {
    path:
      "M50,0C31.294,0,16.129,15.165,16.129,33.87c0,0.401,0.012,0.809,0.03,1.221c0.127,3.558,0.798,6.975,1.939,10.172  C25.324,69.015,50,100,50,100s24.673-30.982,31.9-54.734c1.143-3.197,1.813-6.617,1.939-10.175c0.02-0.412,0.031-0.819,0.031-1.221  C83.871,15.165,68.706,0,50,0z M50,50.459c-9.161,0-16.589-7.428-16.589-16.589c0-9.16,7.428-16.588,16.589-16.588  c9.162,0,16.589,7.428,16.589,16.588C66.589,43.031,59.162,50.459,50,50.459z",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#563d7c",
    fillOpacity: 1,
    rotation: 0,
    scale: 0.4
  };
  var infoWin = new google.maps.InfoWindow();
  var markers = locations.map(function(location, i) {
    var position = new google.maps.LatLng(location.lat, location.lng);
    bounds.extend(position);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: arrow_icon
    });
    google.maps.event.addListener(marker, "click", function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    });
    map.fitBounds(bounds);
    return marker;
  });
  var mcOptions = {
    styles: [
      {
        url: "img/cluster/m1.png",
        width: 53,
        height: 53,
        textSize: 14,
        textColor: "#fff"
      }
    ]
  };
  var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}
var locations = [
  {
    lat: -19.9286,
    lng: -43.93888,
    info: "3 bed semi-detached house for sale"
  },
  {
    lat: -19.85758,
    lng: -43.9668,
    info: "2 bed room house for rent"
  },
  {
    lat: -18.24587,
    lng: -43.59613,
    info: "marker 3"
  },
  {
    lat: -20.46427,
    lng: -45.42629,
    info: "marker 4"
  },
  {
    lat: -20.37817,
    lng: -43.41641,
    info: "marker 5"
  },
  {
    lat: -20.09749,
    lng: -43.48831,
    info: "marker 6"
  },
  {
    lat: -21.13594,
    lng: -44.26132,
    info: "marker 7"
  }
];

$(window).resize(function() {
  initMap();
});
//Sticky
$(document).ready(function() {
  function mapWindow() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var menuHeight = $("#menu").height();
    var heightD = windowHeight;
    if (windowWidth > 767) {
      $("#map_wrapper").height(heightD);
    } else {
      $("#map_wrapper").height("auto");
    }
  }
  mapWindow();
  $(window).resize(function() {
    mapWindow();
  });
});
$(".has-map.fixed>*").theiaStickySidebar({
  additionalMarginTop: 0,
  additionalMarginBottom: 0,
  minWidth: 767
});

//Sidr
$(document).ready(function() {
  $("#toggle-filters").sidr({
    side: "left",
    displace: false,
    renaming: false,
    name: "sidebar",
    source: function() {
      AOS.refresh();
    }
  });
});
