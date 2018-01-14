var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.739236, lng: -104.990251 },
    zoom: 13
    // maptypeId = google.maps.MapTypeId.ROADMAP
  });
}
window.onload();
