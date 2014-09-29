function registerBatey(data){
    console.log(data);
    alert(data);
}

function geo_success(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    var lat_box = document.getElementById('gps-lat-input');
    var lon_box = document.getElementById('gps-lon-input');
    
    lat_box.value = position.coords.latitude
    lon_box.value = position.coords.longitude
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

function getPosition (){
    if ("geolocation" in navigator) {
        console.log('yes')
        
    navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
        /**/
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}